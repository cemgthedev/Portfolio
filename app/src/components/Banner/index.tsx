import clsx from 'clsx';
import { ReactNode } from 'react';
import '../../styles/global.css'

export interface BannerProps {
    id: string,
    children: ReactNode,
    className?: string
}

export function Banner({ id, children, className }: BannerProps) {
    return (
        <figure
            id={ id }
            className={clsx(
                `
                font-inter
                w-screen
                min-h-screen
                flex
                flex-col
                items-center
                justify-center
                gap-2
                pt-4
                pb-8
                px-8
                bg-neutral-900
                text-white
                `
            )}
        >
            {
                children
            }
        </figure>
    );
}