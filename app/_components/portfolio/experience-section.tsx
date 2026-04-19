import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Experience } from "@/app/types/portfolio"
import { ScrollReveal } from "./scroll-reveal"

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          </ScrollReveal>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg">{exp.organization}</CardDescription>
                      </div>
                      <Badge className="transition-all duration-300 hover:scale-105">{exp.period}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
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
