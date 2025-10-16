import CourseCard from '@/components/course-card'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

async function fetchCourses() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/courses`, { cache: 'no-store' })
    if (!res.ok) throw new Error('Failed to fetch')
    const json = await res.json()
    return json.courses ?? []
  } catch (err) {
    // Fallback to empty
    return []
  }
}

export default async function CoursesPage() {
  const courses = await fetchCourses()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-muted-foreground mb-8">
          Browse our complete collection of courses
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            className="pl-10"
          />
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course: any) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No courses available yet.</p>
        </div>
      )}
    </div>
  )
}
