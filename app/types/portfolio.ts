export interface Education {
  degree: string
  institution: string
  year: string
  description: string
  details: string
}

export interface Experience {
  title: string
  organization: string
  period: string
  responsibilities: string[]
}

export interface Publication {
  title: string
  authors: string
  journal: string
  year: string
  doi?: string
}

export interface Award {
  title: string
  organization: string
  year: string
  description: string
  certificateUrl?: string
}

export interface ContactInfo {
  email: string
  phone: string
  office: string
  linkedin?: string
  googleScholar?: string,
  researchGate?: string,
  orcid?: string,
  instagram?: string,
  facebook?: string,
  twitter?: string,
  youtube?: string,
}

export interface OER {
  title: string
  description: string
  icon: string
  videoUrl?: string
}

export interface ProfessorData {
  name: string
  title: string
  institution: string
  department: string
  bio: string[]
  specializations: string[]
  education: Education[]
  experience: Experience[]
  publications: Publication[]
  awards: Award[]
  contact: ContactInfo
  stats: {
    totalPublications: number
    researchArticles: number
    booksEdited: number
    bookChapters: number
    magazineArticles: number
  }
  researchAreas: string[]
  oers: OER[]
}
