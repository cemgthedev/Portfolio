import clsx from 'clsx';
import { ReactNode } from 'react'
import '../../styles/global.css'

export interface CardProps {
    id: string,
    children: ReactNode,
    className?: string
}

export function Card({ id, children, className }: CardProps) {
    return (
        <div
            id={ id }
            className={clsx(
                "p-16 w-screen h-screen",
                className
            )}
        >
            { children }
        </div>
    );
}