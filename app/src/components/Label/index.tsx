import clsx from 'clsx';
import { ReactNode } from 'react';

import '../../styles/global.css';

export interface LabelProps {
    size?: 'lg' | 'md' | 'sm',
    children: ReactNode,
    className?: string
}

export function Label({size = 'md', children, className}: LabelProps) {
    return (
        <h1
            className={clsx(
                'w-full text-left font-semibold',
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