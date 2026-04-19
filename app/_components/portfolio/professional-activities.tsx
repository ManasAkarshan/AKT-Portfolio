import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, BookOpen, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "./scroll-reveal"

export function ProfessionalActivities() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/3 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-12">
          <div>
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional Activities</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={100}>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    Editorial Boards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Member, Editorial Board of Books and Journals</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Reviewer for journals in entomology and environmental science</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Contributor to several government-published science magazines</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={150}>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    Conference Roles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Organized 7+ international and national seminars</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Delivered 60+ invited talks in MMTTC-UGC, IITs, BHU, and other universities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    Professional Service
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Member, Board of Studies (Zoology), Ranchi University</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Subject Expert for viva, evaluation, and faculty recruitment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={250}>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    Mentorship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Supervised 6+ Ph.D. candidates</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Guided M.Sc. dissertation and project work</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
                      <span>Mentor for young science communicators and student researchers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
          </div>

          <ScrollReveal direction="up" delay={300}>
            <Button className="mx-auto bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 transition-all duration-300 hover:scale-105 shadow-lg">
              <Link href={'https://youtube.com/playlist?list=PLazcHcgimawC1NaccB5l7yH5mfcn0siaf&si=3B3O-ztuLm45hYiy'} target="_blank">
                <div className="flex items-center gap-2">
                  Extension Work
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </Button>
          </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  )
}
