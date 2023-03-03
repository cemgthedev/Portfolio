import clsx from 'clsx';
import { ReactNode } from "react";

export interface HorizontalListingProps {
    children: ReactNode,
    className?: string
}

export function HorizontalListing({children, className}: HorizontalListingProps) {
    return (
        <div
            className={clsx('p-4 w-full flex gap-4 overflow-x-auto select-none scrollbar-hide',
                className
            )}
        >
            { children }
        </div>
    );
}