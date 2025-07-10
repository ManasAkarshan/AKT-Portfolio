"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, Users, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { getYouTubeVideoTitle, extractVideoId } from "@/lib/youtube-utils"

interface OERsSectionProps {
  oersData: {
    title: string
    description: string
    icon: React.ReactNode
    videoUrl?: string
  }[]
  socialLinks: {
    orcid?: string
    googleScholar?: string
    researchGate?: string
  }
  channelUrl?: string
}

export function OERsSection({ oersData, socialLinks, channelUrl }: OERsSectionProps) {
  const [videoTitles, setVideoTitles] = useState<string[]>([])
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({})
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const fetchVideoTitles = async () => {
      try {
        const titles = await Promise.all(
          oersData.map(async (oer) => {
            if (oer.videoUrl) {
              const videoId = extractVideoId(oer.videoUrl)
              if (videoId) {
                return await getYouTubeVideoTitle(videoId)
              }
            }
            return oer.title
          })
        )
        setVideoTitles(titles)
      } catch (error) {
        console.error('Error fetching video titles:', error)
        // Fallback to original titles if API fails
        setVideoTitles(oersData.map(oer => oer.title))
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideoTitles()
  }, [oersData])

  const toggleVideo = (index: number) => {
    setPlayingVideos(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <section id="oers" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Open Educational Resources (OERs)
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
            </div>
            
            {/* Loading state */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {oersData.map((oer, index) => (
                <Card 
                  key={index} 
                  className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 hover:from-card/90 hover:to-card/70 transition-all duration-300 hover:shadow-2xl border-0 shadow-lg"
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-center font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent transition-all duration-300 min-h-[3rem] flex items-center justify-center line-clamp-2">
                      {oer.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-4">
                    {oer.videoUrl && (
                      <div className="space-y-4">
                        <div className="aspect-video w-full relative overflow-hidden bg-black rounded-lg">
                          <img
                            src={`https://img.youtube.com/vi/${extractVideoId(oer.videoUrl)}/maxresdefault.jpg`}
                            alt={oer.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              const videoId = extractVideoId(oer.videoUrl || '');
                              if (videoId) {
                                target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                              }
                            }}
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black/50 backdrop-blur-sm rounded-full p-6">
                              <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="oers" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Open Educational Resources (OERs)
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/60 mx-auto rounded-full" />
          </div>
          
          {/* Three divs in grid view */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {oersData.map((oer, index) => {
              return (
              <Card 
                key={index} 
                className="relative overflow-hidden bg-gradient-to-br from-card to-card/80 hover:from-card/90 hover:to-card/70 transition-all duration-300 hover:shadow-2xl border-0 shadow-lg"
              >
                {/* Card header with enhanced styling */}
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-center font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent transition-all duration-300 min-h-[3rem] flex items-center justify-center line-clamp-2">
                    {!isLoading && videoTitles[index] ? videoTitles[index] : oer.title}
                  </CardTitle>
                </CardHeader>
                
                {/* Video container with enhanced styling */}
                <CardContent className="p-4">
                  {oer.videoUrl && (
                    <div className="space-y-4">
                      {/* Video Player or Thumbnail */}
                      <div className="aspect-video w-full relative overflow-hidden bg-black rounded-lg">
                        {playingVideos[index] ? (
                          /* Embedded Video Player */
                          <iframe
                            src={`${oer.videoUrl}?autoplay=1`}
                            title={!isLoading && videoTitles[index] ? videoTitles[index] : oer.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        ) : (
                          /* Thumbnail with Play Button */
                          <>
                            <img
                              src={`https://img.youtube.com/vi/${extractVideoId(oer.videoUrl)}/maxresdefault.jpg`}
                              alt={!isLoading && videoTitles[index] ? videoTitles[index] : oer.title}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                const videoId = extractVideoId(oer.videoUrl || '');
                                if (videoId) {
                                  target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                                }
                              }}
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button
                                onClick={() => toggleVideo(index)}
                                className="bg-black/50 backdrop-blur-sm rounded-full p-6 hover:bg-black/70 transition-colors duration-300 cursor-pointer"
                              >
                                <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1" />
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                      

                    </div>
                  )}
                </CardContent>
              </Card>
            );
            })}
          </div>
          {/* View All on YouTube Button */}
          {channelUrl && (
            <div className="text-center mt-8 mb-8">
              <Button 
                variant="outline" 
                size="lg"
                className="gap-3 bg-gradient-to-r from-red-500/10 to-red-600/10 hover:from-red-500/20 hover:to-red-600/20 border-red-500/30 hover:border-red-500/50 text-red-600 hover:text-red-500 transition-all duration-300 group"
                asChild
              >
                <a href={channelUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  View All Videos on YouTube
                </a>
              </Button>
            </div>
          )}

          {/* Three buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {socialLinks.orcid && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-3 min-w-[200px] bg-gradient-to-r from-orange-500/10 to-orange-600/10 hover:from-orange-500/20 hover:to-orange-600/20 border-orange-500/30 hover:border-orange-500/50 text-orange-600 hover:text-orange-500 transition-all duration-300 group" 
                asChild
              >
                <a href={socialLinks.orcid} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  ORCID
                </a>
              </Button>
            )}
            
            {socialLinks.googleScholar && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-3 min-w-[200px] bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 border-blue-500/30 hover:border-blue-500/50 text-blue-600 hover:text-blue-500 transition-all duration-300 group" 
                asChild
              >
                <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Google Scholar
                </a>
              </Button>
            )}
            
            {socialLinks.researchGate && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-3 min-w-[200px] bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 border-green-500/30 hover:border-green-500/50 text-green-600 hover:text-green-500 transition-all duration-300 group" 
                asChild
              >
                <a href={socialLinks.researchGate} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  ResearchGate
                </a>
              </Button>
            )}
          </div> */}

          
        </div>
      </div>
    </section>
  )
} 