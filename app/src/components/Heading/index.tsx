import clsx from 'clsx';
import { ReactNode } from 'react';

import '../../styles/global.css';

export interface HeadingProps {
    size?: 'lg' | 'md' | 'sm',
    children: ReactNode,
    className?: string
}

export function Heading({size = 'lg', children, className}: HeadingProps) {
    return (
        <h1
            className={clsx(
                'w-full text-left font-bold',
                {
                    'text-2xl': size === 'lg',
                    'text-xl': size === 'md',
                    'text-lg': size === 'sm'
                }, className)
            }
        >
            {children}
        </h1>
    );
}