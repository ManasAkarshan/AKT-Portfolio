import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Education } from "@/app/types/portfolio"
import { ScrollReveal } from "./scroll-reveal"

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          </ScrollReveal>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.01]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg">{edu.institution}</CardDescription>
                      </div>
                      <Badge variant="outline" className="transition-all duration-300 hover:scale-105">{edu.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.description}</p>
                    <p className="text-sm text-muted-foreground mt-2">{edu.details}</p>
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
