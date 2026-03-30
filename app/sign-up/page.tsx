import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { RegistrationApplicationForm } from '@/components/registration/registration-application-form'
import { WorkOSEntryCard } from '@/components/registration/workos-entry-card'
import { Button } from '@/components/ui/button'
import { isWorkOSConfigured } from '@/lib/workos'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { signOut, withAuth } from '@workos-inc/authkit-nextjs'

export default async function SignUpPage() {
  const auth = isWorkOSConfigured ? await withAuth() : null
  const user = auth?.user ?? null

  const desktopContent = (
    <div className="min-h-screen bg-[rgb(8,8,16)] flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(8,8,16)] via-[rgb(12,12,24)] to-[rgb(8,8,16)]" />
        <div className="absolute inset-0 grid-overlay opacity-50" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/3 blur-[150px]" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Link href="/" className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-cyan-400">
              <ArrowLeft className="h-4 w-4" />Back to Home
            </Link>
            <div className="space-y-10">
              {user ? (
                <>
                  <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-cyan-500/20 p-3 border border-cyan-500/20">
                          <ShieldCheck className="h-7 w-7 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">Authenticated</p>
                          <h2 className="mt-2 text-3xl font-bold text-white">Welcome back, {user.firstName || user.email}</h2>
                          <p className="mt-2 text-base text-muted-foreground">Signed in with <span className="text-white">{user.email}</span>. Your application window is now available below.</p>
                        </div>
                      </div>
                      <form action={async () => { 'use server'; await signOut({ returnTo: '/' }) }}>
                        <Button className="h-12 rounded-2xl glass-card border-white/10 px-6 hover:bg-white/5 transition-transform duration-200 hover:scale-105 cursor-pointer" type="submit" variant="outline">Sign Out</Button>
                      </form>
                    </div>
                  </div>
                  <RegistrationApplicationForm attendeeEmail={user.email} authenticated={Boolean(user)} />
                </>
              ) : (
                <div className="space-y-6">
                  <WorkOSEntryCard actionPath="/register" disabled={!isWorkOSConfigured} footerHref="/sign-in" footerLinkLabel="Sign in" footerText="Already have an account?" mode="register" subtitle="Register with Google or GitHub to unlock the application window right away." title="Sign up" />
                  <div className="glass-card rounded-2xl border border-white/5 px-6 py-5 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">Application Locked</p>
                    <p className="mt-3 text-lg text-muted-foreground">Register or sign in with Google or GitHub first, and the full application window will appear here automatically.</p>
                  </div>
                </div>
              )}
            </div>
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
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-blue-500/3 blur-[100px] pointer-events-none" />
        <div className="relative z-10 px-4">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors">
            <ArrowLeft className="h-4 w-4" />Back to Home
          </Link>
          <div className="text-center mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-2">Registration</p>
            <h1 className="text-2xl font-bold text-white">
              Register for <span className="text-cyan-400">Globehack</span> <span className="text-amber-400">&apos;26</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Register with Google or GitHub to unlock the full application form.</p>
          </div>
          {user ? (
            <div className="flex flex-col gap-4">
              <div className="glass-panel rounded-2xl p-4 border border-white/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-xl bg-cyan-500/20 p-2 border border-cyan-500/20 shrink-0">
                    <ShieldCheck className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">Authenticated</p>
                    <p className="text-sm font-bold text-white">Welcome, {user.firstName || user.email}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Signed in as <span className="text-white">{user.email}</span></p>
                <form action={async () => { 'use server'; await signOut({ returnTo: '/' }) }}>
                  <Button className="h-10 rounded-xl glass-card border-white/10 text-foreground hover:bg-white/5 w-full text-sm" type="submit" variant="outline">Sign Out</Button>
                </form>
              </div>
              <RegistrationApplicationForm attendeeEmail={user.email} authenticated={Boolean(user)} />
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <WorkOSEntryCard actionPath="/register" disabled={!isWorkOSConfigured} footerHref="/sign-in" footerLinkLabel="Sign in" footerText="Already have an account?" mode="register" subtitle="Use Google or GitHub to unlock the application window." title="Sign up" />
              <div className="glass-card rounded-xl border border-white/5 px-4 py-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">Application Locked</p>
                <p className="mt-2 text-sm text-muted-foreground">Register or sign in with Google or GitHub first, and the full application will appear automatically.</p>
              </div>
            </div>
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
