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
    imageUrls: [
      "/assets/profile/projects/github-stalker/github-stalker-search-page.svg",
      "/assets/profile/projects/github-stalker/github-stalker-dashboard-page.svg",
      "/assets/profile/projects/github-stalker/github-stalker-repository-page.svg",
      "/assets/profile/projects/github-stalker/github-stalker-repository-details-pop-up.svg",
      "/assets/profile/projects/github-stalker/github-stalker-followers-page.svg",
      "/assets/profile/projects/github-stalker/github-stalker-stalked-page.svg",
    ],
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
    imageUrls: [
      "/assets/profile/projects/lojita/lojita-login-page.svg",
      "/assets/profile/projects/lojita/lojita-register-user-page.svg",
      "/assets/profile/projects/lojita/lojita-dashboard-page.svg",
      "/assets/profile/projects/lojita/lojita-profile-details-page.svg",
      "/assets/profile/projects/lojita/lojita-table-view-products-page.svg",
      "/assets/profile/projects/lojita/lojita-list-view-products-page.svg",
      "/assets/profile/projects/lojita/lojita-register-product-page.svg",
      "/assets/profile/projects/lojita/lojita-product-details-page.svg",
      "/assets/profile/projects/lojita/lojita-list-view-chats-page.svg",
    ],
    githubLink: "https://github.com/cemgthedev/Lojita-web",
    siteLink: "https://bit.ly/Lojita",
  },
];
