import { ReactNode } from "react";
import clsx from "clsx";

import "../../styles/global.css";

export interface CarouselProps {
    children: ReactNode,
    className?: string,
    orientation: string
}

export function Carousel({ children, orientation, className }: CarouselProps) {
    return (
        <div
            className={clsx(
                `
                max-h-screen
                scrollbar-hide
                snap-mandatory
                `,
                {
                    "carousel-vertical snap-y": orientation === "vertical",
                    "carousel snap-x": orientation === "horizontal"
                },
                className
            )}
        >
            { children }
        </div>
    );
}