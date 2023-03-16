import clsx from 'clsx';
import { ReactNode } from 'react'
import '../../styles/global.css'

export interface CardProps {
    id?: string,
    children: ReactNode,
    className?: string
}

export function Card({ id, children, className }: CardProps) {
    return (
        <div
            id={ id }
            className={clsx(
                `
                font-inter
                p-16 
                w-screen 
                min-h-[150vh] 
                flex
                flex-col
                items-center
                gap-2
                `,
                className
            )}
        >
            { children }
        </div>
    );
}