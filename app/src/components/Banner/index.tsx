import { ReactNode } from 'react';
import '../../styles/global.css'

export interface BannerProps {
    id: string,
    children: ReactNode
}

export function Banner({ id, children }: BannerProps) {
    return (
        <figure
            id={ id }
            className='
                font-inter
                w-screen
                h-screen
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
            '
        >
            {
                children
            }
        </figure>
    );
}