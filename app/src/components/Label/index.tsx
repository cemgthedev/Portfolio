import { ComponentProps } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

export const LabelVariants = tv({
  base: 'font-semibold',
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

export type LabelProps = ComponentProps<'h1'> &
  VariantProps<typeof LabelVariants>

export function Label({
  children,
  className,
  size = 'md',
  ...props
}: LabelProps) {
  return (
    <h1 className={LabelVariants({ size, className })} {...props}>
      {children}
    </h1>
  )
}
