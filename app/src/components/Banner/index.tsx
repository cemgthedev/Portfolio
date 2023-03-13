import { ReactNode } from 'react';
import '../../styles/global.css'

export interface BannerProps {
    children: ReactNode
}

export function Banner({ children }: BannerProps) {
    return (
        <figure
            className='
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