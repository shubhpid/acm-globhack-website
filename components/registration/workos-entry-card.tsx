'use client'

import Link from 'next/link'
import { useState } from 'react'
import { KeyRound } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type WorkOSEntryCardProps = {
  actionPath: '/login' | '/register'
  disabled?: boolean
  footerHref: string
  footerLinkLabel: string
  footerText: string
  mode: 'sign-in' | 'register'
  subtitle: string
  title: string
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#EA4335"
        d="M12 10.2v3.9h5.4c-.2 1.3-1.6 3.9-5.4 3.9-3.3 0-5.9-2.7-5.9-6s2.6-6 5.9-6c1.9 0 3.1.8 3.9 1.5l2.7-2.6C16.8 3.2 14.6 2.2 12 2.2 6.6 2.2 2.2 6.6 2.2 12S6.6 21.8 12 21.8c6.9 0 9.4-4.8 9.4-7.3 0-.5-.1-.9-.1-1.2H12Z"
      />
      <path
        fill="#34A853"
        d="M3.3 7.3 6.5 9.6C7.3 7.5 9.4 6 12 6c1.9 0 3.1.8 3.9 1.5l2.7-2.6C16.8 3.2 14.6 2.2 12 2.2c-3.8 0-7.1 2.2-8.7 5.1Z"
      />
      <path
        fill="#FBBC05"
        d="M12 21.8c2.5 0 4.7-.8 6.3-2.3l-3-2.4c-.8.6-1.9 1-3.3 1-3.7 0-5.1-2.5-5.4-3.8l-3.1 2.4c1.6 3 4.8 5.1 8.5 5.1Z"
      />
      <path
        fill="#4285F4"
        d="M21.4 13.3c.1-.3.2-.8.2-1.3s-.1-1-.2-1.4H12v3.9h5.4c-.3 1.3-1.1 2.3-2.1 2.9l3 2.4c1.8-1.7 3.1-4.2 3.1-7.5Z"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 .1.7 2.4 3.1 2 0-.8.4-1.5.7-1.8-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.3-5.3 5.7.4.4.8 1.2.8 2.4v3.5c0 .4.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.2 5.4 18.3.5 12 .5Z" />
    </svg>
  )
}

export function WorkOSEntryCard({
  actionPath,
  disabled = false,
  footerHref,
  footerLinkLabel,
  footerText,
  mode,
  subtitle,
  title,
}: WorkOSEntryCardProps) {
  const [email, setEmail] = useState('')

  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-400">
              WorkOS AuthKit
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">{title}</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
          </div>

          <form
            action={actionPath}
            className="space-y-5"
            method="GET"
            onSubmit={(event) => {
              if (disabled) {
                event.preventDefault()
              }
            }}
          >
            <div className="space-y-3">
              <label className="text-left text-lg font-semibold text-white" htmlFor={`${mode}-email`}>
                Email
              </label>
              <div className="relative">
                <Input
                  className={cn(
                    'h-16 rounded-2xl glass-input border-white/10 pl-6 pr-16 text-lg text-white placeholder:text-muted-foreground focus:border-cyan-500/50 focus:ring-cyan-500/20',
                    disabled && 'opacity-60',
                  )}
                  id={`${mode}-email`}
                  name="email"
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  type="email"
                  value={email}
                />
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                  <div className="rounded-xl bg-cyan-500/10 p-2 border border-cyan-500/20">
                    <KeyRound className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>

            <Button
              className="h-14 w-full rounded-2xl bg-cyan-500/90 hover:bg-cyan-500 text-xl font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
              disabled={disabled}
              type="submit"
            >
              Continue
            </Button>
          </form>

          <div className="my-8 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            <span className="h-px flex-1 bg-white/10" />
            <span>OR</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div className="flex flex-col gap-3">
            <Button
              asChild={!disabled}
              className="h-14 w-full rounded-2xl glass-card border-white/10 text-lg text-foreground hover:bg-white/5"
              variant="outline"
            >
              {disabled ? (
                <span className="flex items-center justify-center gap-3">
                  <GoogleIcon />
                  Continue with Google
                </span>
              ) : (
                <a href={actionPath} className="flex items-center justify-center gap-3 w-full">
                  <GoogleIcon />
                  Continue with Google
                </a>
              )}
            </Button>

            <Button
              asChild={!disabled}
              className="h-14 w-full rounded-2xl glass-card border-white/10 text-lg text-foreground hover:bg-white/5"
              variant="outline"
            >
              {disabled ? (
                <span className="flex items-center justify-center gap-3">
                  <GitHubIcon />
                  Continue with GitHub
                </span>
              ) : (
                <a href={actionPath} className="flex items-center justify-center gap-3 w-full">
                  <GitHubIcon />
                  Continue with GitHub
                </a>
              )}
            </Button>
          </div>

          <p className="mt-8 text-center text-lg text-muted-foreground">
            {footerText}{' '}
            <Link className="font-medium text-cyan-400 transition-colors hover:text-cyan-300" href={footerHref}>
              {footerLinkLabel}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
