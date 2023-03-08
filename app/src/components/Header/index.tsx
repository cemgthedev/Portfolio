import clsx from 'clsx';
import { ReactNode } from "react";


export interface HeaderProps {
    id?: string,
    children:ReactNode,
    className?:string
}

export function Header({id, children, className}: HeaderProps) {
    return (
        <header
            id = { id }
            className={clsx(`bg-neutral-900 
                           text-white 
                            w-full 
                            flex 
                            justify-center 
                            items-center 
                            border-b-2 
                            border-b-white
                            sticky`,
                className
            )}
        >
            { children }
        </header>
    );
}