export interface Project {
    imageUrl: string,
    label: string,
    githubProjectUrl: string,
    siteProjectUrl: string,
    description: string
}

export interface Education {
    institution: string,
    course?: string,
    period: string
}

export interface Technology {
    imageUrl: string,
    label: string
}

export interface Certificate {
    imageUrl: string,
    institution: string,
    trail?: string,
    label?: string
}

export interface Skill {
    imageUrl: string,
    label: string
}

export interface Contact {
    imageUrl: string,
    title: string,
    siteUrl: string
}

export interface Profile {
    imageUrl: string,
    salutation: string[],
    bio: string[],
    portifolioName: string,
    portifolioLema:string,
    projects: Project[],
    educational: Education[],
    stack: Technology[],
    certificates: Certificate[],
    skills: Skill[],
    contacts: Contact[]
}