# Roadmap Progress Sync Setup

Your roadmap now supports **cross-device sync**! Here's how to set it up:

## Quick Setup (5 minutes)

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in:
   - **Project name:** `aanka` (or any name)
   - **Database password:** Create a strong password
   - **Region:** Choose closest to you
5. Click "Create new project" and wait ~2 minutes

### 2. Create the Database Table

1. Go to **SQL Editor** in your Supabase dashboard
2. Create a new query and paste:

```sql
CREATE TABLE roadmap_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  progress JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS (Row Level Security)
ALTER TABLE roadmap_progress ENABLE ROW LEVEL SECURITY;

-- Allow users to read/write their own progress
CREATE POLICY "Users can manage their own progress"
  ON roadmap_progress
  FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
```

3. Click "Run" to create the table

### 3. Get Your API Keys

1. Go to **Settings** → **API**
2. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Add Keys to Your App

Create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 5. Enable Email Auth (Optional but Recommended)

1. Go to **Authentication** → **Providers**
2. Find "Email" and toggle it ON
3. Optional: Customize the email template under **Email Templates**

### 6. Done! 

Now when users visit the roadmap:
- ✅ Click "Sign in to sync"
- ✅ Enter their email
- ✅ Check their email for a magic link
- ✅ Progress syncs across all devices

## How It Works

```
User ticks a task
    ↓
Saves to localStorage (instant)
    ↓
Auto-syncs to Supabase (500ms later)
    ↓
Syncs across all devices when user logs in
```

### Features:

- **Offline-first:** Works without internet (uses localStorage)
- **Auto-sync:** Progress syncs to cloud every 500ms
- **Cross-device:** Sign in on any device to resume
- **No passwords:** Magic link email auth (secure, frictionless)
- **Fallback:** If user isn't signed in, progress saves locally

## Testing

1. Open the roadmap page
2. Click "Sign in to sync"
3. Enter your email and get the magic link
4. Tick some tasks
5. Open the roadmap on another device/browser
6. Sign in with the same email
7. ✅ Your progress appears!

## Troubleshooting

**"Missing Supabase environment variables"**
- Make sure `.env.local` has both keys
- Restart the dev server after adding keys

**"Magic link didn't arrive"**
- Check spam folder
- Make sure email auth is enabled in Supabase
- Use a real email address (not a disposable one)

**Progress not syncing**
- Open browser DevTools → Console for error messages
- Check that the `roadmap_progress` table exists
- Verify RLS policies are correct

---

Once set up, your roadmap is ready for production! 🚀
