import clsx from 'clsx';
import { ReactNode } from "react";


export interface HeaderProps {
    children:ReactNode,
    className?:string
}

export function Header({children, className}: HeaderProps) {
    return (
        <header
            className={clsx(`bg-neutral-900 
                           text-white 
                            w-full 
                            flex 
                            justify-center 
                            items-center 
                            border-b-2 
                            border-b-white
                            sticky
                            top-0
                            z-[999]`,
                className
            )}
        >
            { children }
        </header>
    );
}