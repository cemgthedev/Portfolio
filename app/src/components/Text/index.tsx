import clsx from 'clsx';
import { ReactNode } from 'react';

import '../../styles/global.css';

export interface TextProps {
    size?: 'lg' | 'md' | 'sm',
    children: ReactNode,
    className?: string
}

export function Text({size = 'md', children, className}: TextProps) {
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