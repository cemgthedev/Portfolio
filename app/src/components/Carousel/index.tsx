import { ReactNode, useEffect, useState } from "react";

import { Card } from "../Card";

import '../../styles/global.css'

export interface CarouselProps {
    children: ReactNode,
    numberOfChildren: number
}

export function Carousel({ children, numberOfChildren }: CarouselProps) {
  const [scrollCarousel, setScrollCarousel] = useState({} as Element);
  const [position, setPosition] = useState(1);
  
  useEffect(() => {
    async function getScroll() {
      try {
        const scrollCarousel = await document.querySelector("#scrollCarousel");
        if(scrollCarousel) {
          const resizeObserver = new ResizeObserver((e) => {
            e[0].target.scrollLeft = 0;
            setPosition(1);
          });
          resizeObserver.observe(scrollCarousel);
          setScrollCarousel(scrollCarousel);
        }
      } catch(e) {
        console.error(e);
      }
    }

    getScroll();
  }, [])

  function scrollToPrevious(e: any) {
    e.preventDefault();

    scrollCarousel.scrollLeft -= (scrollCarousel.scrollWidth / numberOfChildren);
    if(position > 1) {
      setPosition(prevState => prevState - 1);
    }
    console.log(scrollCarousel.scrollLeft, scrollCarousel.scrollWidth);
  }

  function scrollToNext(e: any) {
    e.preventDefault();

    scrollCarousel.scrollLeft += (scrollCarousel.scrollWidth / numberOfChildren);
    if(position < numberOfChildren) {
      setPosition(prevState => prevState + 1);
    }
    console.log(scrollCarousel.scrollHeight,scrollCarousel.scrollLeft, scrollCarousel.scrollWidth);
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
                     relative
                     "
        >
            <button
              onClick={e => scrollToPrevious(e)}
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
              className="flex py-8 w-fit h-fit overflow-hidden"
            >
                { children }
            </div>
            <button
              onClick={e => scrollToNext(e)}
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
            <div
              className="absolute 
                         bottom-[-16px]
                         w-fit
                         h-[32px]
                         px-2
                         flex
                         items-center
                         justify-center
                         rounded-md
                         text-white
                         bg-gradient-to-b
                         from-yellow-400/60
                         via-red-600/80
                         to-neutral-800"
            >
              { position }/{numberOfChildren}
            </div>
        </div>
    );
}