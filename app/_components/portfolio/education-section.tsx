import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Education } from "@/app/types/portfolio"
import { ScrollReveal } from "./scroll-reveal"

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background via-accent/3 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{edu.degree}</CardTitle>
                        <CardDescription className="text-base text-muted-foreground mt-2">{edu.institution}</CardDescription>
                      </div>
                      <Badge className="bg-gradient-to-r from-primary/30 to-accent/30 text-primary border border-primary/40 transition-all duration-300 hover:scale-110 whitespace-nowrap">{edu.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    {edu.details && <p className="text-sm text-accent mt-3 font-medium">{edu.details}</p>}
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