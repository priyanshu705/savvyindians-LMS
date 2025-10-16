# 🧪 Local Testing Guide - SavvyIndians Modern LMS

## 🚀 Server Status

✅ **Development Server Running**
- **URL**: http://localhost:3001
- **Framework**: Next.js 15.5.5 (Turbopack)
- **Environment**: .env.local loaded
- **Status**: Ready for testing

⚠️ **Note**: Port 3000 was in use, so using port 3001

## 📋 Testing Checklist

### 1. 🏠 Homepage (http://localhost:3001)

**What to Test:**
- [ ] Page loads without errors
- [ ] Hero section displays with SavvyIndians branding
- [ ] Headline: "Learn Smart, Grow Fast with SavvyIndians"
- [ ] Call-to-action buttons visible
- [ ] Stats section shows:
  - 100+ Courses
  - 10,000+ Students
  - Expert Instructors
- [ ] CTA section displays at bottom
- [ ] Navbar appears at top
- [ ] Footer appears at bottom

**Expected Result:**
```
✅ Beautiful gradient hero section
✅ Clear call-to-action buttons
✅ Professional stats display
✅ Responsive design
```

**How to Test:**
1. Open http://localhost:3001
2. Scroll through entire page
3. Check all sections load properly
4. Verify no console errors (F12 → Console)

---

### 2. 🔐 Login Page (http://localhost:3001/login)

**What to Test:**
- [ ] Login form displays correctly
- [ ] Email input field present
- [ ] Password input field present
- [ ] "Login" button visible
- [ ] "Don't have an account? Register" link works
- [ ] Form validation works
- [ ] Error messages display properly

**Expected Result:**
```
✅ Clean login form with SavvyIndians logo
✅ Input validation (required fields)
✅ Professional styling with Tailwind
✅ Link to register page works
```

**How to Test:**
1. Navigate to http://localhost:3001/login
2. Try submitting empty form (should show validation)
3. Try invalid email format
4. Enter test credentials:
   - Email: test@savvyindians.com
   - Password: test123
5. Click Login (currently shows mock functionality)
6. Click "Register" link at bottom

---

### 3. 📝 Register Page (http://localhost:3001/register)

**What to Test:**
- [ ] Registration form displays
- [ ] Name input field
- [ ] Email input field
- [ ] Password input field
- [ ] Confirm Password input field
- [ ] "Create Account" button
- [ ] "Already have an account? Login" link
- [ ] Form validation works
- [ ] Password match validation

**Expected Result:**
```
✅ Complete registration form
✅ All input fields with proper labels
✅ Validation for all fields
✅ Password confirmation check
✅ Link to login page works
```

**How to Test:**
1. Navigate to http://localhost:3001/register
2. Try submitting empty form
3. Try mismatched passwords
4. Fill in test data:
   - Name: Test User
   - Email: newuser@savvyindians.com
   - Password: test123
   - Confirm Password: test123
5. Click "Create Account"
6. Check validation messages

---

### 4. 📚 Courses Listing (http://localhost:3001/courses)

**What to Test:**
- [ ] Courses page loads
- [ ] Search bar displays at top
- [ ] Grid layout of course cards
- [ ] At least 3 mock courses display
- [ ] Each course shows:
  - Thumbnail image
  - Course title
  - Description
  - "View Course" button
- [ ] Search functionality (UI only for now)

**Mock Courses Expected:**
1. **Web Development Fundamentals**
   - Description: Learn HTML, CSS, JavaScript basics
   
2. **React.js Complete Course**
   - Description: Master React from scratch
   
3. **Python for Data Science**
   - Description: Data analysis with Python

**How to Test:**
1. Navigate to http://localhost:3001/courses
2. Verify all 3 courses display
3. Check course images load
4. Test search bar (type something)
5. Hover over course cards (should have hover effects)
6. Click "View Course" on any course

---

### 5. 📖 Course Detail Page (http://localhost:3001/courses/web-dev-fundamentals)

**What to Test:**
- [ ] Course detail page loads
- [ ] Course title displays
- [ ] Course description visible
- [ ] Instructor information
- [ ] Video lectures list displays
- [ ] Each lecture shows:
  - Lecture number
  - Lecture title
  - Duration
- [ ] "Enroll Now" button present
- [ ] Enrollment button triggers action

**Expected Lectures List:**
```
1. Introduction to Web Development
2. HTML Basics
3. CSS Fundamentals
4. JavaScript Essentials
5. Building Your First Website
```

**How to Test:**
1. Go to http://localhost:3001/courses
2. Click on any course card
3. Verify course details load
4. Check lectures list displays
5. Click "Enroll Now" button
6. Test back navigation

**Other Test URLs:**
- http://localhost:3001/courses/react-complete
- http://localhost:3001/courses/python-data-science

---

### 6. 👤 My Courses Dashboard (http://localhost:3001/my-courses)

**What to Test:**
- [ ] Dashboard page loads
- [ ] Empty state displays (no courses enrolled yet)
- [ ] Empty state message clear
- [ ] "Browse Courses" button visible
- [ ] Button links to courses page
- [ ] Navbar shows "My Courses" as active

**Expected Result:**
```
✅ Empty state with icon
✅ Message: "No courses enrolled yet"
✅ "Browse Courses" button
✅ Clean professional design
```

**How to Test:**
1. Navigate to http://localhost:3001/my-courses
2. Verify empty state displays
3. Check message is clear
4. Click "Browse Courses" button
5. Should redirect to /courses

---

### 7. 🧭 Navbar Testing

**What to Test:**
- [ ] Navbar displays on all pages
- [ ] Logo/Brand "SavvyIndians" visible
- [ ] Navigation links work:
  - Home
  - Courses
  - My Courses
- [ ] Auth buttons display:
  - "Login" button (when logged out)
  - "Logout" button (when logged in)
- [ ] Responsive menu (mobile):
  - Hamburger icon appears on small screens
  - Menu opens/closes properly
- [ ] Active page highlighted

**How to Test:**
1. Visit each page and check navbar
2. Click each navigation link
3. Verify links work correctly
4. Resize browser window to test responsive menu
5. Check active page styling

---

### 8. 📄 Footer Testing
- [ ] All links present
- [ ] Social media icons (if any)
- [ ] Copyright notice
- [ ] Professional styling

**How to Test:**
1. Scroll to bottom of any page
2. Verify all sections display
3. Check footer links (currently mock)
4. Verify responsive design
5. Check on different screen sizes
---

### 9. 🎥 Video Player Testing

**What to Test:**
- [ ] Video player component loads
- [ ] YouTube integration works
- [ ] Video controls display
- [ ] Play/Pause functionality
4. Check fullscreen mode
5. Verify responsive sizing
---

### 10. 🎨 UI/UX Testing

**What to Test:**
- [ ] Consistent color scheme (purple/indigo theme)
- [ ] Proper spacing and padding
- [ ] Readable fonts and sizes
- [ ] Button hover effects
- [ ] Card hover effects
- [ ] Loading states
## Local Testing Guide for SavvyIndians Modern LMS

This guide will help you set up and run the LMS locally with real Supabase integration.

### 1. Prerequisites

- Node.js 18+ and npm installed ([Download Node.js](https://nodejs.org/))
- A Supabase account ([Sign up free](https://app.supabase.com/))

### 2. Clone the Repository

If you haven't already:

```powershell
git clone https://github.com/priyanshu705/savvyindians-LMS.git
cd savvyindians-LMS/savvyindians-modern-lms
```

### 3. Install Dependencies

```powershell
npm install
```

### 4. Set Up Supabase

1. Go to [Supabase](https://app.supabase.com/) and create a new project.
2. In your project dashboard, go to **SQL Editor** and run the contents of `supabase/schema.sql` to create tables and seed data.
3. Go to **Project Settings > API** and copy:
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - (Optionally) `SUPABASE_SERVICE_ROLE_KEY` for admin features

### 5. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`:
  ```powershell
  Copy-Item .env.local.example .env.local
  ```
2. Open `.env.local` and paste your real Supabase keys:
  ```env
  NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
  SUPABASE_SERVICE_ROLE_KEY=your-service-role-key (optional)
  ```

### 6. Start the Development Server

```powershell
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 7. Troubleshooting

- If you see errors about missing env vars, double-check `.env.local`.
- If the app can't connect to Supabase, ensure your keys are correct and your Supabase project is running.
- For port issues, make sure nothing else is running on port 3000.

### 8. Next Steps

- To test admin features, assign the `admin` role to your user in Supabase Auth.
- For production, set the same env vars in Vercel dashboard.

---
For more details, see `DEPLOYMENT_STEPS.md` and `supabase/schema.sql`.
- [ ] Error states
- [ ] Success states

**How to Test:**
1. Navigate through all pages
2. Hover over interactive elements
3. Check color consistency
4. Test form interactions
5. Verify animations are smooth

---

### 11. 📱 Responsive Design Testing

**What to Test:**
- [ ] Desktop view (1920x1080)
- [ ] Laptop view (1366x768)
- [ ] Tablet view (768x1024)
- [ ] Mobile view (375x667)
- [ ] Navigation adapts to screen size
- [ ] Course cards stack properly
- [ ] Footer sections stack on mobile
- [ ] Forms are usable on mobile

**How to Test:**
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)
4. Check all pages at each size
5. Verify no horizontal scroll

---

### 12. 🐛 Console Error Testing

**What to Test:**
- [ ] No JavaScript errors in console
- [ ] No network errors (404, 500)
- [ ] No React warnings
- [ ] No hydration errors
- [ ] No missing image errors
- [ ] No CORS errors

**How to Test:**
1. Open DevTools (F12)
2. Go to Console tab
3. Navigate through all pages
4. Interact with all features
5. Check for any red errors
6. Note any warnings

---

## 📊 Testing Results Template

Use this template to record your testing results:

```markdown
# Testing Results - [Date]

## ✅ Passed Tests
- [ ] Homepage loads correctly
- [ ] Login page functional
- [ ] Register page works
- [ ] Courses listing displays
- [ ] Course details accessible
- [ ] My Courses shows empty state
- [ ] Navbar works on all pages
- [ ] Footer displays correctly

## ❌ Failed Tests
- [ ] [Issue description]

## ⚠️ Issues Found
1. **Issue Title**
   - Page: [page name]
   - Description: [what went wrong]
   - Expected: [what should happen]
   - Actual: [what happened]
   - Screenshot: [if available]

## 📝 Notes
- [Any additional observations]
```

---

## 🔍 Known Limitations (Mock Data)

Currently using mock data for:
- ✅ **Authentication** - No real login/logout (Supabase not connected)
- ✅ **Courses** - 3 hardcoded courses
- ✅ **Enrollments** - No real enrollment (database not connected)
- ✅ **Video Progress** - No tracking yet
- ✅ **User Data** - No real user profiles

**These will be fixed after Supabase setup!**

---

## 🎯 Quick Test Scenarios

### Scenario 1: New Student Journey
1. Visit homepage
2. Click "Get Started"
3. Go to Login
4. Click "Register" link
5. Fill registration form
6. Go to Courses
7. Browse courses
8. Click on a course
9. Try to enroll

### Scenario 2: Browsing Courses
1. Go to Courses page
2. Use search bar
3. Click on different courses
4. Check course details
5. View lecture lists

### Scenario 3: Dashboard Check
1. Go to My Courses
2. See empty state
3. Click Browse Courses
4. Return to dashboard

---

## 🚨 Common Issues & Fixes

### Issue: Port 3000 Already in Use
**Solution**: Server automatically uses port 3001 ✅

### Issue: Page Not Loading
**Solution**:
```bash
# Restart server
Ctrl + C
npm run dev
```

### Issue: Changes Not Reflecting
**Solution**: Hard refresh browser (Ctrl + Shift + R)

### Issue: Module Not Found Error
**Solution**:
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
```

---

## 📱 Testing URLs Quick Reference

| Page | URL |
|------|-----|
| Homepage | http://localhost:3001 |
| Login | http://localhost:3001/login |
| Register | http://localhost:3001/register |
| Courses | http://localhost:3001/courses |
| Course Detail | http://localhost:3001/courses/[slug] |
| My Courses | http://localhost:3001/my-courses |

---

## ✅ What's Working vs What's Not

### ✅ Working (UI/Frontend)
- Homepage display
- Navigation
- Forms with validation
- Course browsing
- Responsive design
- Styling and animations
- Video player component

### ⏳ Not Working Yet (Backend)
- Real authentication
- Database queries
- Course enrollment
- Video progress tracking
- User profiles
- Admin panel

**Reason**: Supabase not connected yet (mock data in use)

---

## 🎉 Testing Complete?

After testing all pages:

1. **Document Issues**: Note any bugs found
2. **Check Performance**: Is everything fast?
3. **Verify Responsiveness**: Works on all screen sizes?
4. **Test User Experience**: Is navigation intuitive?

**Next Steps:**
- If all tests pass → Setup Supabase (see PROJECT_COMPLETE.md)
- If issues found → Fix bugs first, then retest
- If ready to deploy → Follow Vercel deployment guide

---

## 📞 Need Help?

**Check:**
1. Browser console for errors (F12)
2. Terminal for server errors
3. Network tab for failed requests
4. PROJECT_COMPLETE.md for setup issues

**Next**: After local testing is complete, follow PROJECT_COMPLETE.md for Supabase setup!

---

**Testing Started**: October 16, 2025  
**Server URL**: http://localhost:3001  
**Status**: Ready for comprehensive testing 🚀
