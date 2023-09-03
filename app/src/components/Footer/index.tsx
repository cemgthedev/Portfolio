import { Heading } from '@/components/Heading'
import { Label } from '@/components/Label'
import { Text } from '@/components/Text'
import Image from 'next/image'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type FooterProps = ComponentProps<'footer'> & {
  title: string
  terms: string
  message: string
  className?: string
}

export function Footer({
  title,
  terms,
  message,
  className,
  ...props
}: FooterProps) {
  return (
    <footer
      className={twMerge(
        'flex items-center justify-center gap-4 bg-zinc-950 text-white',
        className,
      )}
      {...props}
    >
      <figure className="relative flex items-center justify-center">
        <Image
          width={200}
          height={200}
          src="/assets/icons/React.svg"
          alt=""
          className="absolute animate-rotation"
        />
        <figcaption className=" flex flex-col items-center justify-center gap-4 text-center text-white">
          <Heading size="lg">{title}</Heading>
          <Label size="lg">{terms}</Label>
          <Text>{message}</Text>
        </figcaption>
      </figure>
    </footer>
  )
}
