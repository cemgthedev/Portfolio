import { ReactNode } from "react";

import "../../styles/global.css";

export interface CarouselProps {
    children: ReactNode
}

export function Carousel({ children }: CarouselProps) {
    return (
        <div
            className="
                max-h-screen
                carousel-vertical
                snap-mandatory
                snap-y
                scrollbar-hide
            "
        >
            { children }
        </div>
    );
}