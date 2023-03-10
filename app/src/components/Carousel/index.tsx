import { ReactNode, useEffect, useState } from "react";

import { Card } from "../Card";

import '../../styles/global.css'

export interface CarouselProps {
    children: ReactNode,
    numberOfChildren: number
}

export function Carousel({ children, numberOfChildren }: CarouselProps) {
  const [scrollCarousel, setScrollCarousel] = useState({} as Element);
  
  useEffect(() => {
    async function getScroll() {
      try {
        const scrollCarousel = await document.querySelector("#scrollCarousel");
        if(scrollCarousel) {
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
    console.log(scrollCarousel.scrollLeft, scrollCarousel.scrollWidth);
  }

  function scrollToNext(e: any) {
    e.preventDefault();

    scrollCarousel.scrollLeft += (scrollCarousel.scrollWidth / numberOfChildren);
    console.log(scrollCarousel.scrollHeight,scrollCarousel.scrollLeft, scrollCarousel.scrollWidth);
  }

  return (
    <div
      className="m-auto w-[80vw] flex items-center relative"
    >
      <button onClick={scrollToPrevious}
        className="w-[32px] 
                  h-[32px] 
                  p-4 
                  flex 
                  items-center 
                  justify-center 
                  rounded-full 
                  absolute 
                  left-2
                  active:animate-ping
                   text-white/60
                   bg-gradient-to-b
                  from-neutral-500/20
                  via-neutral-700/30
                  to-black/40
                   hover:from-violet-500/20
                  hover:via-violet-700/30
                  hover:to-black/40
                  "
      >{'<'}</button>
      <div id="scrollCarousel" className="carousel flex">
        { children }
      </div>
      <button onClick={scrollToNext}
        className="w-[32px] 
                   h-[32px] 
                   p-4 
                   flex 
                   items-center 
                   justify-center 
                   rounded-full 
                   absolute 
                   right-2
                   active:animate-ping
                   text-white/60
                   bg-gradient-to-b
                  from-neutral-500/20
                  via-neutral-700/30
                  to-black/40
                   hover:from-violet-500/20
                  hover:via-violet-700/30
                  hover:to-black/40
                   "
      >{'>'}</button>
    </div>
    );
}