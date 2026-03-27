import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import { authkitProxy } from '@workos-inc/authkit-nextjs'

import { isWorkOSConfigured } from '@/lib/workos'

const workosProxy = authkitProxy({
  signUpPaths: ['/sign-up', '/register'],
})

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  if (!isWorkOSConfigured) {
    return NextResponse.next()
  }

  return workosProxy(request, event)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
