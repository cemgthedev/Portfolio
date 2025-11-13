import { IconGithub, IconReturn, IconRocket } from "@/assets/icons";
import { Card } from "@/components/Card";
import { Content } from "@/components/Content";
import { CustomLink } from "@/components/CustomLink";
import { Figure } from "@/components/Figure";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import Image from "next/image";

export function PortfolioPage() {
  return (
    <Content className="relative h-screen w-screen snap-y snap-mandatory overflow-auto bg-zinc-950 scrollbar-hide">
      <CustomLink
        href={"/"}
        className="absolute right-4 top-4 z-[999] bg-transparent hover:bg-zinc-300/30"
      >
        <IconReturn size={28} className="min-h-[28px] min-w-[28px]" />
      </CustomLink>
      <Card
        className="min-h-full w-full animate-top snap-start px-4 py-12"
        dark
      >
        <Heading size="lg">Github Stalker</Heading>
        <Figure>
          <Image
            src={"/assets/profile/projects/GithubStalker.svg"}
            alt="..."
            width={300}
            height={300}
            className="rounded-lg ring-2 ring-white"
          />
          <figcaption className="flex flex-col items-center justify-center gap-2 text-center">
            <Label size="lg">Descrição</Label>
            <Text className="md:w-[50vw]">
              Este projeto foi desenvolvido do Figma ao React utilizando o
              conceito de Design System. A aplicação trata-se de um stalker de
              usuários do GitHub; descubra detalhes como tecnologias, seguidores
              e repositórios dos devs do seu grupo de forma prática e rápida.
            </Text>
            <Label size="lg">Stack</Label>
            <Label>
              ReactJs - NodeJs - TypeScript - Tailwindcss - Storybook - Outros
            </Label>
            <div className="flex items-center justify-center gap-4">
              <CustomLink
                href={"https://github.com/cemgthedev/GitHub-Stalker"}
                next={false}
                rounded="full"
                shadow="secondary"
                className="px-6"
              >
                <IconGithub size={28} className="min-h-[28px] min-w-[28px]" />
                <Label>Github</Label>
              </CustomLink>
              <CustomLink
                href={"https://bit.ly/GitHubStalker"}
                next={false}
                style="secondary"
                shadow="primary"
                rounded="full"
                className="px-6"
              >
                <IconRocket size={28} className="min-h-[28px] min-w-[28px]" />
                <Label>Site</Label>
              </CustomLink>
            </div>
          </figcaption>
        </Figure>
      </Card>
    </Content>
  );
}
