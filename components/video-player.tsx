'use client'

import { useState } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'
import { Card } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'

interface VideoPlayerProps {
  videoId: string
  title: string
  onVideoEnd?: () => void
}

export default function VideoPlayer({ videoId, title, onVideoEnd }: VideoPlayerProps) {
  const [isLoading, setIsLoading] = useState(true)

  const opts: YouTubeProps['opts'] = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      modestbranding: 1,
      rel: 0,
    },
  }

  const onReady: YouTubeProps['onReady'] = () => {
    setIsLoading(false)
  }

  const onEnd: YouTubeProps['onEnd'] = () => {
    if (onVideoEnd) {
      onVideoEnd()
    }
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video bg-black">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-white" />
          </div>
        )}
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={onReady}
          onEnd={onEnd}
          className="w-full h-full"
          iframeClassName="w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </Card>
  )
}
