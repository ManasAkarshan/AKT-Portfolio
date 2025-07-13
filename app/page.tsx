import { galleryImages, professorData } from "./data/professor-data"
import { Header } from "./_components/portfolio/header"
import { HeroSection } from "./_components/portfolio/hero-section"
import { AboutSection } from "./_components/portfolio/about-section"
import { EducationSection } from "./_components/portfolio/education-section"
import { ExperienceSection } from "./_components/portfolio/experience-section"
import { ResearchSection } from "./_components/portfolio/research-section"
import { AwardsSection } from "./_components/portfolio/awards-section"
import { ProfessionalActivities } from "./_components/portfolio/professional-activities"
import { OERsSection } from "./_components/portfolio/oers-section"
import { ContactSection } from "./_components/portfolio/contact-section"
import { Footer } from "./_components/portfolio/footer"
import { EnhancedHeader } from "./_components/portfolio/enhanced-header"
import { GallerySection } from "./_components/portfolio/gallery-section"
import { BookOpen, Users, Globe } from "lucide-react"

export default function ProfessorPortfolio() {
  // Map icon names to React components
  const iconMap = {
    BookOpen: <BookOpen className="w-5 h-5" />,
    Users: <Users className="w-5 h-5" />,
    Globe: <Globe className="w-5 h-5" />
  }

  // Prepare OERs data with icons
  const oersData = professorData.oers.map(oer => ({
    ...oer,
    icon: iconMap[oer.icon as keyof typeof iconMap] || <BookOpen className="w-5 h-5" />
  }))

 
  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader name={professorData.name} />

      <HeroSection
        name={professorData.name}
        title={professorData.title}
        institution={professorData.institution}
        department={professorData.department}
      />

      <AboutSection
        bio={professorData.bio}
        specializations={professorData.specializations}
        title={professorData.title}
        institution={professorData.institution}
      />

      <EducationSection education={professorData.education} />

      <ExperienceSection experience={professorData.experience} />

      <ResearchSection
        researchAreas={professorData.researchAreas}
        stats={professorData.stats}
        publications={professorData.publications}
        socialLinks={{
          orcid: professorData.contact.orcid,
          googleScholar: professorData.contact.googleScholar,
          researchGate: professorData.contact.researchGate
        }}
      />

      <AwardsSection awards={professorData.awards} />

      <OERsSection 
        oersData={oersData}
        socialLinks={{
          orcid: professorData.contact.orcid,
          googleScholar: professorData.contact.googleScholar,
          researchGate: professorData.contact.researchGate
        }}
        channelUrl="https://www.youtube.com/@anandsir8152"
      />

      <GallerySection images={galleryImages} />

      <ProfessionalActivities />

      <ContactSection contact={professorData.contact} />

      <Footer name={professorData.name} />
    </div>
  )
}
