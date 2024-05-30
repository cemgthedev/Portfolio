import Link from 'next/link'
import { ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const CustomLinkVariants = tv({
  base: 'flex gap-2 items-center justify-center p-1 w-fit h-fit',
  variants: {
    style: {
      primary: 'bg-violet-500 text-white hover:bg-violet-300',
      secundary: 'bg-cyan-500 text-white hover:bg-cyan-300',
      black: 'bg-zinc-950 text-white hover:bg-zinc-800',
    },
    rounded: {
      default: 'rounded-lg',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    style: 'primary',
    rounded: 'default',
  },
})

export type CustomLinkProps = VariantProps<typeof CustomLinkVariants> & {
  children: ReactNode
  href: string
  next?: boolean
  className?: string
}

export function CustomLink({
  children,
  href = '/',
  style = 'primary',
  rounded = 'default',
  next = true,
  className,
}: CustomLinkProps) {
  const Component = next ? Link : 'a'

  return (
    <Component
      target={Component === 'a' ? '_blank' : ''}
      href={href}
      className={CustomLinkVariants({ style, rounded, className })}
    >
      {children}
    </Component>
  )
}
