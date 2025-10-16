import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()
  const { data: userData } = await supabase.auth.getUser()

  if (!userData.user) return NextResponse.json({ role: null })

  const { data: profile, error } = await supabase.from('profiles').select('role').eq('id', userData.user.id).single()

  if (error) return NextResponse.json({ role: null })

  return NextResponse.json({ role: profile?.role ?? null })
}
