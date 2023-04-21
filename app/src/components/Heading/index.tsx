import { ReactNode } from "react";
import clsx from "clsx";

import "../../styles/global.css";

export interface HeadingProps {
    size?: string,
    children: ReactNode,
    className?: string
}

export function Heading({ size="md", children, className }: HeadingProps) {
    return (
        <h1
            className={clsx(
                "font-sans font-bold",
                {
                    "text-2xl": size === "lg",
                    "text-xl": size === "md",
                    "text-lg": size === "sm",
                },
                className
            )}
        >
            { children }
        </h1>
    );
}