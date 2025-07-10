"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
}

interface VideoCarouselProps {
  videos: Video[]
  channelUrl: string
}

export function VideoCarousel({ videos, channelUrl }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleVideos, setVisibleVideos] = useState(3)

  // Update visible videos based on screen size
  useEffect(() => {
    const updateVisibleVideos = () => {
      if (window.innerWidth < 768) {
        setVisibleVideos(1)
      } else if (window.innerWidth < 1024) {
        setVisibleVideos(2)
      } else {
        setVisibleVideos(3)
      }
    }

    updateVisibleVideos()
    window.addEventListener('resize', updateVisibleVideos)
    return () => window.removeEventListener('resize', updateVisibleVideos)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + visibleVideos >= videos.length ? 0 : prevIndex + visibleVideos
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - visibleVideos < 0 ? Math.max(0, videos.length - visibleVideos) : prevIndex - visibleVideos
    )
  }

  const getVisibleVideos = () => {
    return videos.slice(currentIndex, currentIndex + visibleVideos)
  }

  return (
    <div className="relative">
      {/* Carousel Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Latest Educational Videos
          </h3>
          <p className="text-muted-foreground mt-2">
            Top {videos.length} videos from the channel
          </p>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {getVisibleVideos().map((video, index) => (
          <Card 
            key={video.id} 
            className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 hover:from-card/90 hover:to-card/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 shadow-lg"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            
            {/* Card header */}
            <CardHeader className="pb-3 relative z-20">
              <CardTitle className="text-sm font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent group-hover:from-primary/90 group-hover:to-primary transition-all duration-300 line-clamp-2">
                {video.title}
              </CardTitle>
            </CardHeader>
            
            {/* Video container */}
            <CardContent className="p-0 relative">
              <div className="aspect-video w-full relative overflow-hidden">
                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                
                {/* Video iframe (hidden by default, shown on click) */}
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=0`}
                  title={video.title}
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
            
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Card>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: Math.ceil(videos.length / visibleVideos) }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i * visibleVideos)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === Math.floor(currentIndex / visibleVideos)
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Channel Link */}
      <div className="text-center mt-6">
        <Button 
          variant="outline" 
          className="gap-2 bg-gradient-to-r from-red-500/10 to-red-600/10 hover:from-red-500/20 hover:to-red-600/20 border-red-500/30 hover:border-red-500/50 text-red-600 hover:text-red-500 transition-all duration-300"
          asChild
        >
          <a href={channelUrl} target="_blank" rel="noopener noreferrer">
            <Play className="w-4 h-4" />
            View All Videos on YouTube
          </a>
        </Button>
      </div>
    </div>
  )
} 