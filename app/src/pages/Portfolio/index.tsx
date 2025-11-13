import { IconGithub, IconReturn, IconRocket } from "@/assets/icons";
import { Card } from "@/components/Card";
import { Content } from "@/components/Content";
import { CustomLink } from "@/components/CustomLink";
import { Figure } from "@/components/Figure";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { projects } from "@/mock/projects";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <Content className="relative h-screen w-screen snap-y snap-mandatory overflow-auto bg-zinc-950 scrollbar-hide">
      <CustomLink
        href={"/"}
        className="absolute right-4 top-4 z-[999] bg-transparent hover:bg-zinc-300/30"
      >
        <IconReturn size={28} className="min-h-[28px] min-w-[28px]" />
      </CustomLink>
      {projects.map((project) => (
        <Card
          key={Math.random()}
          className="min-h-full w-full animate-top snap-start px-4 py-12"
          dark
        >
          <Heading size="lg">{project.name}</Heading>
          <Figure>
            <Image
              src={project.imageUrl}
              alt="..."
              width={300}
              height={300}
              className="rounded-lg ring-2 ring-white"
            />
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
      ))}
    </Content>
  );
}
