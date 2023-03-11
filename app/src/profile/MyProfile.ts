import { Profile } from "./Profile";

export const MyProfile: Profile = {
    imageUrl: '/assets/profile/ImageProfile.svg',
    portifolioName: 'Portifólio',
    portifolioLema: 'Copyright (c) 2022 Carlos Eduardo de Moura Gomes',
    bio: [
        `Olá, me chamo Carlos Eduardo de Moura Gomes.`,
        `Atualmente minha experiência está fundamentada apenas em projetos pessoais
        nos quais busco aplicar todos os meus conhecimentos.`,
        `Planejo dominar inicialmente tecnologias relacionadas a Front End e UI/UX Design
        e futuramente tecnologias relacionadas a Back End. Devido a rotina da faculdade 
        busco apenas vagas de estágio remoto com carga horária semanal de até 40 horas.`
    ],
    projects: [
        {
            imageUrl: '/assets/profile/projects/github-stalker.png',
            label: 'GitHub Stalker',
            githubProjectUrl: 'https://github.com/cemgthedev/GitHub-Stalker',
            siteProjectUrl: 'https://github-stalker-gray.vercel.app/',
            description: 'Uma aplicação web para você "stalkear" usuários do github'
        }
    ],
    educational: [
        {
            institution: 'Universidade Federal do Ceará - Campus de Quixadá',
            course: 'Ciência da Computação',
            period: 'Mar/2019 até o momento (3 anos e 11 meses)'
        },
    ],
    stack: [
        {
            imageUrl: '/assets/profile/stack/Figma.svg',
            label: 'Figma'
        },
        {
            imageUrl: '/assets/profile/stack/HTML5.svg',
            label: 'HTML'
        },
        {
            imageUrl: '/assets/profile/stack/CSS3.svg',
            label: 'CSS'
        },
        {
            imageUrl: '/assets/profile/stack/Express.svg',
            label: 'Express'
        },
        {
            imageUrl: '/assets/profile/stack/Tailwindcss.svg',
            label: 'Tailwindcss'
        },
        {
            imageUrl: '/assets/profile/stack/React.svg',
            label: 'React'
        },
        {
            imageUrl: '/assets/profile/stack/Python.svg',
            label: 'Python'
        },
        {
            imageUrl: '/assets/profile/stack/JavaScript.svg',
            label: 'JavaScript'
        },
        {
            imageUrl: '/assets/profile/stack/TypeScript.svg',
            label: 'TypeScript'
        },
        {
            imageUrl: '/assets/profile/stack/Node.svg',
            label: 'Node'
        },
        {
            imageUrl: '/assets/profile/stack/Git.svg',
            label: 'Git'
        }
    ],
    certificates: [
        {
            imageUrl: '/assets/profile/certificates/html-basico-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            trail: 'Crie um Site Simples',
            label: 'HTML Básico'
        },
        {
            imageUrl: '/assets/profile/certificates/html-avancado-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            trail: 'Crie um Site Simples',
            label: 'HTML Avançado'
        },
        {
            imageUrl: '/assets/profile/certificates/inovando-com-css-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            trail: 'Crie um Site Simples',
            label: 'Inovando com CSS'
        },
        {
            imageUrl: '/assets/profile/certificates/html-e-css-na-pratica-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            trail: 'Crie um Site Simples',
            label: 'HTML e CSS na Prática'
        },
        {
            imageUrl: '/assets/profile/certificates/introducao-ao-javascript-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            trail: 'Crie um Site Simples',
            label: 'Introdução ao JavaScript'
        },
        {
            imageUrl: '/assets/profile/certificates/crie-um-site-simples-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            trail: 'Crie um Site Simples',
            label: 'Crie um Site Simples com HTML, CSS e JavaScript'
        },
        {
            imageUrl: '/assets/profile/certificates/trilha-conectar-do-discover-rocketseat.png',
            institution: 'Rocketseat',
            trail: 'Conectar',
        },
        {
            imageUrl: '/assets/profile/certificates/trilha-fundamentar-do-discover-rocketseat.png',
            institution: 'Rocketseat',
            trail: 'Fundamentar',
        }
    ],
    skills: [
        {
            imageUrl: '/assets/profile/habilities/Wave-1.svg',
            label: 'Comunicação'
        },
        {
            imageUrl: '/assets/profile/habilities/Wave-2.svg',
            label: 'Organização'
        },
        {
            imageUrl: '/assets/profile/habilities/Wave-3.svg',
            label: 'Criatividade'
        },
        {
            imageUrl: '/assets/profile/habilities/Wave-4.svg',
            label: 'Autodidatismo'
        }
    ],
    contacts: [
        {
            imageUrl: '/assets/icons/InstagramLogo.svg',
            title: 'instagram',
            siteUrl: 'https://www.instagram.com/_carlos_eduardo_mg/'
        },
        {
            imageUrl: '/assets/icons/LinkedinLogo.svg',
            title: 'linkedin',
            siteUrl: 'https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/'
        },
        {
            imageUrl: '/assets/icons/GithubLogo.svg',
            title: 'github',
            siteUrl: 'https://github.com/cemgthedev'
        },
        {
            imageUrl: '/assets/icons/Envelope.svg',
            title: 'email',
            siteUrl: 'mailto:cemg.the.dev@gmail.com'
        },
    ]
}