"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Image as ImageIcon, Pause, Play } from "lucide-react"

interface GalleryImage {
  id: string
  src: string
  alt: string
  title?: string
}

interface GallerySectionProps {
  images: GalleryImage[]
}

export function GallerySection({ images }: GallerySectionProps) {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [visibleImages, setVisibleImages] = useState(3)

  // Ensure component only renders on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Update visible images based on screen size
  useEffect(() => {
    if (!isClient) return

    const updateVisibleImages = () => {
      if (window.innerWidth < 768) {
        setVisibleImages(1)
      } else if (window.innerWidth < 1024) {
        setVisibleImages(2)
      } else {
        setVisibleImages(3)
      }
    }

    updateVisibleImages()
    window.addEventListener('resize', updateVisibleImages)
    return () => window.removeEventListener('resize', updateVisibleImages)
  }, [isClient])

  // Fluid auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling || isPaused || !scrollContainerRef.current || !isClient) return

    const scrollContainer = scrollContainerRef.current
    const scrollStep = 2 // Increased scroll step for smoother movement
    const scrollSpeed = 30 // Faster scroll speed for better fluidity

    // Debug logging
    console.log('Auto-scroll started:', {
      scrollLeft: scrollContainer.scrollLeft,
      scrollWidth: scrollContainer.scrollWidth,
      clientWidth: scrollContainer.clientWidth,
      isAutoScrolling,
      isPaused
    })

    const interval = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
        // Reset to beginning when reaching the end (with small buffer)
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += scrollStep
      }
    }, scrollSpeed)

    return () => clearInterval(interval)
  }, [isAutoScrolling, isPaused, isClient])

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  const toggleAutoScroll = () => {
    setIsAutoScrolling(!isAutoScrolling)
  }

  const scrollToImage = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current || !isClient) return
    
    const scrollContainer = scrollContainerRef.current
    const scrollAmount = scrollContainer.clientWidth / visibleImages
    
    if (direction === 'left') {
      scrollContainer.scrollLeft -= scrollAmount
    } else {
      scrollContainer.scrollLeft += scrollAmount
    }
  }

  // Create a duplicated array for seamless looping
  const duplicatedImages = [...images, ...images, ...images]

  // Don't render until client-side
  if (!isClient) {
    return (
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-background via-background/95 to-background/90">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              Gallery
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A collection of memorable moments, achievements, and highlights from my academic journey
            </p>
          </div>
          
          {/* Loading placeholder */}
          <div className="flex justify-center items-center h-64">
            <div className="text-muted-foreground">Loading gallery...</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-background via-background/95 to-background/90">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of memorable moments, achievements, and highlights from my academic journey
          </p>
        </div>

        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Carousel Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Photo Gallery
              </h3>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollToImage('left')}
                className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleAutoScroll}
                className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                {isAutoScrolling ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scrollToImage('right')}
                className="hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Fluid Image Container */}
          <div className="relative overflow-hidden rounded-lg h-[35rem]">
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto overflow-y-hidden h-full"
              style={{
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div 
                  key={`${image.id}-${index}`}
                  className="flex-shrink-0"
                  style={{ 
                    width: `calc((100vw - 2rem) / ${visibleImages})`,
                    minWidth: `calc((100vw - 2rem) / ${visibleImages})`,
                    maxWidth: `calc((100vw - 2rem) / ${visibleImages})`
                  }}
                >
                  <Card className="group relative overflow-hidden bg-gradient-to-br from-card to-card/80 hover:from-card/90 hover:to-card/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 shadow-lg h-full">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    
                    {/* Image container */}
                    <CardContent className="p-0 relative h-full">
                      <div className="w-full h-full relative overflow-hidden">
                        {/* Image */}
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        
                        {/* Image icon overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                            <ImageIcon className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    
                    {/* Image title overlay */}
                    {image.title && (
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        <h4 className="text-white font-semibold text-sm line-clamp-2">
                          {image.title}
                        </h4>
                      </div>
                    )}
                    
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 