import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ContentProps = ComponentProps<'main'>

export function Content({ children, className, ...props }: ContentProps) {
  return (
    <main
      className={twMerge(
        'fixed top-0 h-screen w-screen overflow-auto scroll-smooth',
        className,
      )}
      {...props}
    >
      {children}
    </main>
  )
}
