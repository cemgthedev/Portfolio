import '../../styles/global.css'

import { ReactNode } from 'react'
import clsx from 'clsx';

export interface ListProps {
    children: ReactNode,
    className?: string
}

export function List({ children, className }: ListProps) {
    return (
        <div
            className={clsx(
                `w-full
                flex
                justify-center
                gap-4
                flex-wrap
                `,
                className
            )}
        >
            {
                children
            }
        </div>
    );
}