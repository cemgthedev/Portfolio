import { Heading } from '@/components/Heading'
import { TypeAnimation } from 'react-type-animation'

export type BannerTitleProps = {
  mainText: string
  listOfText: (string | number)[]
  className?: string
}

export function BannerTitle({
  mainText,
  listOfText,
  className,
}: BannerTitleProps) {
  return (
    <Heading className="h-[116px] animate-bottom text-center text-xl">
      <span className="w-[200px]">{mainText}&nbsp;</span>
      <br />
      <TypeAnimation
        sequence={listOfText}
        speed={50}
        wrapper="span"
        repeat={Infinity}
        className={className}
      />
    </Heading>
  )
}
