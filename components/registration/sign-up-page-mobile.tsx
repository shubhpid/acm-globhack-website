import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { WorkOSEntryCard } from "./workos-entry-card"
import { isWorkOSConfigured } from "@/lib/workos"

export function SignUpPageMobile() {
  return (
    <main className="min-h-screen bg-[rgb(8,8,16)] overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(8,8,16)] via-[rgb(12,12,24)] to-[rgb(8,8,16)]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-blue-500/3 blur-[100px] pointer-events-none" />

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
            Registration
          </p>
          <h1 className="text-2xl font-bold text-white">
            Register for{" "}
            <span className="text-cyan-400">Globehacks</span>{" "}
            <span className="text-amber-400">&apos;26</span>
          </h1>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Sign up with WorkOS to unlock the full application form.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <WorkOSEntryCard
            actionPath="/register"
            disabled={!isWorkOSConfigured}
            footerHref="/sign-in"
            footerLinkLabel="Sign in"
            footerText="Already have an account?"
            mode="register"
            subtitle="Sign up or log in to unlock the application window."
            title="Sign up"
          />

          <div className="glass-card rounded-xl border border-white/5 px-4 py-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Application Locked
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign up or log in first, and the full application window will appear automatically.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
