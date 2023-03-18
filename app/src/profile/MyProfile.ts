import { Profile } from "./Profile";

export const MyProfile: Profile = {
    imageUrl: '/src/assets/profile/banner/ImageProfile.svg',
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
            imageUrl: '/src/assets/profile/projects/github-stalker.svg',
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
        }
    ],
    stack: [
        {
            imageUrl: '/src/assets/profile/stack/Figma.svg',
            label: 'Figma'
        },
        {
            imageUrl: '/src/assets/profile/stack/HTML5.svg',
            label: 'HTML'
        },
        {
            imageUrl: '/src/assets/profile/stack/CSS3.svg',
            label: 'CSS'
        },
        {
            imageUrl: '/src/assets/profile/stack/Express.svg',
            label: 'Express'
        },
        {
            imageUrl: '/src/assets/profile/stack/Tailwindcss.svg',
            label: 'Tailwindcss'
        },
        {
            imageUrl: '/src/assets/profile/stack/React.svg',
            label: 'React'
        },
        {
            imageUrl: '/src/assets/profile/stack/Python.svg',
            label: 'Python'
        },
        {
            imageUrl: '/src/assets/profile/stack/JavaScript.svg',
            label: 'JavaScript'
        },
        {
            imageUrl: '/src/assets/profile/stack/TypeScript.svg',
            label: 'TypeScript'
        },
        {
            imageUrl: '/src/assets/profile/stack/Node.svg',
            label: 'Node'
        },
        {
            imageUrl: '/src/assets/profile/stack/Git.svg',
            label: 'Git'
        }
    ],
    certificates: [
        {
            imageUrl: '/src/assets/profile/certificates/html-basico-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            label: 'HTML Básico'
        },
        {
            imageUrl: '/src/assets/profile/certificates/html-avancado-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            label: 'HTML Avançado'
        },
        {
            imageUrl: '/src/assets/profile/certificates/inovando-com-css-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            label: 'Inovando com CSS'
        },
        {
            imageUrl: '/src/assets/profile/certificates/html-e-css-na-pratica-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            label: 'HTML e CSS na Prática'
        },
        {
            imageUrl: '/src/assets/profile/certificates/introducao-ao-javascript-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            label: 'Introdução ao JavaScript'
        },
        {
            imageUrl: '/src/assets/profile/certificates/crie-um-site-simples-fundacao-bradesco.png',
            institution: 'Fundação Bradesco',
            label: 'Crie um Site Simples com HTML, CSS e JavaScript'
        },
        {
            imageUrl: '/src/assets/profile/certificates/trilha-conectar-do-discover-rocketseat.png',
            institution: 'Rocketseat',
            label: 'Conectar',
        },
        {
            imageUrl: '/src/assets/profile/certificates/trilha-fundamentar-do-discover-rocketseat.png',
            institution: 'Rocketseat',
            label: 'Fundamentar',
        }
    ],
    skills: [
        {
            imageUrl: '/src/assets/profile/habilities/Wave-1.svg',
            label: 'Comunicação'
        },
        {
            imageUrl: '/src/assets/profile/habilities/Wave-2.svg',
            label: 'Organização'
        },
        {
            imageUrl: '/src/assets/profile/habilities/Wave-3.svg',
            label: 'Criatividade'
        },
        {
            imageUrl: '/src/assets/profile/habilities/Wave-4.svg',
            label: 'Autodidatismo'
        }
    ],
    contacts: [
        {
            imageUrl: '/src/assets/icons/InstagramLogo.svg',
            title: 'instagram',
            siteUrl: 'https://www.instagram.com/_carlos_eduardo_mg/'
        },
        {
            imageUrl: '/src/assets/icons/LinkedinLogo.svg',
            title: 'linkedin',
            siteUrl: 'https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/'
        },
        {
            imageUrl: '/src/assets/icons/GithubLogo.svg',
            title: 'github',
            siteUrl: 'https://github.com/cemgthedev'
        },
        {
            imageUrl: '/src/assets/icons/Envelope.svg',
            title: 'email',
            siteUrl: 'mailto:cemg.the.dev@gmail.com'
        },
    ]
}