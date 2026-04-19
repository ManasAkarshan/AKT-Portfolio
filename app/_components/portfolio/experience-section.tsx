import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Experience } from "@/app/types/portfolio"
import { ScrollReveal } from "./scroll-reveal"

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background via-primary/3 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Experience</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{exp.title}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground mt-2">{exp.organization}</CardDescription>
                      </div>
                      <Badge className="bg-gradient-to-r from-primary/30 to-accent/30 text-primary border border-primary/40 transition-all duration-300 hover:scale-110 whitespace-nowrap">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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