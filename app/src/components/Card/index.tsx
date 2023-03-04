import clsx from 'clsx';
import { ReactNode } from "react";

export interface CardProps {
    id?: string,
    style?: 'ligth' | 'dark',
    margin?: string,
    column?: boolean,
    className?: string,
    children: ReactNode,
}

export function Card({id, style, column = false, margin = 'none', className, children}: CardProps) {
    return (
        <div
            id = { id }
            className={clsx('w-full flex gap-4 p-4 h-fit mobile:max-sm:flex-col',
                {
                    'bg-white text-neutral-900': style === 'ligth',
                    'bg-neutral-900 text-white shadow-sm shadow-black': style === 'dark'
                },
                {
                    'flex-col': column === true
                },
                {
                    'm-0': margin === 'none',
                    'm-4': margin === 'all',
                    'ml-4 mr-4': margin === 'horizontal',
                    'mt-4 mb-4': margin === 'vertical'
                },
                className)
            }
        >
            {children}
        </div>
    );
}