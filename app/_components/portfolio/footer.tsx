interface FooterProps {
  name: string
}

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
