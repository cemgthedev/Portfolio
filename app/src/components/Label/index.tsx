import clsx from 'clsx';
import { ReactNode } from 'react';

import '../../styles/global.css';

export interface LabelProps {
    link?: boolean,
    href?: string,
    size?: 'lg' | 'md' | 'sm',
    children: ReactNode,
    className?: string
}

export function Label({link = false, href, size = 'md', children, className}: LabelProps) {
    const Component = link ? 'a' : 'h1';

    return (
        <Component
            href={ href }
            className={clsx(
                'font-semibold',
                {
                    'w-full text-left': Component === 'h1',
                    'p-4 text-center hover:text-sky-500': Component === 'a'
                },
                {
                    'text-[20px]': size === 'lg',
                    'text-[16px]': size === 'md',
                    'text-[12px]': size === 'sm'
                }, className)
            }
        >
            {children}
        </Component>
    );
}