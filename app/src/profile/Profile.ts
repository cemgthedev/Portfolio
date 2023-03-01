export interface Education {
    institution: string,
    course?: string,
    period: string
}

export interface Technology {
    imageUrl: string,
    label: string
}

export interface Skill {
    label: string,
    level: string,
    percentageRange: number
}

export interface Project {
    imageUrl: string,
    label: string,
    githubProjectUrl: string,
    siteProjectUrl: string,
    description: string
}

export interface Contact {
    imageUrl: string,
    title: string,
    siteUrl: string
}

export interface Profile {
    imageUrl: string,
    bio: string[],
    educational: Education[],
    stack: Technology[],
    skills: Skill[],
    projects: Project[],
    contacts: Contact[]
}