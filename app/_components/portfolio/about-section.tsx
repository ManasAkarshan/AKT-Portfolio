import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, BookOpen, Waypoints } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

interface AboutSectionProps {
  bio: string[]
  specializations: string[]
  title: string
  institution: string
}

export function AboutSection({ bio, specializations, title, institution }: AboutSectionProps) {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="up" delay={100}>
              <div>
                {bio.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground mb-6">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-6">
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <GraduationCap className="w-8 h-8 text-primary transition-transform duration-300 hover:scale-110" />
                      <div>
                        <h3 className="font-semibold">Current Position</h3>
                        <p className="text-sm text-muted-foreground">
                          {title}, {institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4  mb-4">
                      <BookOpen className="w-8 h-8 text-primary transition-transform duration-300 hover:scale-110" />
                      <div>
                        <h3 className="font-semibold">Research Focus</h3>
                        <p className="text-sm text-muted-foreground">Insect Biodiversity & Ecology</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Waypoints className="w-8 h-8 text-primary transition-transform duration-300 hover:scale-110" />
                      <div>
                        <h3 className="font-semibold">Fellow and Member</h3>
                        <p className="text-sm text-muted-foreground">ISCA, IETE, MSET</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
