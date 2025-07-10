import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import type { Award as AwardType } from "@/app/types/portfolio"

interface AwardsSectionProps {
  awards: AwardType[]
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <section id="awards" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6 text-yellow-500" />
                    <div>
                      <CardTitle className="text-lg">{award.title}</CardTitle>
                      <CardDescription>
                        {award.year} • {award.organization}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{award.description}</p>
                  {award.certificateUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={award.certificateUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
