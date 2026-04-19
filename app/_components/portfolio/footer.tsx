interface FooterProps {
  name: string
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-primary/20 py-12 bg-gradient-to-b from-background to-primary/3">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} <span className="font-semibold text-primary">{name}</span>. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed with <span className="text-accent">♥</span> • Built with modern web technologies
          </p>
        </div>
      </div>
    </footer>
  )
}
