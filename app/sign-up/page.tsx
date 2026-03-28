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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-blue w-[500px] h-[500px] -top-20 -left-40" />
          <div className="orb orb-magenta w-[400px] h-[400px] bottom-20 -right-32" />
          <div className="orb orb-cyan w-[300px] h-[300px] top-1/2 left-1/2" />
          <div className="grid-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-[var(--cyan)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="space-y-10">
              {user ? (
                <>
                  <div className="rounded-[2rem] border border-white/10 bg-[#15181f]/92 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="rounded-2xl bg-[rgba(2,125,194,0.15)] p-3 text-[var(--cyan)]">
                          <ShieldCheck className="h-7 w-7" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--cyan)]/75">
                            Authenticated
                          </p>
                          <h2 className="mt-2 text-3xl font-bold text-white">
                            Welcome back, {user.firstName || user.email}
                          </h2>
                          <p className="mt-2 text-base text-zinc-400">
                            Signed in with <span className="text-white">{user.email}</span>. Your
                            application window is now available below.
                          </p>
                        </div>
                      </div>

                      <form
                        action={async () => {
                          'use server'
                          await signOut({ returnTo: '/sign-up' })
                        }}
                      >
                        <Button className="h-12 rounded-2xl px-6" type="submit" variant="outline">
                          Sign Out
                        </Button>
                      </form>
                    </div>
                  </div>
                  <RegistrationApplicationForm
                    attendeeEmail={user.email}
                    authenticated={Boolean(user)}
                  />
                </>
              ) : (
                <div className="space-y-6">
                  <WorkOSEntryCard
                    actionPath="/register"
                    disabled={!isWorkOSConfigured}
                    footerHref="/sign-in"
                    footerLinkLabel="Sign in"
                    footerText="Already have an account?"
                    mode="register"
                    subtitle="Start with WorkOS AuthKit to unlock the application window right after you sign up or log in."
                    title="Sign up"
                  />
                  <div className="rounded-2xl border border-dashed border-[color:rgba(134,163,233,0.35)] bg-[rgba(10,14,24,0.72)] px-6 py-5 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--cyan)]/75">
                      Application Locked
                    </p>
                    <p className="mt-3 text-lg text-zinc-300">
                      Sign up or log in first, and the full application window will appear here
                      automatically.
                    </p>
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
}
