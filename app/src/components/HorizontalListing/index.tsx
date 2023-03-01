import clsx from 'clsx';
import { ReactNode } from "react";

export interface HorizontalListingProps {
    children: ReactNode,
    className?: string
}

export function HorizontalListing({children, className}: HorizontalListingProps) {
    return (
        <div
            className={clsx('flex items-center gap-4',
                className
            )}
        >
            { children }
        </div>
    );
}