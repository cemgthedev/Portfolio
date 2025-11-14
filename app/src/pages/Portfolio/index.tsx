import { IconGithub, IconReturn, IconRocket } from "@/assets/icons";
import { Card } from "@/components/Card";
import { Content } from "@/components/Content";
import { CustomCarousel } from "@/components/CustomCarousel";
import { CustomLink } from "@/components/CustomLink";
import { Figure } from "@/components/Figure";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { projects } from "@/mock/projects";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function PortfolioPage() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Content className="relative h-screen w-screen snap-y snap-mandatory overflow-auto bg-zinc-950 scrollbar-hide">
      <div className="absolute top-0 z-[999] flex w-full animate-top items-center justify-between border-b border-b-gray-50 bg-zinc-800/30 px-3 py-1">
        <Heading size="md" className="text-gray-50">
          Projetos Pessoais
        </Heading>
        <CustomLink href={"/"} className="bg-transparent hover:bg-zinc-300/30">
          <IconReturn size={28} className="min-h-[28px] min-w-[28px]" />
        </CustomLink>
      </div>
      {projects.map((project) => {
        return (
          <Card
            key={Math.random()}
            className="min-h-full w-full animate-top snap-start px-4 py-12"
            dark
          >
            <Heading size="md" className="mt-2">
              {project.name}
            </Heading>
            <Figure>
              <CustomCarousel images={project.imageUrls} />
              <figcaption className="flex flex-col items-center justify-center gap-2 text-center">
                <Label size="lg">Descrição</Label>
                <Text className="md:w-[50vw]">{project.description}</Text>
                <Label size="lg">Stack</Label>
                <Label>{project.stack.join(" - ")}</Label>
                <div className="flex items-center justify-center gap-4">
                  {project.githubLink && (
                    <CustomLink
                      href={project.githubLink}
                      next={false}
                      rounded="full"
                      shadow="secondary"
                      className="px-6"
                    >
                      <IconGithub
                        size={28}
                        className="min-h-[28px] min-w-[28px]"
                      />
                      <Label>Github</Label>
                    </CustomLink>
                  )}
                  {project.siteLink && (
                    <CustomLink
                      href={project.siteLink}
                      next={false}
                      style="secondary"
                      shadow="primary"
                      rounded="full"
                      className="px-6"
                    >
                      <IconRocket
                        size={28}
                        className="min-h-[28px] min-w-[28px]"
                      />
                      <Label>Site</Label>
                    </CustomLink>
                  )}
                </div>
              </figcaption>
            </Figure>
          </Card>
        );
      })}
    </Content>
  );
}
