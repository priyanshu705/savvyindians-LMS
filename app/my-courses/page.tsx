import { redirect } from 'next/navigation'
import { BookOpen } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function MyCoursesPage() {
  // Mock: No user logged in, redirect to login
  // In real app, this would check Supabase auth
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Courses</h1>
        <p className="text-muted-foreground">
          Continue your learning journey
        </p>
      </div>

      {/* Empty State */}
      <div className="text-center py-12">
        <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">No courses yet</h2>
        <p className="text-muted-foreground mb-6">
          Start learning by enrolling in your first course
        </p>
        <Button asChild>
          <Link href="/courses">
            Browse Courses
          </Link>
        </Button>
      </div>
    </div>
  )
}
