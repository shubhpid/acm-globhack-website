'use client'

import { FormEvent, useId, useState } from 'react'
import {
  FileText,
  Upload,
  UsersRound,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'

const checklistItems = [
  'Your first and last name',
  'Your major or field of study',
  'Resume (PDF, max 1MB)',
  'Dietary restrictions',
  'T-shirt size preference',
  'Team preference',
  'Motivation statement',
]

const teamOptions = [
  {
    description: 'Work independently on your project',
    label: 'Solo',
    value: 'solo',
  },
  {
    description: 'Get matched with or find an existing team. (Teams are created on the Devpost project submission!)',
    label: 'Finding a Team',
    value: 'finding-team',
  },
]

type RegistrationApplicationFormProps = {
  attendeeEmail?: string
  authenticated: boolean
}

export function RegistrationApplicationForm({
  attendeeEmail,
  authenticated,
}: RegistrationApplicationFormProps) {
  const resumeInputId = useId()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [major, setMajor] = useState('')
  const [tShirtSize, setTShirtSize] = useState('')
  const [teamPreference, setTeamPreference] = useState('solo')
  const [dietaryPreference, setDietaryPreference] = useState('')
  const [dietaryOther, setDietaryOther] = useState('')
  const [motivation, setMotivation] = useState('')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [resumeName, setResumeName] = useState('')
  const [resumeError, setResumeError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (resumeError) {
      setStatus(resumeError)
      return
    }

    if (!authenticated) {
      setStatus('Sign in with WorkOS above before submitting your registration.')
      return
    }

    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !major.trim() ||
      !tShirtSize ||
      !dietaryPreference ||
      !motivation.trim() ||
      !teamPreference
    ) {
      setStatus('Please complete all required fields before submitting.')
      return
    }

    if (dietaryPreference === 'Other' && !dietaryOther.trim()) {
      setStatus('Please specify your dietary preference.')
      return
    }

    if (!resumeFile) {
      setStatus('Please upload your resume before submitting.')
      return
    }

    setIsSubmitting(true)
    setStatus('')

    try {
      const formData = new FormData()
      formData.set('firstName', firstName.trim())
      formData.set('lastName', lastName.trim())
      formData.set('major', major.trim())
      formData.set('tshirtSize', tShirtSize)
      formData.set('dietaryPreference', dietaryPreference)
      formData.set('motivation', motivation.trim())
      formData.set('teamPreference', teamPreference)
      formData.set('resume', resumeFile)

      if (dietaryPreference === 'Other') {
        formData.set('dietaryOther', dietaryOther.trim())
      }

      const response = await fetch('/api/applications', {
        body: formData,
        method: 'POST',
      })

      const payload = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null

      if (!response.ok) {
        setStatus(payload?.error || 'Failed to save your application.')
        return
      }

      setStatus(
        payload?.message ||
          (attendeeEmail
            ? `You have submitted the application for ${attendeeEmail}.`
            : 'You have submitted the application.'),
      )
    } catch {
      setStatus('Something went wrong while saving your application.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-dashed border-[color:rgba(255,153,72,0.45)] bg-[linear-gradient(180deg,rgba(24,14,8,0.92),rgba(10,10,12,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-8">
        <div className="flex items-start gap-4">
          <div className="rounded-2xl bg-[rgba(255,153,72,0.14)] p-3 text-[var(--gold)]">
            <FileText className="h-7 w-7" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">What You&apos;ll Need</h3>
            <p className="mt-1 text-zinc-400">
              Prepare these items to complete your registration.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 text-lg text-zinc-200 md:grid-cols-2 md:gap-x-10">
          {checklistItems.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--gold)]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <form
        className="rounded-[2rem] border border-dashed border-[color:rgba(116,147,225,0.35)] bg-[radial-gradient(circle_at_top,rgba(18,30,58,0.25),rgba(4,5,8,0.96)_55%)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-10"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <label className="text-lg font-semibold text-white" htmlFor="firstName">
              First Name *
            </label>
            <Input
              className="h-14 rounded-2xl border-dashed border-[color:rgba(134,163,233,0.45)] bg-[rgba(11,18,34,0.8)] px-5 text-base text-white placeholder:text-zinc-500"
              id="firstName"
              name="firstName"
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="Enter your first name"
              required
              value={firstName}
            />
          </div>

          <div className="space-y-3">
            <label className="text-lg font-semibold text-white" htmlFor="lastName">
              Last Name *
            </label>
            <Input
              className="h-14 rounded-2xl border-dashed border-[color:rgba(134,163,233,0.45)] bg-[rgba(11,18,34,0.8)] px-5 text-base text-white placeholder:text-zinc-500"
              id="lastName"
              name="lastName"
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Enter your last name"
              required
              value={lastName}
            />
          </div>

          <div className="space-y-3">
            <label className="text-lg font-semibold text-white" htmlFor="major">
              Major/Field of Study *
            </label>
            <Input
              className="h-14 rounded-2xl border-dashed border-[color:rgba(134,163,233,0.45)] bg-[rgba(11,18,34,0.8)] px-5 text-base text-white placeholder:text-zinc-500"
              id="major"
              name="major"
              onChange={(event) => setMajor(event.target.value)}
              placeholder="e.g., Computer Science, Engineering, Business"
              required
              value={major}
            />
          </div>

          <div className="space-y-3">
            <label className="text-lg font-semibold text-white">T-Shirt Size *</label>
            <Select onValueChange={setTShirtSize} required value={tShirtSize}>
              <SelectTrigger className="h-14 w-full rounded-2xl border-dashed border-[color:rgba(134,163,233,0.45)] bg-[rgba(11,18,34,0.8)] px-5 text-base text-white">
                <SelectValue placeholder="Select size" />
              </SelectTrigger>
              <SelectContent className="border-white/10 bg-[#0E1320] text-white">
                {['M', 'L', 'XL'].map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <label className="text-lg font-semibold text-white">Dietary Restrictions *</label>
          <Select onValueChange={setDietaryPreference} required value={dietaryPreference}>
            <SelectTrigger className="h-14 w-full rounded-2xl border-dashed border-[color:rgba(134,163,233,0.45)] bg-[rgba(11,18,34,0.8)] px-5 text-base text-white">
              <SelectValue placeholder="Select preference" />
            </SelectTrigger>
            <SelectContent className="border-white/10 bg-[#0E1320] text-white">
              {[
                'No restrictions',
                'Vegetarian',
                'Vegan',
                'Non-Vegetarian',
                'Other',
              ].map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {dietaryPreference === 'Other' ? (
            <Input
              className="h-14 rounded-2xl border-dashed border-[color:rgba(134,163,233,0.45)] bg-[rgba(11,18,34,0.8)] px-5 text-base text-white placeholder:text-zinc-500"
              name="dietaryOther"
              onChange={(event) => setDietaryOther(event.target.value)}
              placeholder="Please specify your dietary preference"
              required
              value={dietaryOther}
            />
          ) : null}
        </div>

        <div className="mt-8 space-y-3">
          <label className="text-lg font-semibold text-white" htmlFor={resumeInputId}>
            Resume (PDF, max 1MB) *
          </label>
          <label
            className="flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-[color:rgba(134,163,233,0.45)] bg-[rgba(5,8,14,0.9)] px-6 py-10 text-center transition-colors hover:border-[var(--cyan)]/60 hover:bg-[rgba(8,14,26,0.95)]"
            htmlFor={resumeInputId}
          >
            <Upload className="h-12 w-12 text-zinc-300" />
            <p className="mt-5 text-2xl font-medium text-zinc-100">
              {resumeName || 'Click to upload your resume'}
            </p>
            <p className="mt-2 text-base text-zinc-500">PDF format, maximum 1MB</p>
            <input
              accept="application/pdf"
              className="hidden"
              id={resumeInputId}
              onChange={(event) => {
                const file = event.target.files?.[0]

                if (!file) {
                  setResumeError('')
                  setResumeFile(null)
                  setResumeName('')
                  return
                }

                if (file.type !== 'application/pdf') {
                  setResumeError('Please upload a PDF resume.')
                  setResumeFile(null)
                  setResumeName(file.name)
                  return
                }

                if (file.size > 1024 * 1024) {
                  setResumeError('Resume files must be 1MB or smaller.')
                  setResumeFile(null)
                  setResumeName(file.name)
                  return
                }

                setResumeError('')
                setResumeFile(file)
                setResumeName(file.name)
              }}
              required
              type="file"
            />
          </label>
          {resumeError ? <p className="text-sm text-red-400">{resumeError}</p> : null}
        </div>

        <div className="mt-8 space-y-3">
          <label className="text-lg font-semibold text-white" htmlFor="motivation">
            Why do you want to join Globehack? *
          </label>
          <Textarea
            className="min-h-40 rounded-[1.75rem] border-dashed border-[color:rgba(134,163,233,0.45)] bg-[rgba(11,18,34,0.8)] px-5 py-4 text-base text-white placeholder:text-zinc-500"
            id="motivation"
            name="motivation"
            onChange={(event) => setMotivation(event.target.value)}
            placeholder="Tell us about your passion for technology, what you hope to learn, or the impact you want to make..."
            required
            value={motivation}
          />
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-3">
            <UsersRound className="h-7 w-7 text-[var(--gold)]" />
            <h3 className="text-3xl font-bold text-white">Team Formation</h3>
          </div>
          <div className="mt-5 h-px bg-[linear-gradient(90deg,rgba(120,150,228,0.4),rgba(255,255,255,0.08),rgba(120,150,228,0.4))]" />

          <div className="mt-7 space-y-4">
            <p className="text-lg font-semibold text-white">How would you like to participate? *</p>
            <RadioGroup
              className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2"
              onValueChange={setTeamPreference}
              value={teamPreference}
            >
              {teamOptions.map((option) => (
                <label
                  key={option.value}
                  className={cn(
                    'flex cursor-pointer flex-col rounded-[1.5rem] border border-dashed border-[color:rgba(134,163,233,0.35)] bg-[rgba(10,14,24,0.88)] p-5 transition-all hover:border-[var(--gold)]/60 hover:bg-[rgba(14,18,30,0.95)]',
                    teamPreference === option.value &&
                      'border-[var(--gold)] bg-[rgba(43,28,10,0.45)] shadow-[0_0_0_1px_rgba(255,191,107,0.25)]',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      className="border-white/40 text-[var(--gold)]"
                      value={option.value}
                    />
                    <span className="text-2xl font-semibold text-white">{option.label}</span>
                  </div>
                  <p className="mt-4 text-lg leading-snug text-zinc-400">{option.description}</p>
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>
        <Button
          className="mt-8 h-14 w-full rounded-2xl border border-dashed border-[color:rgba(255,153,72,0.55)] bg-transparent text-lg font-semibold text-[var(--gold)] hover:bg-[rgba(255,153,72,0.08)]"
          disabled={isSubmitting}
          type="submit"
          variant="outline"
        >
          {isSubmitting ? 'Saving Application...' : 'Submit Application'}
        </Button>

        {status ? (
          <p
            className={cn(
              'mt-4 text-center text-sm',
              authenticated && !resumeError ? 'text-emerald-300' : 'text-amber-300',
            )}
          >
            {status}
          </p>
        ) : null}
      </form>
    </div>
  )
}
