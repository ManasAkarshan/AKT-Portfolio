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
    <section className="py-20 bg-gradient-to-br from-background via-primary/3 to-accent/5 dark:from-background dark:via-primary/5 dark:to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-primary/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <ScrollReveal delay={100} direction="up">
              <div className="mb-8 inline-block">
                <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto border-4 border-primary/20 shadow-2xl animate-in zoom-in-50 duration-700 fill-mode-backwards ring-4 ring-primary/10">
                  <AvatarImage
                    src="/profile.jpeg"
                    alt={name}
                    className="object-cover object-center"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20">
                    <User className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary" />
                  </AvatarFallback>
                </Avatar>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} direction="up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{name}</h1>
            </ScrollReveal>
            <ScrollReveal delay={400} direction="up">
              <p className="text-xl md:text-2xl font-semibold text-primary mb-6">{title}</p>
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
                className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80"
                onClick={() => handleLinkClick("#contact")}
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg border-primary/30 hover:bg-primary/5"
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
