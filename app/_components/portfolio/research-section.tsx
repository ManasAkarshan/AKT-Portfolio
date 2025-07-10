import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ExternalLink } from "lucide-react"
import type { Publication } from "@/app/types/portfolio"

interface ResearchSectionProps {
  researchAreas: string[]
  stats: {
    totalPublications: number
    researchArticles: number
    booksEdited: number
    bookChapters: number
    magazineArticles: number
  }
  publications: Publication[]
  socialLinks: {
    orcid?: string
    googleScholar?: string
    researchGate?: string
  }
}

export function ResearchSection({ researchAreas, stats, publications, socialLinks }: ResearchSectionProps) {
  return (
    <section id="research" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Research & Publications</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Thrust Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {researchAreas.map((area, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {area}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Publication Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Total Publications</span>
                    <span className="font-semibold">{stats.totalPublications}+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Research Articles</span>
                    <span className="font-semibold">{stats.researchArticles}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Books Edited</span>
                    <span className="font-semibold">{stats.booksEdited}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Book Chapters</span>
                    <span className="font-semibold">{stats.bookChapters}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Government/Magazine Articles</span>
                    <span className="font-semibold">{stats.magazineArticles}+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <h3 className="text-2xl font-semibold mb-6">Recent Publications</h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">"{pub.title}"</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pub.authors} ({pub.year})
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">Published in *{pub.journal}*</p>
                  {pub.doi && (
                    <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                      <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                        View Paper
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            {socialLinks.orcid && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-3 min-w-[200px] bg-gradient-to-r from-orange-500/10 to-orange-600/10 hover:from-orange-500/20 hover:to-orange-600/20 border-orange-500/30 hover:border-orange-500/50 text-orange-600 hover:text-orange-500 transition-all duration-300 group" 
                asChild
              >
                <a href={socialLinks.orcid} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  ORCID
                </a>
              </Button>
            )}
            
            {socialLinks.googleScholar && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-3 min-w-[200px] bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 border-blue-500/30 hover:border-blue-500/50 text-blue-600 hover:text-blue-500 transition-all duration-300 group" 
                asChild
              >
                <a href={socialLinks.googleScholar} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  Google Scholar
                </a>
              </Button>
            )}
            
            {socialLinks.researchGate && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-3 min-w-[200px] bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 border-green-500/30 hover:border-green-500/50 text-green-600 hover:text-green-500 transition-all duration-300 group" 
                asChild
              >
                <a href={socialLinks.researchGate} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  ResearchGate
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
