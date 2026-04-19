"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, BookOpen, Users, Globe } from "lucide-react"
import { useState, useEffect } from "react"
import { getYouTubeVideoTitle, extractVideoId } from "@/lib/youtube-utils"
import { ScrollReveal } from "./scroll-reveal"

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

  useEffect(() => {
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

  return (
    <section id="oers" className="py-20 bg-gradient-to-b from-background via-accent/3 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Open Educational Resources
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {oersData.map((oer, index) => {
              return (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
              <Card 
                className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 hover:shadow-2xl border border-primary/20 hover:border-primary/40 shadow-lg h-full"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-center font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 min-h-[3rem] flex items-center justify-center line-clamp-2">
                    {!isLoading && videoTitles[index] ? videoTitles[index] : oer.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4">
                  {oer.videoUrl && (
                    <div className="space-y-4">
                      <div className="aspect-video w-full relative overflow-hidden bg-black rounded-lg">
                        {playingVideos[index] ? (
                          <iframe
                            src={`https://www.youtube.com/embed/${extractVideoId(oer.videoUrl)}?autoplay=1`}
                            title={!isLoading && videoTitles[index] ? videoTitles[index] : oer.title}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        ) : (
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
              </ScrollReveal>
            );
            })}
          </div>
          {channelUrl && (
            <div className="text-center mt-12 mb-8">
              <Button 
                size="lg"
                className="gap-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-105 group shadow-lg"
                asChild
              >
                <a href={channelUrl} target="_blank" rel="noopener noreferrer" className="text-white">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 " />
                  View All Videos on YouTube
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}