import { BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/10 to-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <BookOpen className="h-12 w-12 text-primary" />
            <span className="text-2xl font-bold">SavvyIndians</span>
          </Link>
        </div>
        {children}
      </div>
    </div>
  )
}
