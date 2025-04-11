export const contacts = {
  github: 'cemgthedev',
  linkedin: 'carlos-eduardo-moura-gomes-bb0ab7250',
  email: 'cemg.the.dev@gmail.com',
  whatsapp: '5585997981087',
}

export type Experience = {
  name: string
  details: string[]
}

export const experiences: Experience[] = [
  {
    name: "2023 - Presente | Desenvolvedor Front End na Startup InovAssessoria",
    details: [
      "Desenvolvimento de interfaces web com tecnologias como Vite, React, TypeScript e Tailwindcss",
      "Manutenções para estilização, responsividade e redesigns"
    ],
  },
  {
    name: "2024 - Presente | Desenvolvedor Mobile na Startup InovAssessoria",
    details: [
      "Desenvolvimento de aplicativos android com tecnologias como Expo, React Native e StyleSheet"
    ],
  }
]

export type Skill = {
  type: "front-end" | "mobile"
  name: string
  imageUrl: string
}

export const stack: Skill[] = [
  {
    type: 'front-end',
    name: 'Figma',
    imageUrl: '/assets/profile/stack/Figma.svg',
  },
  {
    type: 'front-end',
    name: 'HTML',
    imageUrl: '/assets/profile/stack/HTML.svg',
  },
  {
    type: 'front-end',
    name: 'CSS',
    imageUrl: '/assets/profile/stack/CSS.svg',
  },
  {
    type: 'front-end',
    name: 'Tailwindcss',
    imageUrl: '/assets/profile/stack/Tailwindcss.svg',
  },
  {
    type: 'front-end',
    name: 'React',
    imageUrl: '/assets/profile/stack/React.svg',
  },
  {
    type: 'front-end',
    name: 'Storybook',
    imageUrl: '/assets/profile/stack/Storybook.svg',
  },
  {
    type: 'front-end',
    name: 'Javascript',
    imageUrl: '/assets/profile/stack/Javascript.svg',
  },
  {
    type: 'front-end',
    name: 'Typescript',
    imageUrl: '/assets/profile/stack/Typescript.svg',
  },
  {
    type: 'front-end',
    name: 'Node',
    imageUrl: '/assets/profile/stack/Node.svg',
  },
  {
    type: 'front-end',
    name: 'Next',
    imageUrl: '/assets/profile/stack/Next.svg',
  },
  {
    type: 'front-end',
    name: 'Vite',
    imageUrl: '/assets/profile/stack/Vite.svg',
  },
  {
    type: 'front-end',
    name: 'GraphQL',
    imageUrl: '/assets/profile/stack/GraphQL.svg',
  },
  {
    type: 'front-end',
    name: 'Firebase',
    imageUrl: '/assets/profile/stack/Firebase.svg',
  },
  {
    type: 'front-end',
    name: 'ESLint',
    imageUrl: '/assets/profile/stack/ESLint.svg',
  },
  {
    type: 'front-end',
    name: 'Git',
    imageUrl: '/assets/profile/stack/Git.svg',
  },
  {
    type: 'mobile',
    name: 'Figma',
    imageUrl: '/assets/profile/stack/Figma.svg',
  },
  {
    type: 'mobile',
    name: 'React Native',
    imageUrl: '/assets/profile/stack/React.svg',
  },
  {
    type: 'mobile',
    name: 'GraphQL',
    imageUrl: '/assets/profile/stack/GraphQL.svg',
  },
  {
    type: 'mobile',
    name: 'Firebase',
    imageUrl: '/assets/profile/stack/Firebase.svg',
  },
  {
    type: 'mobile',
    name: 'ESLint',
    imageUrl: '/assets/profile/stack/ESLint.svg',
  },
  {
    type: 'mobile',
    name: 'Git',
    imageUrl: '/assets/profile/stack/Git.svg',
  },
]

export type Certificate = {
  institution: string
  name: string
  ImageUrl: string
}

export const certificates: Certificate[] = [
  {
    institution: 'Fundação Bradesco',
    name: 'HTML Básico',
    ImageUrl: '/assets/profile/certificates/html-basico-fundacao-bradesco.png',
  },
  {
    institution: 'Fundação Bradesco',
    name: 'HTML Avançado',
    ImageUrl:
      '/assets/profile/certificates/html-avancado-fundacao-bradesco.png',
  },
  {
    institution: 'Fundação Bradesco',
    name: 'Inovando com CSS',
    ImageUrl:
      '/assets/profile/certificates/inovando-com-css-fundacao-bradesco.png',
  },
  {
    institution: 'Fundação Bradesco',
    name: 'HTML e CSS na Prática',
    ImageUrl:
      '/assets/profile/certificates/html-e-css-na-pratica-fundacao-bradesco.png',
  },
  {
    institution: 'Fundação Bradesco',
    name: 'Introdução ao JavaScript',
    ImageUrl:
      '/assets/profile/certificates/introducao-ao-javascript-fundacao-bradesco.png',
  },
  {
    institution: 'Fundação Bradesco',
    name: 'Crie um Site Simples com HTML, CSS e JavaScript',
    ImageUrl:
      '/assets/profile/certificates/crie-um-site-simples-fundacao-bradesco.png',
  },
  {
    institution: 'Rocketseat',
    name: 'Conectar',
    ImageUrl:
      '/assets/profile/certificates/trilha-conectar-do-discover-rocketseat.png',
  },
  {
    institution: 'Rocketseat',
    name: 'Fundamentar',
    ImageUrl:
      '/assets/profile/certificates/trilha-fundamentar-do-discover-rocketseat.png',
  },
  {
    institution: 'Rocketseat',
    name: 'Especializar',
    ImageUrl:
      '/assets/profile/certificates/trilha-especializar-do-discover-rocketseat.png',
  },
  {
    institution: 'Udemy',
    name: 'Next e React',
    ImageUrl: '/assets/profile/certificates/next-e-react-da-udemy.png',
  },
  {
    institution: 'Udemy',
    name: 'Complete Web & Mobile Designer: UI/UX, Figma, +more',
    ImageUrl: '/assets/profile/certificates/complete-web-and-mobile-design-udemy.png',
  },
]
