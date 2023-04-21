import { ReactNode } from "react";
import clsx from "clsx";

import "../../styles/global.css";

export interface LabelProps {
    size?: string,
    children: ReactNode,
    className?: string
}

export function Label({ size="md", children, className }: LabelProps) {
    return (
        <h1
            className={clsx(
                "font-sans font-semibold",
                {
                    "text-xl": size === "lg",
                    "text-lg": size === "md",
                    "text-md": size === "sm"
                },
                className
            )}
        >
            { children }
        </h1>
    );
}