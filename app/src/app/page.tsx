'use client'
import { BannerTitle } from '@/components/BannerTitle'
import { Figure } from '@/components/Figure'
import { Label } from '@/components/Label'
import { CustomLink } from '@/components/CustomLink'
import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

import Image from 'next/image'
import {
  IconAddressBook,
  IconEmail,
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconScroll,
} from '@/assets/icons'
export default function Home() {
  return (
    <Card className="min-h-screen w-screen bg-zinc-950 p-4 text-white sm:p-8">
      <BannerTitle
        mainText="Eu sou"
        listOfText={['Desenvolvedor Front End', 2000, 'Universitário', 2000]}
        className="uppercase text-violet-500"
      />
      <aside className="flex w-full gap-4 py-4 max-md:gap-2 max-md:py-2  sm:items-center">
        <Figure className="m-auto animate-top opacity-0">
          <div className="relative flex h-[220px] w-[220px] items-center justify-center">
            <Image
              src="/assets/svgs/ImageProfile.svg"
              width={200}
              height={200}
              alt="avatar"
              className="absolute bottom-0 z-[999]"
            />
            <Image
              src="/assets/svgs/Blob.svg"
              width={220}
              height={220}
              alt="avatar"
              className="absolute top-0 z-[2]"
            />
            <Image
              src="/assets/svgs/Blob.svg"
              width={220}
              height={220}
              alt="avatar"
              className="absolute top-0 z-[1] blur-sm"
            />
          </div>
          <figcaption className="flex w-[60vw] flex-col text-center max-md:w-[75vw]">
            <Text>Olá, me chamo Carlos Eduardo de Moura Gomes.</Text>
            <Text>
              Desenvolvo o front end de aplicação web e mobile tendo dominio de
              UI/UX Design na criação de protótipos, implementação e manutenção
              utilizando tecnologias como Figma, React, Tailwindcss, TypeScript
              e Jest. E prezo pelo código limpo através da aplicação dos
              conceitos SOLID e padronização com ferramentas como ESLint.
            </Text>
          </figcaption>
          <div className="flex w-fit gap-4">
            <CustomLink
              href="/portfolio"
              rounded="full"
              className="animate-right opacity-0"
            >
              <IconAddressBook size={32} />
              <Label>Portfólio</Label>
            </CustomLink>
            <CustomLink
              href="/curriculo"
              rounded="full"
              style="secundary"
              className="animate-left opacity-0"
            >
              <IconScroll size={32} />
              <Label>Currículo</Label>
            </CustomLink>
          </div>
        </Figure>
        <div className="ml-auto flex flex-col gap-2">
          <CustomLink
            href="https://github.com/cemgthedev"
            next={false}
            className="animate-surgir opacity-0 max-md:h-[40px] max-md:w-[40px]"
          >
            <IconGithub size={32} />
          </CustomLink>
          <CustomLink
            href="https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/"
            next={false}
            className="animate-surgirtwo opacity-0 max-md:h-[40px] max-md:w-[40px]"
          >
            <IconLinkedin size={32} />
          </CustomLink>
          <CustomLink
            href="https://www.instagram.com/cemg.the.dev/"
            next={false}
            className="animate-surgirthree opacity-0 max-md:h-[40px] max-md:w-[40px]"
          >
            <IconInstagram size={32} />
          </CustomLink>
          <CustomLink
            href="mailto:cemg.the.dev@gmail.com"
            next={false}
            className="animate-surgirfour opacity-0 max-md:h-[40px] max-md:w-[40px]"
          >
            <IconEmail size={32} />
          </CustomLink>
        </div>
      </aside>
    </Card>
  )
}
