import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { signOut, withAuth } from '@workos-inc/authkit-nextjs'

import { Footer } from '@/components/footer'
import { Navigation } from '@/components/navigation'
import { WorkOSEntryCard } from '@/components/registration/workos-entry-card'
import { Button } from '@/components/ui/button'
import { isWorkOSConfigured } from '@/lib/workos'

export default async function SignInPage() {
  const auth = isWorkOSConfigured ? await withAuth() : null
  const user = auth?.user ?? null

  const desktopContent = (
    <div className="min-h-screen bg-[rgb(8,8,16)] flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(8,8,16)] via-[rgb(12,12,24)] to-[rgb(8,8,16)]" />
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-cyan-500/3 blur-[150px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-cyan-400">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.36em] text-cyan-400">Secure Access</p>
              <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
                Sign in to your <span className="text-amber-400">Globehack</span> profile
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Use WorkOS AuthKit to continue with email, Google, or GitHub.
              </p>
            </div>
            {user ? (
              <div className="mx-auto max-w-3xl">
                <div className="glass-panel rounded-3xl p-8 text-center border border-white/5">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 border border-cyan-500/20">
                    <ShieldCheck className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h2 className="mt-5 text-3xl font-bold text-white">You&apos;re already signed in</h2>
                  <p className="mt-3 text-lg text-muted-foreground">Logged in as <span className="text-white">{user.email}</span></p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button asChild className="h-12 rounded-2xl glass-button px-6 text-white">
                      <Link href="/sign-up">Go to Registration</Link>
                    </Button>
                    <form action={async () => { 'use server'; await signOut({ returnTo: '/sign-in' }) }}>
                      <Button className="h-12 rounded-2xl glass-card border-white/10 px-6 text-foreground hover:bg-white/5" type="submit" variant="outline">Sign Out</Button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <WorkOSEntryCard actionPath="/login" disabled={!isWorkOSConfigured} footerHref="/sign-up" footerLinkLabel="Sign up" footerText="Don't have an account?" mode="sign-in" subtitle="Your email is passed to WorkOS as a login hint, and social sign-in continues through your configured AuthKit providers." title="Sign in" />
              <WorkOSEntryCard
                actionPath="/login"
                footerHref="/sign-up"
                footerLinkLabel="Sign up"
                footerText="Don't have an account?"
                mode="sign-in"
                subtitle="Your email is passed to WorkOS as a login hint, and social sign-in continues through your configured AuthKit providers."
                title="Sign in"
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )

  const mobileContent = (
    <div className="min-h-screen bg-[rgb(8,8,16)] flex flex-col overflow-x-hidden">
      <Navigation />
      <main className="flex-1 pt-24 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(8,8,16)] via-[rgb(12,12,24)] to-[rgb(8,8,16)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-cyan-500/3 blur-[100px] pointer-events-none" />
        <div className="relative z-10 px-4">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
            <ArrowLeft className="h-4 w-4" />Back to Home
          </Link>
          <div className="text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-2">Secure Access</p>
            <h1 className="text-2xl font-bold text-white">
              Sign in to your <span className="text-amber-400">Globehack</span> profile
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Continue with email, Google, or GitHub.</p>
          </div>
          {user ? (
            <div className="glass-panel rounded-2xl p-5 text-center border border-white/5">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/20 mb-3">
                <ShieldCheck className="h-6 w-6 text-cyan-400" />
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Already signed in</h2>
              <p className="text-sm text-muted-foreground mb-5">Logged in as <span className="text-white">{user.email}</span></p>
              <div className="flex flex-col gap-2.5">
                <Button asChild className="h-11 rounded-xl glass-button text-white w-full"><Link href="/sign-up">Go to Registration</Link></Button>
                <form action={async () => { 'use server'; await signOut({ returnTo: '/sign-in' }) }}>
                  <Button className="h-11 rounded-xl glass-card border-white/10 text-foreground hover:bg-white/5 w-full" type="submit" variant="outline">Sign Out</Button>
                </form>
              </div>
            </div>
          ) : (
            <WorkOSEntryCard actionPath="/login" disabled={!isWorkOSConfigured} footerHref="/sign-up" footerLinkLabel="Sign up" footerText="Don't have an account?" mode="sign-in" subtitle="Sign in with your email or a social provider." title="Sign in" />
          )}
        </div>
      </main>
      <Footer />
    </div>
  )

  return (
    <>
      <div className="hidden md:block">{desktopContent}</div>
      <div className="block md:hidden">{mobileContent}</div>
    </>
  )
}
