import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Globe, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import type { ContactInfo } from "@/app/types/portfolio"
import { ScrollReveal } from "./scroll-reveal"

interface ContactSectionProps {
  contact: ContactInfo
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background via-accent/3 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Information</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal direction="up" delay={100}>
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Get in Touch</CardTitle>
                  <CardDescription className="text-base mt-2">
                    I welcome opportunities for research collaborations, outreach programs, and academic events.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-primary/5 transition-all duration-300 hover:translate-x-2 hover:bg-primary/10 group">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/30 transition-all duration-300">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <p className="text-muted-foreground text-sm">{contact.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-accent/5 transition-all duration-300 hover:translate-x-2 hover:bg-accent/10 group">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-accent/30 to-primary/20 group-hover:from-accent/40 group-hover:to-primary/30 transition-all duration-300">
                      <Phone className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Phone</p>
                      <p className="text-muted-foreground text-sm">{contact.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg bg-primary/5 transition-all duration-300 hover:translate-x-2 hover:bg-primary/10 group">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/30 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Office</p>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{contact.office}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border border-primary/20 transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Online Presence</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Connect with me online to follow my academic journey and publications.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contact.linkedin && (
                    <Link
                      href={contact.linkedin}
                      className="flex items-center gap-4 p-3 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 hover:translate-x-2 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-all duration-300">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="font-semibold text-foreground">LinkedIn</p>
                    </Link>
                  )}
                  {contact.facebook && (
                    <Link
                      href={contact.facebook}
                      className="flex items-center gap-4 p-3 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 transition-all duration-300 hover:translate-x-2 group"
                    >
                      <div className="p-2 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/30 transition-all duration-300">
                        <Facebook className="w-5 h-5 text-blue-700" />
                      </div>
                      <p className="font-semibold text-foreground">Facebook</p>
                    </Link>
                  )}
                  {contact.googleScholar && (
                    <Link
                      href={contact.googleScholar}
                      className="flex items-center gap-4 p-3 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-all duration-300 hover:translate-x-2 group"
                    >
                      <div className="p-2 rounded-lg bg-green-500/20 group-hover:bg-green-500/30 transition-all duration-300">
                        <Globe className="w-5 h-5 text-green-600" />
                      </div>
                      <p className="font-semibold text-foreground">Google Scholar</p>
                    </Link>
                  )}
                  {contact.instagram && (
                    <Link
                      href={contact.instagram}
                      className="flex items-center gap-4 p-3 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 transition-all duration-300 hover:translate-x-2 group"
                    >
                      <div className="p-2 rounded-lg bg-pink-500/20 group-hover:bg-pink-500/30 transition-all duration-300">
                        <Instagram className="w-5 h-5 text-pink-600" />
                      </div>
                      <p className="font-semibold text-foreground">Instagram</p>
                    </Link>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
