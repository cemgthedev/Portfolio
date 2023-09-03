import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const TextVariants = tv({
  base: 'font-normal',
  variants: {
    size: {
      lg: 'text-lg',
      md: 'text-md',
      sm: 'text-sm',
      xs: 'text-xs',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export type TextProps = ComponentProps<'p'> & VariantProps<typeof TextVariants>

export function Text({
  children,
  className,
  size = 'md',
  ...props
}: TextProps) {
  return (
    <h1 className={TextVariants({ size, className })} {...props}>
      {children}
    </h1>
  )
}
