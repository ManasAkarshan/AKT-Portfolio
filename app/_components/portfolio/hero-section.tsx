"use client"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, BookOpen, User } from "lucide-react";

interface HeroSectionProps {
  name: string;
  title: string;
  institution: string;
  department: string;
}

export function HeroSection({
  name,
  title,
  institution,
  department,
}: HeroSectionProps) {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/95 to-muted/50 dark:from-background dark:via-background/90 dark:to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 border-4 border-background shadow-lg">
              <AvatarImage 
                src="/profile.jpeg" 
                alt={name} 
                className="object-cover object-center"
              />
              <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/40">
                <User className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-primary" />
              </AvatarFallback>
            </Avatar>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
            <p className="text-xl text-muted-foreground mb-6">{title}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {department} • {institution} 
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => handleLinkClick("#contact")}
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 bg-transparent"
              onClick={() => handleLinkClick("#research")}
            >
              <BookOpen className="w-4 h-4" />
              View Publications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
