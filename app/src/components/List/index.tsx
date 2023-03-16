import '../../styles/global.css'

import { ReactNode } from 'react'

export interface ListProps {
    children: ReactNode
}

export function List({ children }: ListProps) {
    return (
        <div
            className='
                flex
                gap-2
                items-center
                justify-center
                flex-wrap
            '
        >
            {
                children
            }
        </div>
    );
}