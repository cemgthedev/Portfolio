import { TypeAnimation } from 'react-type-animation';

import "../../styles/global.css";
import { Label } from "../../components/Label";
import { Text } from '../../components/Text';

export function LandingPage() {
    return (
        <div
            className="
                bg-neutral-900
                p-4
                max-w-screen
                min-h-screen
                flex
                flex-col
                justify-center
                items-center
                max-sm:justify-start
            "
        >
            <div
                className="
                    min-h-[96px]
                    font-sans
                    text-2xl
                    max-sm:text-lg
                    text-white
                    font-bold 
                    flex 
                    flex-col 
                    items-center
                    animate-bottom
                "
            >
                <span>
                    Eu sou&nbsp;
                </span>
                <TypeAnimation
                    sequence={[
                    "Desenvolvedor Front End",
                    2000,
                    "Universitário",
                    2000
                    ]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                    className='text-purple-500 uppercase'
                />
            </div>
            <div
                className="
                    flex
                    w-full
                    items-center
                    gap-4
                    px-4
                "
            >
                <figure
                    className="
                        m-auto
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-4
                    "
                >
                    <div
                        className="
                            flex
                            justify-center
                            w-[196px]
                            h-[196px]
                            relative
                            animate-top
                        "
                    >
                        <img 
                            src="/assets/profile/banner/ImageProfile.svg"
                            alt="" 
                            className="
                                z-[3] 
                                absolute 
                                bottom-0
                            "
                        />
                        <img 
                            src="/assets/profile/banner/Blob.svg" 
                            alt="" 
                            className="
                                z-[2] 
                                absolute 
                                top-0
                            "
                        />
                        <img 
                            src="/assets/profile/banner/Blob.svg" 
                            alt="" 
                            className="
                                z-[1] 
                                absolute 
                                top-0 
                                blur-sm
                            "
                        />
                    </div>
                    <figcaption
                        className="
                            text-white
                            text-center
                            min-h-[196px]
                            w-[70vw]
                            flex
                            flex-col
                            gap-1
                        "
                    >
                        <Text>
                            <TypeAnimation
                                sequence={[
                                    1000,
                                    "Olá, me chamo Carlos Eduardo de Moura Gomes."
                                ]}
                                speed={40}
                                repeat={0}
                                cursor={false}
                            />
                        </Text>
                        <Text>
                            <TypeAnimation
                                sequence={[
                                    4500,
                                "Atualmente minha experiência está fundamentada apenas em projetos pessoais nos quais busco aplicar todos os meus conhecimentos."
                                ]}
                                speed={40}
                                repeat={0}
                                cursor={false}
                            />
                        </Text>
                        <Text>
                            <TypeAnimation
                                sequence={[
                                    13000,
                                "Planejo dominar inicialmente tecnologias relacionadas a Front End e UI/UX Design e futuramente tecnologias relacionadas a Back End."
                                ]}
                                speed={40}
                                repeat={0}
                                cursor={false}
                            />
                        </Text>
                        <div
                            className="
                                mt-auto
                                flex
                                items-center
                                justify-center
                                gap-2
                                p-2
                                opacity-0
                                animate-unlock
                            "
                        >
                            <a 
                                href="/portfolio"
                                className="
                                    p-2
                                    rounded-full
                                    transition
                                    bg-purple-600
                                    hover:bg-purple-500
                                "
                            >
                                <Label size="sm">Portfólio</Label>
                            </a>
                            <a 
                                href="/curriculo"
                                className="
                                    p-2
                                    rounded-full
                                    transition
                                    bg-cyan-600
                                    hover:bg-cyan-500
                                "
                            >
                                <Label size="sm">Currículo</Label>
                            </a>
                        </div>
                    </figcaption>
                </figure>
                <div
                    className="
                        ml-auto
                        max-sm:mb-auto
                        flex
                        flex-col
                        gap-2
                        animate-left
                    "
                >
                    <a 
                        href="https://github.com/cemgthedev"
                        target="_blank"
                        className="btn-primary"
                    >
                        <img src="/assets/icons/GithubLogo.svg" alt="" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/"
                        target="_blank"
                        className="btn-primary"
                    >
                        <img src="/assets/icons/LinkedinLogo.svg" alt="" />
                    </a>
                    <a 
                        href="https://www.instagram.com/cemg.the.dev/"
                        target="_blank"
                        className="btn-primary"
                    >
                        <img src="/assets/icons/InstagramLogo.svg" alt="" />
                    </a>
                    <a 
                        href="mailto:cemg.the.dev@gmail.com"
                        target="_blank"
                        className="
                            btn-primary
                        "
                    >
                        <img src="/assets/icons/Envelope.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}