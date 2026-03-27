import { redirect } from 'next/navigation'
import { getSignUpUrl } from '@workos-inc/authkit-nextjs'

import { isWorkOSConfigured } from '@/lib/workos'

export async function GET(request: Request) {
  if (!isWorkOSConfigured) {
    redirect('/sign-up')
  }

  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')?.trim() || undefined
  const signUpUrl = await getSignUpUrl({
    loginHint: email,
    returnTo: '/sign-up',
  })

  redirect(signUpUrl)
}

