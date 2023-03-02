import clsx from 'clsx';
import { ReactNode } from "react";

export interface CardProps {
    id?: string,
    style?: 'ligth' | 'dark',
    margin?: boolean,
    marginTop?: boolean,
    column?: boolean,
    className?: string,
    children: ReactNode,
}

export function Card({id, style, column = false, margin = false, marginTop, className, children}: CardProps) {
    return (
        <div
            id = { id }
            className={clsx('flex justify-center items-center gap-4 p-4 h-fit',
                {
                    'bg-white': style === 'ligth',
                    'bg-neutral-900': style === 'dark'
                },
                {
                    'flex-col': column === true
                },
                {
                    'm-0': margin === false,
                    'm-4': margin === true
                },
                {
                    'mt-0': marginTop === false,
                    'mt-4': marginTop === true
                },
                className)
            }
        >
            {children}
        </div>
    );
}