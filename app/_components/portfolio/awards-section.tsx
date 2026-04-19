import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import type { Award as AwardType } from "@/app/types/portfolio"
import { ScrollReveal } from "./scroll-reveal"

interface AwardsSectionProps {
  awards: AwardType[]
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-background via-primary/3 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Awards & Recognition</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-primary/40 group h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-400/20 to-amber-400/20 group-hover:from-yellow-400/30 group-hover:to-amber-400/30 transition-all duration-300">
                        <Award className="w-6 h-6 text-yellow-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{award.title}</CardTitle>
                        <CardDescription className="text-base mt-2">
                          <span className="font-medium text-primary">{award.year}</span> • {award.organization}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{award.description}</p>
                    {award.certificateUrl && (
                      <Button size="sm" className="gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 transition-all duration-300" asChild>
                        <a href={award.certificateUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                          View Certificate
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}