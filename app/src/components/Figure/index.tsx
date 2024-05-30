import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const FigureVariants = tv({
  base: 'flex h-fit w-fit items-center justify-center gap-2',
  variants: {
    flexible: {
      false: 'flex-col',
      true: 'md:flex-col',
    },
  },
  defaultVariants: {
    flexible: false,
  },
})

export type FigureProps = ComponentProps<'figure'> &
  VariantProps<typeof FigureVariants>

export function Figure({
  children,
  flexible = false,
  className,
  ...props
}: FigureProps) {
  return (
    <figure className={FigureVariants({ flexible, className })} {...props}>
      {children}
    </figure>
  )
}
