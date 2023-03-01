import clsx from 'clsx';
import { ReactNode } from "react";


export interface HeaderProps {
    children:ReactNode,
    className?:string
}

export function Header({children, className}: HeaderProps) {
    return (
        <header
            className={clsx('w-full flex gap-2 justify-center items-center',
                className
            )}
        >
            { children }
        </header>
    );
}