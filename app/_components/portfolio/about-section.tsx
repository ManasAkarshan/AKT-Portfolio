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
    <section id="about" className="py-20 bg-gradient-to-br from-background to-primary/3">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="up" delay={100}>
              <div>
                {bio.map((paragraph, index) => (
                  <p key={index} className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="flex flex-wrap gap-3 mt-8">
                  {specializations.map((spec, index) => (
                    <Badge 
                      key={index} 
                      className="bg-gradient-to-r from-primary/20 to-accent/20 text-primary border border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:from-primary/30 hover:to-accent/30 cursor-default"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-6">
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/40">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Current Position</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {title}, {institution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Research Focus</h3>
                        <p className="text-sm text-muted-foreground mt-1">Insect Biodiversity & Ecology</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <Waypoints className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Fellow and Member</h3>
                        <p className="text-sm text-muted-foreground mt-1">ISCA, IETE, MSET</p>
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
