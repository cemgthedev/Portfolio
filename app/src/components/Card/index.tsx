import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const CardVariants = tv({
  base: 'flex flex-col gap-2',
  variants: {
    center: {
      true: 'items-center justify-start sm:justify-center',
      false: 'items-start',
    },
    dark: {
      true: 'bg-zinc-950 text-white',
      false: 'bg-white text-zinc-950',
    },
  },
  defaultVariants: {
    center: true,
  },
})

export type CardProps = ComponentProps<'div'> &
  VariantProps<typeof CardVariants>

export function Card({
  children,
  center = true,
  dark = false,
  className,
  ...props
}: CardProps) {
  return (
    <div className={CardVariants({ className, center, dark })} {...props}>
      {children}
    </div>
  )
}
