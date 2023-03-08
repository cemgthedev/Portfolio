import { ReactNode, useEffect, useState } from "react";

import { Card } from "../Card";

import '../../styles/global.css'

export interface CarouselProps {
    children: ReactNode,
    numberOfChildren: number
}

export function Carousel({ children, numberOfChildren }: CarouselProps) {
  const [scrollBox, setScrollBox] = useState({} as Element);
  const [scrollCarousel, setScrollCarousel] = useState({} as Element);
  const [position, setPosition] = useState(0);

  window.onresize = () => {console.log("Ok")}
  
  useEffect(() => {
    async function getScroll() {
      try {
        const scrollBox = await document.querySelector("#scrollBox");
        const scrollCarousel = await document.querySelector("#scrollCarousel");
        if(scrollCarousel) {
          setScrollCarousel(scrollCarousel);
        }
      } catch(e) {
        console.error(e);
      }
    }

    getScroll();
  }, [scroll])

  function scrollToPrevious() {
    scrollCarousel.scrollLeft -= (scrollCarousel.scrollWidth / numberOfChildren);
    console.log(scrollCarousel.scrollLeft, scrollCarousel.scrollWidth);
  }

  function scrollToNext() {
    scrollCarousel.scrollLeft += (scrollCarousel.scrollWidth / numberOfChildren);
    console.log(scrollCarousel.scrollLeft, scrollCarousel.scrollWidth);
  }

  return (
        <div
          id="scrollBox"
          className="h-full
                     w-[600px]
                     mobile:max-sm:w-full
                     m-auto
                     flex
                     gap-4
                     items-center
                     justify-center
                     "
        >
            <button
              onClick={scrollToPrevious}
              className="w-[32px] 
                         h-[32px] 
                         text-2xl
                         flex
                         items-center
                         justify-center
                         rounded-full
                         p-4
                         text-white
                          bg-gradient-to-br
                          from-neutral-400/40
                          via-neutral-600/60
                          to-black/80
                          transition
                          hover:from-cyan-500/30
                         hover:via-cyan-700/50
                         hover:to-cyan-900/70
                         active:animate-ping
                         "
            >{'<'}</button>
            <div
              id='scrollCarousel'
              className="flex py-8 w-fit h-fit overflow-hidden scroll-smooth"
            >
                { children }
            </div>
            <button
              onClick={scrollToNext}
              className="w-[32px] 
              h-[32px] 
              text-2xl
              flex
              items-center
              justify-center
              rounded-full
              p-4
              text-white
               bg-gradient-to-bl
               from-neutral-400/40
               via-neutral-600/60
               to-black/80
               transition
               hover:from-cyan-500/30
              hover:via-cyan-700/50
              hover:to-cyan-900/70
               active:animate-ping
              "
            >{'>'}</button>
        </div>
    );
}