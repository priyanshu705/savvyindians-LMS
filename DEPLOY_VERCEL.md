# Deploying SavvyIndians Modern LMS to Vercel

Follow these steps to deploy the `savvyindians-modern-lms` app to Vercel.

## 1. Push to GitHub
- Create a new repository or push the current repo to GitHub.

## 2. Create a Vercel Project
- In Vercel, click "New Project" → Import Git Repository.
- Set the **Root Directory** to `savvyindians-modern-lms` (important).
- Framework: Next.js (automatically detected)

## 3. Add Environment Variables
Add the following to Vercel project settings:
- `NEXT_PUBLIC_SUPABASE_URL` = https://... (from Supabase project)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` = anon key
- `SUPABASE_SERVICE_ROLE_KEY` = service role key (keep secret)
- `NEXT_PUBLIC_BASE_URL` = https://your-site.vercel.app

## 4. Database Setup
- In Supabase: run the SQL in `savvyindians-modern-lms/supabase/schema.sql` to create tables and seed admin user.

## 5. Deploy
- Click Deploy. Vercel will build and publish your site.
- After deploy, open the site and test login/register and course pages.

## 6. Notes
- If your Vercel project contains multiple apps, ensure `savvyindians-modern-lms` is set as the root directory.
- If using `turbopack`, Vercel will use the default Next.js builder.
- Keep `SUPABASE_SERVICE_ROLE_KEY` secret in Vercel.
