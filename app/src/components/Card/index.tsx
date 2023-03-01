import clsx from 'clsx';
import { ReactNode } from "react";

export interface CardProps {
    style?: 'ligth' | 'dark',
    margin?: boolean,
    column?: boolean,
    className?: string,
    children: ReactNode,
}

export function Card({style, column = false, margin = false, className, children}: CardProps) {
    return (
        <div
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
                className)
            }
        >
            {children}
        </div>
    );
}