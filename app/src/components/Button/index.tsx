import clsx from 'clsx';
import { ReactNode } from 'react';
import '../../styles/global.css';

export interface ButtonProps {
    children: ReactNode,
    className?: string,
    onSubmit?: boolean
}

export function Button({children, className, onSubmit = false}: ButtonProps) {
    const typeName = onSubmit ? 'submit': 'button';

    return (
        <button
          type={typeName}
          className={clsx(
            'w-full flex items-center justify-center p-2',
            className
          )}
        >
            { children }
        </button>
    );
}

