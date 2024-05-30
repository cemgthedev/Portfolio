'use client'
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
import Image from 'next/image'

export default function Curriculo() {
  return (
    <Content className="snap-y snap-mandatory text-zinc-950 scrollbar-hide">
      <Header />
      <Card
        id="formacao"
        className="h-screen w-screen snap-start px-8 py-[96px]"
        center={false}
      >
        <Heading>Formação</Heading>
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
        className="h-screen w-screen snap-start px-8 py-[96px]"
        center={false}
        dark
      >
        <Heading>Stack</Heading>
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
        <div className="mx-auto flex flex-wrap w-full overflow-auto p-2 gap-4 scrollbar-hide max-md:flex-col max-md:items-center">
          {certificates.map((item) => (
            <Figure
              key={Math.random()}
              className="max-h-[200px] w-[300px] max-md:min-h-[200px] max-md:w-[300px]"
            >
              <div className="flex w-full items-center">
                <div className="flex items-center justify-center rounded-full p-2 border-2 border-cyan-500">
                  <IconCertificate size={32} className="h-[32px] w-[32px]" />
                </div>
                <div className="h-[2px] w-full bg-cyan-500"></div>
              </div>
              <figcaption className="flex flex-col gap-1 w-full px-4">
                <Heading size="sm">{item.institution}</Heading>
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
    </Content>
  )
}
