import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('courses').select('id,slug,title,description,thumbnail,published')

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ courses: data })
}

export async function POST(request: Request) {
  const supabase = await createClient()
  const body = await request.json()

  // Expect { title, description, slug, thumbnail }
  const { data, error } = await supabase.from('courses').insert([
    {
      title: body.title,
      description: body.description,
      slug: body.slug,
      thumbnail: body.thumbnail,
      created_by: body.created_by || null,
      published: body.published || false,
    },
  ])

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ course: data?.[0] })
}
