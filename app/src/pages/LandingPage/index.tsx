import { TypeAnimation } from 'react-type-animation';

import "../../styles/global.css";
import { Heading } from "../../components/Heading";

export function LandingPage() {
    return (
        <div
            className="
                bg-neutral-900
                w-screen
                h-screen
            "
        >
            <div
                className="
                    min-h-[96px]
                    text-xl 
                    font-semibold 
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
        </div>
    );
}