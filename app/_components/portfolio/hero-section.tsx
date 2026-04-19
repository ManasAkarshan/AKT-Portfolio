"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Mail, BookOpen, User } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

interface HeroSectionProps {
  name: string
  title: string
  institution: string
  department: string
}

export function HeroSection({
  name,
  title,
  institution,
  department,
}: HeroSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/50 dark:from-background dark:via-background/90 dark:to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <ScrollReveal delay={100} direction="up">
              <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 border-4 border-background shadow-lg animate-in zoom-in-50 duration-700 fill-mode-backwards">
                <AvatarImage
                  src="/profile.jpeg"
                  alt={name}
                  className="object-cover object-center"
                />
                <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40">
                  <User className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary" />
                </AvatarFallback>
              </Avatar>
            </ScrollReveal>
            <ScrollReveal delay={300} direction="up">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
            </ScrollReveal>
            <ScrollReveal delay={400} direction="up">
              <p className="text-xl text-muted-foreground mb-6">{title}</p>
            </ScrollReveal>
            <ScrollReveal delay={500} direction="up">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {department} • {institution}
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={600} direction="up">
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => handleLinkClick("#contact")}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => handleLinkClick("#research")}
              >
                <BookOpen className="w-4 h-4" />
                View Publications
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
