import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { WorkOSEntryCard } from "./workos-entry-card"
import { isWorkOSConfigured } from "@/lib/workos"

export function SignInPageMobile() {
  return (
    <main className="min-h-screen bg-[rgb(8,8,16)] overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(8,8,16)] via-[rgb(12,12,24)] to-[rgb(8,8,16)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-cyan-500/3 blur-[100px] pointer-events-none" />

      <div className="relative z-10 px-4 pt-24 pb-12">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 mb-2">
            Secure Access
          </p>
          <h1 className="text-2xl font-bold text-white">
            Sign in to your{" "}
            <span className="text-amber-400">Globehack</span> profile
          </h1>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Use WorkOS AuthKit to continue with Google or GitHub.
          </p>
        </div>

        <WorkOSEntryCard
          actionPath="/login"
          disabled={!isWorkOSConfigured}
          footerHref="/sign-up"
          footerLinkLabel="Sign up"
          footerText="Don't have an account?"
          mode="sign-in"
          subtitle="Sign in with Google or GitHub."
          title="Sign in"
        />
      </div>
    </main>
  )
}
