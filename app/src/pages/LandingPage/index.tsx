import { TypeAnimation } from 'react-type-animation';

import "../../styles/global.css";
import { Heading } from "../../components/Heading";
import { Text } from '../../components/Text';

export function LandingPage() {
    return (
        <div
            className="
                bg-neutral-900
                p-8
                w-screen
                min-h-screen
                flex
                flex-col
                justify-center
                items-center
            "
        >
            <div
                className="
                    min-h-[96px]
                    font-sans
                    text-2xl 
                    text-white
                    font-bold 
                    flex 
                    flex-col 
                    items-center
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
                    px-8
                    ring-1 ring-red-600
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
                        "
                    >
                        <img 
                            src="/Portfolio/assets/profile/banner/ImageProfile.svg"
                            alt="" 
                            className="
                                z-[3] 
                                absolute 
                                bottom-0
                            "
                        />
                        <img 
                            src="/Portfolio/assets/profile/banner/Blob.svg" 
                            alt="" 
                            className="
                                z-[2] 
                                absolute 
                                top-0
                            "
                        />
                        <img 
                            src="/Portfolio/assets/profile/banner/Blob.svg" 
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
                            w-[70vw]
                            flex
                            flex-col
                            gap-1
                        "
                    >
                        <Text>
                            Olá, me chamo Carlos Eduardo de Moura Gomes.
                        </Text>
                        <Text>
                            Atualmente minha experiência está fundamentada apenas em projetos pessoais 
                            nos quais busco aplicar todos os meus conhecimentos.
                        </Text>
                        <Text>
                            Planejo dominar inicialmente tecnologias relacionadas a Front End e UI/UX Design 
                            e futuramente tecnologias relacionadas a Back End. Devido a rotina da faculdade 
                            busco apenas vagas de estágio remoto com carga horária semanal de até 30 horas.
                        </Text>
                        <div
                            className="
                                flex
                                items-center
                                justify-center
                                gap-2
                                p-2
                            "
                        >
                            <a 
                                href="/Portfolio/portfolio"
                                className="
                                    p-2
                                    rounded-full
                                    transition
                                    bg-purple-600
                                    hover:bg-purple-500
                                "
                            >
                                Portfólio
                            </a>
                            <a 
                                href="/Portfolio/curriculo"
                                className="
                                    p-2
                                    rounded-full
                                    transition
                                    bg-cyan-600
                                    hover:bg-cyan-500
                                "
                            >
                                Currículo
                            </a>
                        </div>
                    </figcaption>
                </figure>
                <div
                    className="
                        ml-auto
                        flex
                        flex-col
                        gap-2
                    "
                >
                    <a 
                        href="https://github.com/cemgthedev"
                        className="btn-primary"
                    >
                        <img src="/Portfolio/assets/icons/GithubLogo.svg" alt="" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/"
                        className="btn-primary"
                    >
                        <img src="/Portfolio/assets/icons/LinkedinLogo.svg" alt="" />
                    </a>
                    <a 
                        href="https://www.instagram.com/cemg.the.dev/"
                        className="btn-primary"
                    >
                        <img src="/Portfolio/assets/icons/InstagramLogo.svg" alt="" />
                    </a>
                    <a 
                        href="mailto:cemg.the.dev@gmail.com"
                        className="btn-primary"
                    >
                        <img src="/Portfolio/assets/icons/Envelope.svg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
}