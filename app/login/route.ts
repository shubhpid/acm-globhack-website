import { redirect } from 'next/navigation'
import { getSignInUrl } from '@workos-inc/authkit-nextjs'

import { isWorkOSConfigured } from '@/lib/workos'

export async function GET(request: Request) {
  if (!isWorkOSConfigured) {
    redirect('/sign-in')
  }

  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')?.trim() || undefined
  const signInUrl = await getSignInUrl({
    loginHint: email,
    returnTo: '/sign-up',
  })

  redirect(signInUrl)
}

