# 🚀 Vercel Deployment - Quick Guide

Your code is ready at: **https://github.com/priyanshu705/savvyindians-LMS**

## Step 1: Setup Supabase (5 minutes)

### Create Supabase Project
1. Go to: https://app.supabase.com
2. Click **"New Project"**
3. Fill in:
   - **Name**: savvyindians-lms
   - **Database Password**: (create a strong password and save it)
   - **Region**: Select closest to you
4. Click **"Create New Project"** and wait 2-3 minutes

### Get API Credentials
1. Go to **Settings** → **API**
2. Copy these values (you'll need them for Vercel):
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGc...` (long token)
   - **service_role key**: `eyJhbGc...` (different long token)

### Run Database Schema
1. In Supabase, go to **SQL Editor**
2. Click **"New Query"**
3. Open this file on your computer: `d:\django-lms-main\savvyindians-modern-lms\supabase\schema.sql`
4. Copy ALL the contents and paste into the SQL Editor
5. Click **"Run"** (or press F5)
6. You should see: "Success. No rows returned"
7. Go to **Table Editor** → you should now see tables: `profiles`, `courses`, `lectures`, `enrollments`

---

## Step 2: Deploy to Vercel (3 minutes)

### Import Project
1. Go to: https://vercel.com/new
2. Click **"Import Git Repository"**
3. If not connected, click **"Add GitHub Account"** and authorize
4. Find and select: **priyanshu705/savvyindians-LMS**

### Configure Project
**CRITICAL**: Before clicking Deploy, set these:

1. **Root Directory**: 
   - Click **"Edit"** next to Root Directory
   - Enter: `savvyindians-modern-lms`
   - This is REQUIRED or deployment will fail

2. **Framework Preset**: 
   - Should auto-detect as "Next.js" ✅

3. **Build Command**: 
   - Leave default: `npm run build`

### Add Environment Variables
Click **"Environment Variables"** and add these 4 variables:

| Name | Value |
|------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL from Step 1 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key from Step 1 |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service_role key from Step 1 |
| `NEXT_PUBLIC_BASE_URL` | Leave empty for now (will update after deploy) |

### Deploy
1. Click **"Deploy"**
2. Wait 2-3 minutes for build to complete
3. You'll see: "Congratulations! Your project has been deployed."

---

## Step 3: Update Base URL (1 minute)

1. Copy your Vercel deployment URL (e.g., `https://savvyindians-lms.vercel.app`)
2. In Vercel project → **Settings** → **Environment Variables**
3. Edit `NEXT_PUBLIC_BASE_URL`
4. Set value to your deployment URL
5. Click **"Save"**
6. Go to **Deployments** → click **"Redeploy"** (to apply the change)

---

## Step 4: Test Your Site (2 minutes)

Visit your Vercel URL and test:

- ✅ **Homepage**: Should load with hero section
- ✅ **Courses** (`/courses`): Should show 3 sample courses from database
- ✅ **Register** (`/register`): Create a new account
- ✅ **Login** (`/login`): Login with the account you created
- ✅ **My Courses** (`/my-courses`): Should show empty state

### Test API Directly
```
https://YOUR-SITE.vercel.app/api/courses
```
Should return JSON with the 3 seeded courses.

---

## Troubleshooting

### "Module not found" or build errors
- Check that **Root Directory** is set to `savvyindians-modern-lms`
- Redeploy after fixing

### "Failed to fetch courses" or empty courses page
- Verify environment variables are correct
- Check Supabase SQL ran successfully (Table Editor shows tables)
- Check Vercel deployment logs for errors

### Login/Register doesn't work
- Verify `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are correct
- Check Supabase → Authentication is enabled

### 500 errors
- Check Vercel → Deployment → **Logs** for detailed error messages
- Usually means missing or incorrect environment variables

---

## ✅ Success Checklist

- [ ] Supabase project created
- [ ] Database schema executed (tables visible in Table Editor)
- [ ] GitHub repo imported to Vercel
- [ ] Root directory set to `savvyindians-modern-lms`
- [ ] All 4 environment variables added
- [ ] Site deployed successfully
- [ ] Homepage loads
- [ ] `/api/courses` returns JSON with courses
- [ ] Can register new account
- [ ] Can login

---

## Next Steps After Deployment

1. **Create Admin User**:
   - Go to Supabase → Authentication → Users
   - Find the seeded admin user or create new one
   - Update role in `profiles` table to 'admin'

2. **Add More Courses**:
   - Login as admin
   - Visit `/admin/create-course` (when implemented)
   - Or manually insert via Supabase SQL Editor

3. **Custom Domain** (optional):
   - Vercel → Settings → Domains
   - Add your custom domain

---

**Your app will be live at**: `https://YOUR-PROJECT-NAME.vercel.app`

🎉 **You're done!** Share the link and start using your LMS!
