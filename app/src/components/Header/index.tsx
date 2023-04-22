import nextId from "react-id-generator";

import "../../styles/global.css";

import { Label } from "../Label";

export interface Link {
    title: string,
    href: string
}

export interface HeaderProps {
    hrefs: Link[]
}

export function Header({ hrefs }: HeaderProps) {
    return (
        <header
            className="
                bg-neutral-900
                text-white
                flex
                items-center
                justify-center
                p-4
                sticky
                top-0
                z-[999]
                animate-bottom
            "
        >
            <nav
                className="
                    flex
                    gap-4
                "
            >
                {
                    hrefs.map((item) => (
                        <a 
                            key={nextId()}
                            href={item.href}
                            type="button"
                        >
                            <Label>{item.title}</Label>
                        </a>
                    ))
                }
            </nav>
        </header>
    );
}