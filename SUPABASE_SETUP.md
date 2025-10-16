# Supabase Setup (Local Dev)

1. Create a Supabase project at https://app.supabase.com
2. Go to SQL Editor → Run the contents of `supabase/schema.sql` to create tables and seed dev data.
3. Copy the project URL and anon key to `.env.local` as:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

4. Start the dev server:
```bash
npm install
npm run dev
```

5. Visit http://localhost:3000 and test login/register

Notes:
- For local dev, you can copy the seeded admin user `admin@example.com` and use Supabase's auth reset to set a password.
- If you prefer DB only, use the SQL editor to inspect tables.
