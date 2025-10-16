import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Clock, Award } from 'lucide-react'
import Link from 'next/link'

interface CoursePageProps {
  params: Promise<{ slug: string }>
}

// Mock course data
const mockCourse = {
  id: '1',
  title: 'Web Development Fundamentals',
  slug: 'web-dev-fundamentals',
  description: 'Learn HTML, CSS, and JavaScript from scratch. Perfect for beginners who want to start their web development journey. This comprehensive course covers everything you need to know to become a web developer.',
  thumbnail_url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
  category: 'programming',
  level: 'beginner',
  is_published: true,
  videos: [
    { id: '1', title: 'Introduction to Web Development', description: 'Overview of web development', duration_minutes: 10, order_index: 1, is_free: true },
    { id: '2', title: 'HTML Basics', description: 'Learn HTML fundamentals', duration_minutes: 25, order_index: 2, is_free: true },
    { id: '3', title: 'CSS Styling', description: 'Style your web pages', duration_minutes: 30, order_index: 3, is_free: false },
    { id: '4', title: 'JavaScript Introduction', description: 'Learn JavaScript basics', duration_minutes: 35, order_index: 4, is_free: false }
  ]
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params
  
  // For now, just check if slug matches
  if (slug !== mockCourse.slug) {
    notFound()
  }

  const course = mockCourse
  const videos = course.videos

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Course Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="text-sm text-muted-foreground uppercase mb-2">
              {course.category}
            </div>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground">{course.description}</p>
          </div>

          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-primary" />
              <span>{videos.length} videos</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-primary" />
              <span>Self-paced</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              <span className="capitalize">{course.level}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <div className="relative h-48 w-full">
              <Image
                src={course.thumbnail_url}
                alt={course.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardContent className="space-y-4 pt-6">
              <Button asChild className="w-full">
                <Link href="/register">
                  Sign Up to Enroll
                </Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                Free course • No credit card required
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-6">Course Content</h2>
          <div className="space-y-3">
            {videos.map((video: any, index: number) => (
              <Card key={video.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-muted-foreground">
                          Lecture {index + 1}
                        </span>
                        {video.is_free && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                            FREE
                          </span>
                        )}
                      </div>
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                      {video.description && (
                        <CardDescription className="mt-2">
                          {video.description}
                        </CardDescription>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground ml-4">
                      {video.duration_minutes} min
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
