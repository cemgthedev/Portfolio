import "../../styles/global.css";

import { Heading } from "../Heading";
import { Label } from "../Label";
import { Text } from "../Text";

export interface FooterProps {
    title: string,
    terms: string,
    message: string
}

export function Footer({ title, terms, message }: FooterProps) {
    return (
        <footer
            className="
                snap-start
                h-screen
                max-w-screen
                gradient-black
                flex
                items-center
                justify-center
                gap-4
                p-4
            "
        >
            <figure
                className="
                    flex
                    items-center
                    justify-center
                    relative
                "
            >
                <img 
                    src="/Portfolio/assets/icons/ReactFooter.svg" 
                    alt="" 
                    className="
                        absolute
                        animate-rotation
                    "
                />
                <figcaption
                    className="
                        text-center
                        text-white
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-4
                    "
                >
                    <Heading>{title}</Heading>
                    <Label>{terms}</Label>
                    <Text>{message}</Text>
                </figcaption>
            </figure>
        </footer>
    );
}