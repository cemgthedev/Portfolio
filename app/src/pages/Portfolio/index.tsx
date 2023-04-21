import "../../styles/global.css";

import { Carousel } from "../../components/Carousel";
import { Footer } from "../../components/Footer";
import { Heading } from "../../components/Heading";
import { Label } from "../../components/Label";
import { Text } from "../../components/Text";

export function Portfolio() {
    return (
        <div>
            <Carousel>
                <div
                    className="
                        carousel-item 
                        px-4
                        gradient-black
                    "
                >
                    <figure
                        className="
                            figure
                            snap-end
                        "
                    >
                        <Heading 
                            size="lg"
                            className="
                                text-white
                            "
                        >
                            GitHub Stalker
                        </Heading>
                        <img 
                            src="/Portfolio/assets/profile/projects/github-stalker.svg" 
                            alt="" 
                            className="
                                rounded-2xl
                            "
                        />
                        <figcaption
                            className="
                                text-white
                                text-center
                                flex
                                flex-col
                                gap-2
                            "
                        >
                            <Text>Uma aplicação web para você "stalkear" usuários do github</Text>
                            <div
                                className="
                                    flex
                                    gap-4
                                    justify-center
                                "
                            >
                                <a 
                                    href="https://github.com/cemgthedev/GitHub-Stalker"
                                    target="_blank"
                                    className="
                                        p-2
                                        flex
                                        items-center
                                        justify-center
                                        w-[96px]
                                        rounded-full
                                        transition
                                        bg-purple-600
                                        hover:bg-purple-500
                                    "
                                >
                                    <Label size="sm">GitHub</Label>
                                </a>
                                <a 
                                    href="https://github-stalker-gray.vercel.app/"
                                    target="_blank"
                                    className="
                                        p-2
                                        flex
                                        items-center
                                        justify-center
                                        w-[96px]
                                        rounded-full
                                        transition
                                        bg-cyan-600
                                        hover:bg-cyan-500
                                    "
                                >
                                    <Label size="sm">Site</Label>
                                </a>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </Carousel>
            <Footer 
                title="Portifólio" 
                terms="Copyright (c) 2023 Carlos Eduardo de Moura Gomes" 
                message="Se você chegou até aqui obrigado pela atenção"
            />
        </div>   
    );
}