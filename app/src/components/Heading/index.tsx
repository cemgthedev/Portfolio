import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const HeadingVariants = tv({
  base: 'font-bold',
  variants: {
    size: {
      lg: 'text-3xl',
      md: 'text-2xl',
      sm: 'text-xl',
      xs: 'text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = ComponentProps<'h1'> &
  VariantProps<typeof HeadingVariants>

export function Heading({
  children,
  className,
  size = 'md',
  ...props
}: HeadingProps) {
  return (
    <h1 className={HeadingVariants({ size, className })} {...props}>
      {children}
    </h1>
  )
}
