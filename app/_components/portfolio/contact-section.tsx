import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Globe, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import type { ContactInfo } from "@/app/types/portfolio"

interface ContactSectionProps {
  contact: ContactInfo
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  I welcome opportunities for research collaborations, outreach programs, and academic events.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">{contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">{contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium">Office</p>
                    <p className="text-muted-foreground whitespace-pre-line">{contact.office}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Online Presence</CardTitle>
                <CardDescription>
                  Connect with me online to follow my academic journey and publications.
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                {contact.linkedin && (
                  <Link
                    href={contact.linkedin}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                    </div>
                  </Link>
                )}
                {contact.facebook && (
                  <Link
                    href={contact.facebook}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Facebook</p>
                    </div>
                  </Link>
                )}
                {contact.googleScholar && (
                  <Link
                    href={contact.googleScholar}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Globe className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium">Google Scholar</p>
                    </div>
                  </Link>
                )}
                {contact.instagram && (
                  <Link
                    href={contact.instagram}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-red-400" />
                    <div>
                      <p className="font-medium">Instagram</p>
                    </div>
                  </Link>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
