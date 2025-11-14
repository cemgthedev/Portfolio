import { IconGithub, IconRocket } from "@/assets/icons";
import { Card } from "@/components/Card";
import { Content } from "@/components/Content";
import { CustomCarousel } from "@/components/CustomCarousel";
import { CustomLink } from "@/components/CustomLink";
import { Figure } from "@/components/Figure";
import { HeaderPortfolio } from "@/components/HeaderPortfolio";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { projects } from "@/mock/projects";

export default function PortfolioPage() {
  return (
    <Content className="relative h-screen w-screen snap-y snap-mandatory overflow-auto bg-zinc-950 scrollbar-hide">
      <HeaderPortfolio />
      <div id="front-end">
        {projects
          .filter((project) => project.type === "front-end")
          .map((project) => {
            return (
              <Card
                key={Math.random()}
                className="min-h-full w-screen snap-start px-8 py-20"
                dark
              >
                <Heading size="md" className="mt-2">
                  {project.name}
                </Heading>
                <Figure>
                  <CustomCarousel
                    className="w-[256px] sm:w-[300px]"
                    images={project.imageUrls}
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
            );
          })}
      </div>
    </Content>
  );
}
