"use client";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "../mode-toggle";
import { cn } from "@/lib/utils";

interface EnhancedHeaderProps {
  name: string;
}

const navigationItems = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#awards", label: "Awards" },
  { href: "#oers", label: "OERs" },
  { href: "#contact", label: "Contact" },
];

export function EnhancedHeader({ name }: EnhancedHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold">{name}</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  activeSection === item.href && "text-primary"
                )}
              >
                {item.label}
              </button>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              {isOpen && (
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
              )}
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[350px] pt-4 bg-background text-foreground"
              >
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    Mobile Navigation Menu
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col h-full justify-between">
                  {/* Navigation */}
                  <div className="pl-4">
                    <nav className="flex flex-col gap-1">
                      {navigationItems.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => handleLinkClick(item.href)}
                          className={cn(
                            "w-full text-left text-base font-medium py-2 px-4 rounded-md",
                            "hover:bg-accent hover:text-accent-foreground",
                            activeSection === item.href
                              ? "bg-muted text-primary"
                              : "text-muted-foreground"
                          )}
                        >
                          {item.label}
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* Divider */}
                  <hr className="my-6 border-muted" />

                  {/* Contact */}
                  <div className="bg-secondary p-4 ">
                    <h3 className="text-sm font-semibold text-muted-foreground mb-2 tracking-wide uppercase">
                      Quick Contact
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>
                        <a
                          href="mailto:akthakur.ranchiuniv@gmail.com"
                          className="hover:text-primary"
                        >
                          akthakur.ranchiuniv@gmail.com
                        </a>
                      </li>
                      <li>
                        <a
                          href="tel:+919835984490"
                          className="hover:text-primary"
                        >
                          +91 98359 84490
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
