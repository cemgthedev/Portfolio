'use client'
import { BannerTitle } from '@/components/BannerTitle'
import { Card } from '@/components/Card'
import { CustomLink } from '@/components/CustomLink'
import { Figure } from '@/components/Figure'
import { Label } from '@/components/Label'
import { Text } from '@/components/Text'

import {
  IconAddressBook,
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconScroll,
  IconWhatsapp
} from '@/assets/icons'
import { contacts } from '@/model/profile'
import Image from 'next/image'
export default function Home() {
  return (
    <Card className="min-h-screen w-screen bg-zinc-950 p-4 text-white sm:p-8">
      <aside className="flex w-full py-4">
        <Figure className="m-auto animate-top opacity-0">
          <BannerTitle
            mainText="Eu sou"
            listOfText={[
              'Desenvolvedor Front End', 
              2000, 
              'Universitário',
              2000
            ]}
            className="uppercase text-violet-500"
          />
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
              Desenvolvo o front end de aplicações web e mobile tendo domínio de UI/UX Design
              na criação de protótipos, implementação e manutenção utilizando tecnologias como Figma,
              React, React Native, Tailwindcss e TypeScript.
            </Text>
          </figcaption>
          <div className="flex w-fit gap-4">
            <CustomLink
              href="/portfolio"
              rounded="full"
              className="animate-right opacity-0 px-3 py-2"
            >
              <IconAddressBook size={28} />
              <Label>Portfólio</Label>
            </CustomLink>
            <CustomLink
              href="/curriculo"
              rounded="full"
              style="secundary"
              className="animate-left opacity-0 px-3 py-2"
            >
              <IconScroll size={28} />
              <Label>Currículo</Label>
            </CustomLink>
          </div>
        </Figure>
        <div className="ml-auto flex flex-col gap-2">
          <CustomLink
            href={`https://github.com/${contacts.github}`}
            next={false}
            className="animate-surgir opacity-0 h-[32px] w-[32px]"
          >
            <IconGithub size={28} />
          </CustomLink>
          <CustomLink
            href={`https://www.linkedin.com/in/${contacts.linkedin}`}
            next={false}
            className="animate-surgirtwo opacity-0 h-[32px] w-[32px]"
          >
            <IconLinkedin size={28} />
          </CustomLink>
          <CustomLink
            href={`mailto:${contacts.email}`}
            next={false}
            className="animate-surgirthree opacity-0 h-[32px] w-[32px]"
          >
            <IconEmail size={28} />
          </CustomLink>
          <CustomLink
            href={`http://api.whatsapp.com/send?phone=${contacts.whatsapp}`}
            next={false}
            className="animate-surgirfour opacity-0 h-[32px] w-[32px]"
          >
            <IconWhatsapp size={28} />
          </CustomLink>
        </div>
      </aside>
    </Card>
  )
}
