import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Clock } from 'lucide-react'

interface CourseCardProps {
  id: string
  title: string
  slug: string
  description: string
  thumbnail_url: string
  category: string
  level: string
  videoCount?: number
}

export default function CourseCard({
  title,
  slug,
  description,
  thumbnail_url,
  category,
  level,
  videoCount = 0
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full">
        <Image
          src={thumbnail_url || '/placeholder-course.jpg'}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
            {level}
          </span>
        </div>
      </div>

      <CardHeader>
        <div className="text-xs text-muted-foreground uppercase mb-1">
          {category}
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1" />
            <span>{videoCount} videos</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>Self-paced</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/courses/${slug}`}>
            View Course
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
