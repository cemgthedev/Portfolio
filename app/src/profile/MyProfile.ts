import { Profile } from "./Profile";

export const MyProfile: Profile = {
    imageUrl: '/ImageProfile.svg',
    bio: `
        <p>
            Olá, me chamo Carlos Eduardo de Moura Gomes
        </p>
        <p>
            Atualmente minha experiência está fundamentada apenas em projetos pessoais
            nos quais busco aplicar todos os meus conhecimentos.
        </p>
        <p>
            Planejo dominar inicialmente tecnologias relacionadas a Front End e UI/UX Design
            e futuramente tecnologias relacionadas a Back End. Devido a rotina da faculdade 
            busco apenas vagas de estágio remoto com carga horária semanal de até 40 horas.
        </p>
    `,
    educational: [
        {
            institution: 'Universidade Federal do Ceará - Campus de Quixadá',
            course: 'Ciência da Computação',
            period: 'Mar/2019 até o momento (3 anos e 11 meses)'
        }
    ],
    stack: [
        {
            imageUrl: '/icons/Figma.svg',
            label: 'Figma'
        },
        {
            imageUrl: '/icons/HTML5.svg',
            label: 'HTML'
        },
        {
            imageUrl: '/icons/CSS3.svg',
            label: 'CSS'
        },
        {
            imageUrl: '/icons/Express.svg',
            label: 'Express'
        },
        {
            imageUrl: '/icons/Tailwindcss.svg',
            label: 'Tailwindcss'
        },
        {
            imageUrl: '/icons/React.svg',
            label: 'React'
        },
        {
            imageUrl: '/icons/Python.svg',
            label: 'Python'
        },
        {
            imageUrl: '/icons/JavaScript.svg',
            label: 'JavaScript'
        },
        {
            imageUrl: '/icons/TypeScript.svg',
            label: 'TypeScript'
        },
        {
            imageUrl: '/icons/Node.svg',
            label: 'Node'
        },
        {
            imageUrl: '/icons/Git.svg',
            label: 'Git'
        }
    ],
    skills: [
        {
            label: 'Comunicação',
            level: 'Intermediário',
            percentageRange: 50
        },
        {
            label: 'Organização',
            level: 'Avançado',
            percentageRange: 100
        },
        {
            label: 'Criatividade',
            level: 'Avançado',
            percentageRange: 100
        },
        {
            label: 'Autodidatismo',
            level: 'Avançado',
            percentageRange: 100
        }
    ],
    projects: [
        {
            imageUrl: '',
            label: 'GitHub Stalker',
            githubProjectUrl: 'https://github.com/cemgthedev/GitHub-Stalker',
            siteProjectUrl: 'https://github-stalker-gray.vercel.app/',
            description: 'Uma aplicação web para você "stalkear" usuários do github'
        }
    ],
    contacts: [
        {
            imageUrl: '/icons/InstagramLogo.svg',
            title: 'instagram',
            siteUrl: 'https://www.instagram.com/_carlos_eduardo_mg/'
        },
        {
            imageUrl: '/icons/LinkedinLogo.svg',
            title: 'linkedin',
            siteUrl: 'https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/'
        },
        {
            imageUrl: '/icons/GithubLogo.svg',
            title: 'github',
            siteUrl: 'https://github.com/cemgthedev'
        },
        {
            imageUrl: '/icons/Envelope.svg',
            title: 'email',
            siteUrl: 'mailto:cemg.the.dev@gmail.com'
        },
    ]
}