import clsx from 'clsx';
import { ReactNode } from 'react';

import '../../styles/global.css';

export interface HeadingProps {
    size?: 'lg' | 'md' | 'sm',
    children: ReactNode,
    className?: string
}

export function Heading({size = 'md', children, className}: HeadingProps) {
    return (
        <h1
            className={clsx(
                'w-full text-left font-bold',
                {
                    'text-3xl': size === 'lg',
                    'text-2xl': size === 'md',
                    'text-xl': size === 'sm'
                }, className)
            }
        >
            {children}
        </h1>
    );
}