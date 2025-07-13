import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, BookOpen } from "lucide-react"

export function ProfessionalActivities() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Activities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Editorial Boards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Member, Editorial Board of Books and Journals</li>
                  <li>• Reviewer for journals in entomology and environmental science</li>
                  <li>• Contributor to several government-published science magazines</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Conference Roles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Organized 7+ international and national seminars</li>
                  <li>• Delivered 60+ invited talks in MMTTC-UGC, IITs, BHU, and other universities</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Professional Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Member, Board of Studies (Zoology), Ranchi University</li>
                  <li>• Subject Expert for viva, evaluation, and faculty recruitment</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Mentorship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Supervised 6+ Ph.D. candidates</li>
                  <li>• Guided M.Sc. dissertation and project work</li>
                  <li>• Mentor for young science communicators and student researchers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
