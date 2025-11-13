import { TProject } from "@/types/TProject";

export const projects: TProject[] = [
  {
    name: "Github Stalker",
    description: `Este projeto foi desenvolvido do Figma ao React utilizando o
        conceito de Design System. A aplicação trata-se de um stalker de usuários do GitHub; 
        descubra detalhes como tecnologias, seguidores e repositórios dos devs do seu grupo 
        de forma prática e rápida.`,
    stack: [
      "ReactJs",
      "NodeJs",
      "TypeScript",
      "Tailwindcss",
      "Storybook",
      "Outros",
    ],
    imageUrl: "/assets/profile/projects/GithubStalker.svg",
    githubLink: "https://github.com/cemgthedev/GitHub-Stalker",
    siteLink: "https://bit.ly/GitHubStalker",
  },
  {
    name: "Lojita",
    description: `Este projeto foi desenvolvido do Figma ao React utilizando o conceito
        de Design System. A aplicação trata-se de um marketplace para administrador, vendedores 
        e compradores. Gerencie usuários, chats, pedidos, produtos, favoritos e carrinho de forma 
        prática e rápida.`,
    stack: [
      "ReactJs",
      "NodeJs",
      "TypeScript",
      "Tailwindcss",
      "Hero UI",
      "Storybook",
      "Outros",
    ],
    imageUrl: "/assets/profile/projects/Lojita.svg",
    githubLink: "https://github.com/cemgthedev/Lojita-web",
    siteLink: "https://bit.ly/Lojita",
  },
];
