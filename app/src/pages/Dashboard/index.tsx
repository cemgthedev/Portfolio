import {
  IconAddressBook,
  IconEmail,
  IconGithub,
  IconLinkedin,
  IconScroll,
  IconWhatsapp,
} from "@/assets/icons";
import { BannerTitle } from "@/components/BannerTitle";
import { Card } from "@/components/Card";
import { CustomLink } from "@/components/CustomLink";
import { Figure } from "@/components/Figure";
import { Label } from "@/components/Label";
import { Text } from "@/components/Text";
import { contacts } from "@/mock/contacts";
import Image from "next/image";

export function DashboardPage() {
  return (
    <Card className="min-h-screen w-screen p-4 sm:p-8" dark>
      <aside className="flex w-full py-4">
        <Figure className="m-auto w-full animate-top gap-4 px-0 opacity-0">
          <BannerTitle
            mainText="Eu sou"
            listOfText={[
              "Desenvolvedor Front End",
              2000,
              "Desenvolvedor Mobile",
              2000,
            ]}
            className="uppercase text-violet-500"
          />
          <div className="relative flex h-[220px] w-[220px] items-center justify-center">
            <Image
              src="/assets/svgs/ImageProfile.svg"
              loading="lazy"
              width={200}
              height={200}
              alt="avatar"
              className="absolute bottom-0 z-[999]"
            />
            <Image
              src="/assets/svgs/Blob.svg"
              loading="lazy"
              width={220}
              height={220}
              alt="avatar"
              className="absolute top-0 z-[2]"
            />
            <Image
              src="/assets/svgs/Blob.svg"
              loading="lazy"
              width={220}
              height={220}
              alt="avatar"
              className="absolute top-0 z-[1] blur-sm"
            />
          </div>
          <figcaption className="flex w-[60vw] flex-col text-center max-md:w-[75vw]">
            <Text>Olá, me chamo Carlos Eduardo de Moura Gomes.</Text>
            <Text>
              Desenvolvedor de aplicações web e mobile com foco em UI Design e
              tecnologias como Figma, React, React Native e TypeScript.
            </Text>
          </figcaption>
          <div className="flex w-fit gap-4">
            <CustomLink
              href="/portfolio"
              rounded="full"
              shadow="secondary"
              className="animate-right px-6 py-2 opacity-0"
            >
              <IconAddressBook
                size={28}
                className="min-h-[28px] min-w-[28px]"
              />
              <Label>Portfólio</Label>
            </CustomLink>
            <CustomLink
              href="/curriculum"
              rounded="full"
              style="secondary"
              shadow="primary"
              className="animate-left px-6 py-2 opacity-0"
            >
              <IconScroll size={28} className="min-h-[28px] min-w-[28px]" />
              <Label>Currículo</Label>
            </CustomLink>
          </div>
        </Figure>
        <div className="ml-auto flex flex-col gap-2">
          <CustomLink
            href={`https://github.com/${contacts.github}`}
            next={false}
            className="h-[32px] w-[32px] animate-surgir opacity-0"
          >
            <IconGithub size={28} className="min-h-[28px] min-w-[28px]" />
          </CustomLink>
          <CustomLink
            href={`https://www.linkedin.com/in/${contacts.linkedin}`}
            next={false}
            className="h-[32px] w-[32px] animate-surgirtwo opacity-0"
          >
            <IconLinkedin size={28} className="min-h-[28px] min-w-[28px]" />
          </CustomLink>
          <CustomLink
            href={`mailto:${contacts.email}`}
            next={false}
            className="h-[32px] w-[32px] animate-surgirthree opacity-0"
          >
            <IconEmail size={28} className="min-h-[28px] min-w-[28px]" />
          </CustomLink>
          <CustomLink
            href={`http://api.whatsapp.com/send?phone=${contacts.whatsapp}`}
            next={false}
            className="h-[32px] w-[32px] animate-surgirfour opacity-0"
          >
            <IconWhatsapp size={28} className="min-h-[28px] min-w-[28px]" />
          </CustomLink>
        </div>
      </aside>
    </Card>
  );
}
