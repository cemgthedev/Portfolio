import clsx from 'clsx';
import { ReactNode } from 'react';
import '../../styles/global.css';

export interface ButtonProps {
    children: ReactNode,
    className?: string
}

export function Button({children, className}: ButtonProps) {
    return (
        <button
          className={clsx(
            'w-full flex items-center justify-center p-2',
            className
          )}
        >
            { children }
        </button>
    );
}

