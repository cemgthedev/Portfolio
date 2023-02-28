import clsx from 'clsx';
import { ReactNode } from "react";

export interface CardProps {
    color?: 'ligth' | 'dark',
    margin?: boolean,
    className?: string,
    children: ReactNode,
}

export function Card({color, margin, className, children}: CardProps) {
    return (
        <div
            className={clsx('flex flex-col gap-4 items-center',
                {
                    'bg-white': color === 'ligth',
                    'bg-neutral-900': color === 'dark'
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