'use client'
import animationPadronizacaoDocumentacaoFrontEnd from '@/assets/animations/AnimationPadronizacaoDocumentacaoFrontEnd.json'
import animationTrabalhoEmEquipe from '@/assets/animations/AnimationTrabalhoEmEquipe.json'
import animationUIDesign from '@/assets/animations/AnimationUIDesign.json'
import { IconCalendar, IconCertificate, IconLink } from '@/assets/icons'
import { Card } from '@/components/Card'
import { Content } from '@/components/Content'
import { CustomLink } from '@/components/CustomLink'
import { Figure } from '@/components/Figure'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Label } from '@/components/Label'
import { Text } from '@/components/Text'
import { certificates, experiences, stack } from '@/model/profile'
import Lottie from 'lottie-react'
import Image from 'next/image'

export default function Curriculo() {
  return (
    <Content className="snap-y snap-mandatory text-zinc-950 scrollbar-hide">
      <Header />
      <Card
        id="formacao"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
      >
        <Heading>Formação</Heading>
        <Text className='indent-4'>
          Estou completando o Ensino Superior na Universidade Federal do Ceará e já tive diversos aprendizados como
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>Estrutura de Dados Avançadas</span>e
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>Engenharia de Software</span>além de cadeiras optativas derivadas.
          Também fiz diversas cadeiras de programação como
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>Programação Orientada a Objetos</span>,
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>Desenvolvimento de Software para Web</span>e
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>Desenvolvimento de Software para Dispositivos Móveis</span>.
        </Text>
        <Figure className="m-auto flex flex-col items-center justify-center">
          <Image
            width={128}
            height={176}
            src="/assets/profile/training/UFC.svg"
            alt="..."
            loading="lazy"
          />
          <figcaption className="text-center">
            <Heading>Universidade Federal do Ceará - Campus de Quixadá</Heading>
            <Label size="lg">Ciência da Computação</Label>
            <Text> 2019 - Atual</Text>
          </figcaption>
        </Figure>
      </Card>
      <Card
        id="experiencias"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
      >
        <Heading>Experiências</Heading>
        <Text className='indent-4'>
          Tenho
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>2 anos</span> de experiência com desenvolvimento
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>Front-end</span> e
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>Mobile</span>. Já atuei na implementação de aplicações web e mobile e também manutenção para
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>estilização</span>,
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>responsividade</span> e 
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>redesigns</span>.
        </Text>
        <div className="w-full flex flex-col items-center gap-4">
          {
            experiences.map((experience) => (
              <div key={Math.random()} className="w-1/2 max-md:w-3/5 max-sm:w-full rounded-lg border-2 border-zinc-950 p-6 shadow-default">
                <div className='flex items-center gap-2'>
                  <IconCalendar size={24} className="min-h-[28px] min-w-[28px]" />
                  <Label size="lg">{experience.name}</Label>
                </div>
                <ul className='list-disc list-inside mx-4'>
                  {
                    experience.details.map((detail) => (
                      <li key={Math.random()}><Text className='inline'>{detail}</Text></li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </Card>
      <Card
        id="stack"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Stack</Heading>
        <Text className='indent-4'>
          Esta é minha Stack de desenvolvimento
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>Front-end</span>e
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>Mobile</span>.
          Estou em constante aprendizado e prática dessas tecnologias, sempre disposto a novas
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>experiências</span> e
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>práticas</span>.
        </Text>
        <div className="w-full flex justify-center gap-4 max-sm:flex-col max-sm:justify-start">
          <fieldset className='w-full flex flex-wrap justify-center gap-4 border-2 border-collapse rounded-lg'>
            <legend className='bg-zinc-950 p-2 ml-4 text-white'>Front-end</legend>
            {stack.filter((item) => item.type === 'front-end').map((item) => (
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
                  <Label className='line-clamp-1'>{item.name}</Label>
                </figcaption>
              </Figure>
            ))}
          </fieldset>
          <fieldset className='w-full flex flex-wrap justify-center gap-4 border-2 border-collapse rounded-lg'>
            <legend className='bg-zinc-950 p-2 ml-4 text-white'>Mobile</legend>
            {stack.filter((item) => item.type === 'mobile').map((item) => (
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
                  <Label className='line-clamp-1'>{item.name}</Label>
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
      >
        <Heading>Certificados</Heading>
        <Text className='indent-4'>
          Já foram
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>{certificates.length}</span>
          certificados concluídos totalizando
          <span className='px-1 font-semibold text-violet-800 animate-pulse'>185</span>
          horas aprendendo novas tecnologias e aprimorando habilidades.
        </Text>
        <div className="flex w-full flex-wrap overflow-auto p-2 scrollbar-hide max-md:flex-col max-md:items-center">
          {certificates.map((item) => (
            <Figure
              key={Math.random()}
              className="max-h-[200px] w-[312px] max-md:min-h-[200px] max-md:w-[312px] gap-0"
            >
              <div className="flex w-full items-center">
                <div className="flex items-center justify-center rounded-full p-2 border-2 border-cyan-500">
                  <IconCertificate size={32} className="min-h-[28px] min-w-[28px]" />
                </div>
                <div className="h-[2px] w-full bg-cyan-500"></div>
              </div>
              <figcaption className="flex w-full flex-col gap-1 px-6 pt-1 pb-3">
                <Label size="lg">{item.institution}</Label>
                <Label className="max-h-[32px] w-full overflow-hidden truncate">
                  {item.name}
                </Label>
                <CustomLink
                  href={item.ImageUrl}
                  className="w-full gap-1 px-3 py-2"
                  style="black"
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
        <Text className='indent-4'>
          Estes são os meus diferenciais no desenvolvimento
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>Front-end</span> e 
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>Mobile</span>.
        </Text>
        <div className="w-full flex flex-wrap justify-center gap-2 overflow-auto p-2 scrollbar-hide">
          <Figure className='px-4'>
            <Lottie animationData={animationTrabalhoEmEquipe} loop={true} style={{width: 160, height: 128}} />
            <figcaption className='w-[256px] flex flex-col gap-1'>
              <Label className='text-center'>Trabalho em Equipe</Label>
              <Text className='text-center'>Experiência trabalhando junto a desenvolvedores back end e designers</Text>
            </figcaption>
          </Figure>
          <Figure className='px-4'>
            <Lottie animationData={animationUIDesign} loop={true} style={{width: 128, height: 128}} />
            <figcaption className='w-[256px] flex flex-col gap-1'>
              <Label className='text-center'>UI Design</Label>
              <Text className='text-center'>User Interface Design na prototipagem de aplicações web e mobile</Text>
            </figcaption>
          </Figure>
          <Figure className='px-4'>
            <Lottie animationData={animationPadronizacaoDocumentacaoFrontEnd} loop={true} style={{width: 192, height: 128}} />
            <figcaption className='w-[256px] flex flex-col gap-1'>
              <Label className='text-center'>Documentação</Label>
              <Text className='text-center'>Documentação de aplicações web utilizando tecnologias como Storybook e Markdown</Text>
            </figcaption>
          </Figure>
        </div>
      </Card>
    </Content>
  )
}
