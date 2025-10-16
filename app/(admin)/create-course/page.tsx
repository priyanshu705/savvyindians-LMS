import React from 'react'

export default function CreateCoursePage() {
  async function handleSubmit(formData: FormData) {
    'use server'
    const title = formData.get('title')?.toString() || ''
    const slug = formData.get('slug')?.toString() || ''
    const description = formData.get('description')?.toString() || ''
    const thumbnail = formData.get('thumbnail')?.toString() || ''

    const res = await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, slug, description, thumbnail }),
    })

    // TODO: handle response and redirect
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Create Course</h1>
      <form action={handleSubmit}>
        <label className="block mb-2">Title</label>
        <input name="title" className="border p-2 w-full mb-4" />

        <label className="block mb-2">Slug</label>
        <input name="slug" className="border p-2 w-full mb-4" />

        <label className="block mb-2">Description</label>
        <textarea name="description" className="border p-2 w-full mb-4" />

        <label className="block mb-2">Thumbnail URL</label>
        <input name="thumbnail" className="border p-2 w-full mb-4" />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  )
}
