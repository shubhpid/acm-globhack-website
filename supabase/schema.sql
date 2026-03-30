create extension if not exists pgcrypto;

insert into storage.buckets (id, name, public)
values ('applications-resumes', 'applications-resumes', false)
on conflict (id) do nothing;

create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  user_id text not null unique,
  email text not null,
  first_name text not null,
  last_name text not null,
  major text not null,
  t_shirt_size text not null,
  dietary_preference text not null,
  dietary_other text,
  motivation text not null,
  team_preference text not null,
  resume_filename text not null,
  resume_path text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists applications_email_idx on public.applications (email);
