import { ReactNode } from "react";
import clsx from "clsx";

import "../../styles/global.css";

export interface TextProps {
    size?: string,
    children: ReactNode,
    className?: string
}

export function Text({ size="md", children, className }: TextProps) {
    return (
        <p
            className={clsx(
                "font-sans font-normal",
                {
                    "text-lg": size === "lg",
                    "text-md": size === "md",
                    "text-sm": size === "sm"
                },
                className
            )}
        >
            { children }
        </p>
    );
}