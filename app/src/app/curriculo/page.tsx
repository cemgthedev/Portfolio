'use client'
import animationCriacaoDeMarcaPessoal from '@/assets/animations/AnimationCriacaoDeMarca.json'
import animationDesenvolvimentoDoFrontEnd from '@/assets/animations/AnimationDesenvolvimentoDoFrontEnd.json'
import animationPadronizacaoDocumentacaoFrontEnd from '@/assets/animations/AnimationPadronizacaoDocumentacaoFrontEnd.json'
import animationUIDesign from '@/assets/animations/AnimationUIDesign.json'
import { IconCertificate, IconLink } from '@/assets/icons'
import { Card } from '@/components/Card'
import { Content } from '@/components/Content'
import { CustomLink } from '@/components/CustomLink'
import { Figure } from '@/components/Figure'
import { Header } from '@/components/Header'
import { Heading } from '@/components/Heading'
import { Label } from '@/components/Label'
import { Text } from '@/components/Text'
import { certificates, stack } from '@/model/profile'
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
          />
          <figcaption className="text-center">
            <Heading>Universidade Federal do Ceará - Campus de Quixadá</Heading>
            <Label size="lg">Ciência da Computação</Label>
            <Text> 2019 - Atual</Text>
          </figcaption>
        </Figure>
      </Card>
      <Card
        id="stack"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Stack</Heading>
        <Text className='indent-4'>
          Esta é minha Stack de
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>Front End</span>e aspirante a
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>UI/UX Design</span>. Depois de uma boa prototipagem com
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>Figma</span>parto para a implementação com
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>React</span>
          em conjunto com diversas outras tecnologias para desenvolver interfaces escaláveis, responsivas e casadas com a
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>usabilidade</span>.
        </Text>
        <div className="flex flex-wrap justify-center gap-2">
          {stack.map((item) => (
            <Figure key={Math.random()} className="w-[100px] py-2">
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
                <Label>{item.name}</Label>
              </figcaption>
            </Figure>
          ))}
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
          horas aprendendo novas tecnologias e aprimorando habilidades
        </Text>
        <div className="flex w-full flex-wrap gap-4 overflow-auto p-2 scrollbar-hide max-md:flex-col max-md:items-center">
          {certificates.map((item) => (
            <Figure
              key={Math.random()}
              className="max-h-[200px] w-[300px] max-md:min-h-[200px] max-md:w-[300px] gap-0"
            >
              <div className="flex w-full items-center">
                <div className="flex items-center justify-center rounded-full p-2 border-2 border-cyan-500">
                  <IconCertificate size={32} className="h-[32px] w-[32px]" />
                </div>
                <div className="h-[2px] w-full bg-cyan-500"></div>
              </div>
              <figcaption className="flex w-full flex-col gap-1 px-6">
                <Label size="lg">{item.institution}</Label>
                <Label className="max-h-[32px] w-full overflow-hidden truncate">
                  {item.name}
                </Label>
                <CustomLink
                  href={item.ImageUrl}
                  className="w-full"
                  style="black"
                  next={false}
                >
                  <IconLink size={32} />
                  <Text>visualizar</Text>
                </CustomLink>
              </figcaption>
            </Figure>
          ))}
        </div>
      </Card>
      <Card
        id="services"
        className="min-h-full w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Stack</Heading>
        <Text className='indent-4'>
          Estes são os serviços que posso ofereçer através da minha Stack com
          <span className='px-1 font-semibold text-cyan-400 animate-pulse'>Custo e Benefício</span>pensados no cliente.
        </Text>
        <div className="flex justify-center flex-wrap gap-4 overflow-auto scrollbar-hide py-4">
          <Figure className='px-16'>
            <Lottie animationData={animationCriacaoDeMarcaPessoal} loop={true} style={{width: 128, height: 128}} />
            <figcaption className='w-[256px] flex flex-col gap-1'>
              <Label className='text-center'>Criação de Marca Pessoal</Label>
              <Text className='text-center'>Criação de logos, vinhetas, publicações e conteúdo de alto impacto</Text>
            </figcaption>
          </Figure>
          <Figure className='px-16'>
            <Lottie animationData={animationUIDesign} loop={true} style={{width: 128, height: 128}} />
            <figcaption className='w-[256px] flex flex-col gap-1'>
              <Label className='text-center'>UI Design</Label>
              <Text className='text-center'>User Interface Design na criação e melhoria de Landing Pages e Web Sites</Text>
            </figcaption>
          </Figure>
          <Figure className='px-16'>
            <Lottie animationData={animationDesenvolvimentoDoFrontEnd} loop={true} style={{width: 128, height: 128}} />
            <figcaption className='w-[256px] flex flex-col gap-1'>
              <Label className='text-center'>Desenvolvimento do Front End</Label>
              <Text className='text-center'>Desenvolvimento do front end de aplicações web utilizando as tecnologias da Stack</Text>
            </figcaption>
          </Figure>
          <Figure className='px-16'>
            <Lottie animationData={animationPadronizacaoDocumentacaoFrontEnd} loop={true} style={{width: 128, height: 128}} />
            <figcaption className='w-[256px] flex flex-col gap-1'>
              <Label className='text-center'>Padronização e Documentação do Front End</Label>
              <Text className='text-center'>Implementação de Design System e documentação de aplicações web utilizando tecnologias da Stack como Storybook e ESLint</Text>
            </figcaption>
          </Figure>
        </div>
      </Card>
    </Content>
  )
}
