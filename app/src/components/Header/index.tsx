import {
  IconCertificate,
  IconHome,
  IconStack,
  IconStudent,
} from '@/assets/icons'
import Link from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type HeaderProps = ComponentProps<'header'>

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={twMerge(
        'sticky top-0 z-[999] flex items-center justify-center p-4',
        className,
      )}
      {...props}
    >
      <nav className="flex gap-2">
        <Link href="/" className="p-2">
          <IconHome size={32} className="navoption" />
        </Link>
        <a href="#formacao" className="p-2">
          <IconStudent size={32} className="navoption" />
        </a>
        <a href="#stack" className="p-2">
          <IconStack size={32} className="navoption" />
        </a>
        <a href="#certificados" className="p-2">
          <IconCertificate size={32} className="navoption" />
        </a>
      </nav>
    </header>
  )
}
