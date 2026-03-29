create table users (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text not null,
  image text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table transactions (
  id uuid primary key default gen_random_uuid(),
  user_id text not null,
  nature text not null,
  name text not null,
  category text not null,
  amount numeric not null,
  date date not null,
  created_at timestamptz default now()
);