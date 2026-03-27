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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 immersive-bg">
          <div className="absolute inset-0 noise-overlay" />
          <div className="orb orb-cyan w-[420px] h-[420px] -top-16 -left-28" />
          <div className="orb orb-blue w-[320px] h-[320px] bottom-12 -right-24" />
          <div className="grid-overlay" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-[var(--cyan)]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>

            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.36em] text-[var(--cyan)]/75">
                Secure Access
              </p>
              <h1 className="mt-4 text-4xl font-bold text-white md:text-6xl">
                Sign in to your <span className="text-[var(--gold)]">Globehacks</span> profile
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
                Use WorkOS AuthKit to continue with email, Google, or GitHub and return to
                your registration flow.
              </p>
            </div>

            {user ? (
              <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[#15181f]/90 p-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgba(2,125,194,0.15)] text-[var(--cyan)]">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h2 className="mt-5 text-3xl font-bold text-white">You&apos;re already signed in</h2>
                <p className="mt-3 text-lg text-zinc-400">
                  Logged in as <span className="text-white">{user.email}</span>
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button asChild className="h-12 rounded-2xl bg-[var(--blue)] px-6 text-white">
                    <Link href="/sign-up">Go to Registration</Link>
                  </Button>
                  <form
                    action={async () => {
                      'use server'
                      await signOut({ returnTo: '/sign-in' })
                    }}
                  >
                    <Button className="h-12 rounded-2xl px-6" type="submit" variant="outline">
                      Sign Out
                    </Button>
                  </form>
                </div>
              </div>
            ) : (
              <WorkOSEntryCard
                actionPath="/login"
                disabled={!isWorkOSConfigured}
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
}
