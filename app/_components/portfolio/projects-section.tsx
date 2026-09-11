import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Banknote, CalendarRange, Landmark, UserCheck } from "lucide-react"
import type { Project } from "@/app/types/portfolio"
import { ScrollReveal } from "./scroll-reveal"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background via-primary/3 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-lg leading-relaxed">{project.title}</CardTitle>
                      {project.status && (
                        <span className="shrink-0 rounded-full bg-primary/15 text-primary text-xs font-semibold px-3 py-1">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <Landmark className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Funding Agency</p>
                        <p className="font-medium text-foreground">{project.fundingAgency}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <UserCheck className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Position</p>
                        <p className="font-medium text-foreground">{project.position}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <Banknote className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium text-foreground">{project.amount}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                        <CalendarRange className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium text-foreground">{project.duration}</p>
                      </div>
                    </div>
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
