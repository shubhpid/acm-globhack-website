import { NextResponse } from 'next/server'
import { withAuth } from '@workos-inc/authkit-nextjs'

import {
  getSupabaseAdmin,
  isSupabaseConfigured,
  supabaseApplicationsBucket,
} from '@/lib/supabase-admin'

const MAX_RESUME_SIZE_BYTES = 1024 * 1024

function readRequiredString(formData: FormData, key: string) {
  const value = formData.get(key)

  if (typeof value !== 'string' || !value.trim()) {
    throw new Error(`Missing required field: ${key}`)
  }

  return value.trim()
}

function sanitizeFilename(filename: string) {
  return filename.replace(/[^a-zA-Z0-9._-]/g, '-')
}

export async function POST(request: Request) {
  if (!isSupabaseConfigured) {
    return NextResponse.json(
      { error: 'Supabase is not configured yet.' },
      { status: 500 },
    )
  }

  try {
    const { user } = await withAuth({ ensureSignedIn: true })
    const formData = await request.formData()

    const firstName = readRequiredString(formData, 'firstName')
    const lastName = readRequiredString(formData, 'lastName')
    const major = readRequiredString(formData, 'major')
    const tShirtSize = readRequiredString(formData, 'tshirtSize')
    const dietaryPreference = readRequiredString(formData, 'dietaryPreference')
    const dietaryOther =
      dietaryPreference === 'Other'
        ? readRequiredString(formData, 'dietaryOther')
        : null
    const motivation = readRequiredString(formData, 'motivation')
    const teamPreference = readRequiredString(formData, 'teamPreference')
    const resume = formData.get('resume')

    if (!(resume instanceof File)) {
      return NextResponse.json(
        { error: 'Please upload your resume before submitting.' },
        { status: 400 },
      )
    }

    if (resume.type !== 'application/pdf') {
      return NextResponse.json(
        { error: 'Resume must be uploaded as a PDF.' },
        { status: 400 },
      )
    }

    if (resume.size > MAX_RESUME_SIZE_BYTES) {
      return NextResponse.json(
        { error: 'Resume files must be 1MB or smaller.' },
        { status: 400 },
      )
    }

    const supabase = getSupabaseAdmin()
    const resumePath = `${user.id}/resume-${Date.now()}-${sanitizeFilename(resume.name)}`

    const existingApplication = await supabase
      .from('applications')
      .select('resume_path')
      .eq('user_id', user.id)
      .maybeSingle()

    if (existingApplication.error) {
      throw existingApplication.error
    }

    const uploadResult = await supabase.storage
      .from(supabaseApplicationsBucket)
      .upload(resumePath, await resume.arrayBuffer(), {
        contentType: resume.type,
        upsert: true,
      })

    if (uploadResult.error) {
      throw uploadResult.error
    }

    if (
      existingApplication.data?.resume_path &&
      existingApplication.data.resume_path !== resumePath
    ) {
      await supabase.storage
        .from(supabaseApplicationsBucket)
        .remove([existingApplication.data.resume_path])
    }

    const upsertResult = await supabase.from('applications').upsert(
      {
        user_id: user.id,
        email: user.email,
        first_name: firstName,
        last_name: lastName,
        major,
        t_shirt_size: tShirtSize,
        dietary_preference: dietaryPreference,
        dietary_other: dietaryOther,
        motivation,
        team_preference: teamPreference,
        resume_filename: resume.name,
        resume_path: resumePath,
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'user_id' },
    )

    if (upsertResult.error) {
      throw upsertResult.error
    }

    return NextResponse.json({
      message: 'You have submitted the application.',
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Failed to save application.'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
