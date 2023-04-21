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
                text-white
                text-center
                flex
                flex-col
                gap-4
                p-4
                items-center
                justify-center
            "
        >
            <Heading>{title}</Heading>
            <Label>{terms}</Label>
            <Text>{message}</Text>
        </footer>
    );
}