import clsx from 'clsx';
import { ReactNode } from "react";

export interface CardProps {
    id?: string,
    style?: 'ligth' | 'dark',
    margin?: string,
    padding?: string,
    column?: boolean,
    className?: string,
    children: ReactNode,
}

export function Card({id, style, column = false, margin = 'none', padding = 'none', className, children}: CardProps) {
    return (
        <div
            id = { id }
            className={clsx('select-none flex gap-4 h-fit mobile:max-sm:flex-col',
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
                {
                    'p-0': padding === 'none',
                    'p-4': padding === 'all',
                    'pl-4 pr-4': padding === 'horizontal',
                    'pt-4 pb-4': padding === 'vertical'
                },
                className)
            }
        >
            {children}
        </div>
    );
}