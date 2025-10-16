import { createServerClient } from '@supabase/ssr'

export async function getProfileRole(cookies: any) {
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies,
    }
  )

  const { data } = await supabase.auth.getUser()

  if (!data.user) return null

  // fetch profile
  const { data: profile } = await supabase.from('profiles').select('role').eq('id', data.user.id).single()

  return profile?.role || null
}
