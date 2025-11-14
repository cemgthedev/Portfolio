import animationExperiences from "@/assets/animations/AnimationExperiences.json";
import animationFormacao from "@/assets/animations/AnimationFormacao.json";
import animationPadronizacaoDocumentacaoFrontEnd from "@/assets/animations/AnimationPadronizacaoDocumentacaoFrontEnd.json";
import animationTrabalhoEmEquipe from "@/assets/animations/AnimationTrabalhoEmEquipe.json";
import animationUIDesign from "@/assets/animations/AnimationUIDesign.json";
import { IconCalendar, IconCertificate, IconLink } from "@/assets/icons";
import { Card } from "@/components/Card";
import { Content } from "@/components/Content";
import { CustomLink } from "@/components/CustomLink";
import { Figure } from "@/components/Figure";
import { HeaderCurriculum } from "@/components/HeaderCurriculum";
import { Heading } from "@/components/Heading";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { certificates } from "@/mock/certificates";
import { experiences } from "@/mock/experiences";
import { stack } from "@/mock/stack";
import Lottie from "lottie-react";
import Image from "next/image";

export default function CurriculumPage() {
  return (
    <Content className="snap-y snap-mandatory text-zinc-950 scrollbar-hide">
      <HeaderCurriculum />
      <Card
        id="formacao"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Formação</Heading>
        <Text className="indent-4">
          Estou completando o curso de
          <span className="px-1 font-semibold text-violet-500">
            Ciência da Computação
          </span>
          na
          <span className="px-1 font-semibold text-violet-500">
            Universidade Federal do Ceará
          </span>
          .
        </Text>
        <div className="grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-2">
          <Figure className="flex w-full flex-col items-center justify-center">
            <Image
              width={96}
              height={112}
              src="/assets/profile/training/UFC.svg"
              alt="..."
              loading="lazy"
            />
            <figcaption className="text-center">
              <Heading size="xs">
                Universidade Federal do Ceará - Campus de Quixadá
              </Heading>
              <Label>Ciência da Computação</Label>
              <Text> 2019 - Atual</Text>

              <hr className="my-2" />

              <div className="flex w-full flex-col gap-2">
                <Label size="lg">Principais disciplinas</Label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <Text className="flex items-center justify-center rounded-full border border-cyan-500 bg-zinc-800/30 px-3 py-2 text-cyan-500">
                    Estrutura de Dados Avançadas
                  </Text>
                  <Text className="flex items-center justify-center rounded-full border border-cyan-500 bg-zinc-800/30 px-3 py-2 text-cyan-500">
                    Engenharia de Software
                  </Text>
                  <Text className="flex items-center justify-center rounded-full border border-cyan-500 bg-zinc-800/30 px-3 py-2 text-cyan-500">
                    Programação Orientada a Objetos
                  </Text>
                  <Text className="flex items-center justify-center rounded-full border border-cyan-500 bg-zinc-800/30 px-3 py-2 text-cyan-500">
                    Desenvolvimento de Software para Web
                  </Text>
                  <Text className="flex items-center justify-center rounded-full border border-cyan-500 bg-zinc-800/30 px-3 py-2 text-cyan-500 sm:col-span-2">
                    Desenvolvimento de Software para Dispositivos Móveis
                  </Text>
                </div>
              </div>
            </figcaption>
          </Figure>
          <Lottie
            animationData={animationFormacao}
            loop={true}
            className="hidden h-[412px] w-full items-end lg:flex"
          />
        </div>
      </Card>
      <Card
        id="experiencias"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Experiências</Heading>
        <Text className="indent-4">
          Tenho
          <span className="px-1 font-semibold text-violet-500">2 anos</span> de
          experiência com desenvolvimento
          <span className="px-1 font-semibold text-violet-500">
            Front-end
          </span>{" "}
          e<span className="px-1 font-semibold text-violet-500">Mobile</span>.
          Já atuei em diversos projetos em equipe para desenvolvimento e
          manutenção de aplicações completas com foco na
          <span className="px-1 font-semibold text-violet-500">
            usabilidade
          </span>
          e
          <span className="px-1 font-semibold text-violet-500">
            acessibilidade
          </span>
          .
        </Text>
        <div className="grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-2">
          <Lottie
            animationData={animationExperiences}
            loop={true}
            className="hidden h-[412px] w-full items-end lg:flex"
          />
          <div className="flex w-full flex-col items-center gap-4">
            {experiences.map((experience) => (
              <div
                key={Math.random()}
                className="w-full rounded-lg border-2 border-cyan-500 bg-zinc-800/30 p-4"
              >
                <div className="flex items-center gap-2">
                  <IconCalendar
                    size={32}
                    className="min-h-[32px] min-w-[32px] text-cyan-500"
                  />
                  <Label size="lg">{experience.name}</Label>
                </div>
                <ul className="mx-4 list-inside list-disc">
                  {experience.details.map((detail) => (
                    <li key={Math.random()}>
                      <Text className="inline">{detail}</Text>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card
        id="stack"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Stack</Heading>
        <Text className="indent-4">
          Minha stack de desenvolvimento abrange tecnologias
          <span className="px-1 font-semibold text-violet-500">Front-end</span>e
          <span className="px-1 font-semibold text-violet-500">Mobile</span>.
          Estou em constante aprimoramento e prática, sempre em busca de novos
          <span className="px-1 font-semibold text-violet-500">desafios</span> e
          <span className="px-1 font-semibold text-violet-500">
            oportunidades
          </span>
          para evoluir profissionalmente.
        </Text>
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <fieldset className="flex w-full flex-wrap justify-center gap-4 rounded-lg border-2 border-cyan-500 pb-2">
            <legend className="ml-4 bg-zinc-950 p-2 font-semibold text-cyan-500">
              Front-end
            </legend>
            {stack
              .filter((item) => item.type === "front-end")
              .map((item) => (
                <Figure key={Math.random()} className="w-[80px] py-2">
                  <div className="relative flex h-[48px] w-[48px] items-center justify-center">
                    <Image
                      src={item.imageUrl}
                      width={48}
                      height={48}
                      alt=""
                      className="absolute z-[2] min-h-[48px] min-w-[48px]"
                    />
                    <Image
                      src={item.imageUrl}
                      width={48}
                      height={48}
                      alt=""
                      className="absolute top-0 z-[1] min-h-[48px] min-w-[48px] animate-pulse blur-md"
                    />
                  </div>
                  <figcaption>
                    <Label className="line-clamp-1">{item.name}</Label>
                  </figcaption>
                </Figure>
              ))}
          </fieldset>
          <fieldset className="flex w-full flex-wrap justify-center gap-4 rounded-lg border-2 border-cyan-500 pb-2">
            <legend className="ml-4 bg-zinc-950 p-2 font-semibold text-cyan-500">
              Mobile
            </legend>
            {stack
              .filter((item) => item.type === "mobile")
              .map((item) => (
                <Figure key={Math.random()} className="w-[80px] py-2">
                  <div className="relative flex h-[48px] w-[48px] items-center justify-center">
                    <Image
                      src={item.imageUrl}
                      width={48}
                      height={48}
                      alt=""
                      className="absolute z-[2] min-h-[48px] min-w-[48px]"
                    />
                    <Image
                      src={item.imageUrl}
                      width={48}
                      height={48}
                      alt=""
                      className="absolute top-0 z-[1] min-h-[48px] min-w-[48px] animate-pulse blur-md"
                    />
                  </div>
                  <figcaption>
                    <Label className="line-clamp-1">{item.name}</Label>
                  </figcaption>
                </Figure>
              ))}
          </fieldset>
        </div>
      </Card>
      <Card
        id="certificados"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Certificados</Heading>
        <Text className="indent-4">
          Já foram
          <span className="px-1 font-semibold text-violet-500">
            {certificates.length}
          </span>
          certificados concluídos totalizando
          <span className="px-1 font-semibold text-violet-500">185</span>
          horas aprendendo novas tecnologias e aprimorando habilidades.
        </Text>
        <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {certificates.map((item) => (
            <Figure key={Math.random()} className="w-full">
              <div className="flex w-full items-center">
                <div className="flex items-center justify-center rounded-full border-2 border-cyan-500 p-2">
                  <IconCertificate
                    size={32}
                    className="min-h-[28px] min-w-[28px]"
                  />
                </div>
                <div className="h-[2px] w-full bg-cyan-500"></div>
              </div>
              <figcaption className="flex w-full flex-col gap-1 px-6 pb-3 pt-1">
                <Label size="lg">{item.institution}</Label>
                <Label className="max-h-[32px] w-full overflow-hidden truncate">
                  {item.name}
                </Label>
                <CustomLink
                  href={item.ImageUrl}
                  className="w-full gap-1 px-3 py-2"
                  style="secondary"
                  next={false}
                >
                  <IconLink size={20} />
                  <Text>visualizar</Text>
                </CustomLink>
              </figcaption>
            </Figure>
          ))}
        </div>
      </Card>
      <Card
        id="differences"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Diferenciais</Heading>
        <Text className="indent-4">
          Estes são os meus diferenciais no desenvolvimento
          <span className="px-1 font-semibold text-violet-500">
            Front-end
          </span>{" "}
          e<span className="px-1 font-semibold text-violet-500">Mobile</span>.
        </Text>
        <div className="flex w-full flex-wrap justify-center gap-2 overflow-auto p-2 scrollbar-hide">
          <Figure className="px-4">
            <Lottie
              animationData={animationTrabalhoEmEquipe}
              loop={true}
              style={{ width: 160, height: 128 }}
            />
            <figcaption className="flex w-[256px] flex-col gap-1">
              <Label className="text-center">Trabalho em Equipe</Label>
              <Text className="text-center">
                Experiência trabalhando junto a desenvolvedores back end e
                designers
              </Text>
            </figcaption>
          </Figure>
          <Figure className="px-4">
            <Lottie
              animationData={animationUIDesign}
              loop={true}
              style={{ width: 128, height: 128 }}
            />
            <figcaption className="flex w-[256px] flex-col gap-1">
              <Label className="text-center">UI Design</Label>
              <Text className="text-center">
                User Interface Design na prototipagem de aplicações web e mobile
              </Text>
            </figcaption>
          </Figure>
          <Figure className="px-4">
            <Lottie
              animationData={animationPadronizacaoDocumentacaoFrontEnd}
              loop={true}
              style={{ width: 192, height: 128 }}
            />
            <figcaption className="flex w-[256px] flex-col gap-1">
              <Label className="text-center">Documentação</Label>
              <Text className="text-center">
                Documentação de aplicações web utilizando tecnologias como
                Storybook e Markdown
              </Text>
            </figcaption>
          </Figure>
        </div>
      </Card>
    </Content>
  );
}
