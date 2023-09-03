'use client'
import { Figure } from '@/components/Figure'
import { Heading } from '@/components/Heading'
import { Label } from '@/components/Label'
import { Text } from '@/components/Text'
import { Card } from '@/components/Card'
import { CustomLink } from '@/components/CustomLink'
import Image from 'next/image'
import { IconGithub, IconRocket } from '@/assets/icons'
import { Footer } from '@/components/Footer'
import { Content } from '@/components/Content'

export default function Portfolio() {
  return (
    <Content className="h-screen w-screen snap-y snap-mandatory scrollbar-hide">
      <Card className="h-screen w-screen snap-start p-4 sm:p-8" dark>
        <Heading size="lg">Github Stalker</Heading>
        <Figure>
          <Image
            src={'/assets/profile/projects/GithubStalker.svg'}
            alt="..."
            width={500}
            height={500}
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
            <div className="flex items-center justify-center gap-2">
              <CustomLink
                href={'https://github.com/cemgthedev/GitHub-Stalker'}
                next={false}
                rounded="full"
                className="px-8"
              >
                <IconGithub size={32} />
                <Label>Github</Label>
              </CustomLink>
              <CustomLink
                href={'https://bit.ly/github-stalker'}
                next={false}
                style="secundary"
                rounded="full"
                className="px-8"
              >
                <IconRocket size={32} />
                <Label>Site</Label>
              </CustomLink>
            </div>
          </figcaption>
        </Figure>
      </Card>
      <Footer
        title={'Portfólio'}
        terms={'Copyright (c) 2023 Carlos Eduardo de Moura Gomes'}
        message={'Se você chegou até aqui obrigado pela atenção'}
        className="h-screen w-screen snap-start"
      />
    </Content>
  )
}
