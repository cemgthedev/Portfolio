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
                'w-full text-center font-normal',
                {
                    'text-[20px]': size === 'lg',
                    'text-[16px]': size === 'md',
                    'text-[12px]': size === 'sm'
                }, className)
            }
        >
            {children}
        </h1>
    );
}