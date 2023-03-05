import clsx from 'clsx';
import { ReactNode, useState } from "react";

export interface HorizontalListingProps {
    idBox: string,
    idScroll:string,
    children: ReactNode,
    className?: string
}

export function HorizontalListing({idBox, idScroll, children, className}: HorizontalListingProps) {
    const [percentage, setPercentage] = useState(0);
    
    const box = document.querySelector(`#${idBox}`);
    const scroll = document.querySelector(`#${idScroll}`);

    function updateProgressBar() {
       if(box && scroll) {
            const percentageDecimal = scroll.scrollLeft / (scroll.scrollWidth - box.scrollWidth);
            console.log(percentageDecimal);
            setPercentage(percentageDecimal * 100);
       }
    }

    return (
        <div
          id={idBox}
          className='flex flex-col'
        >
            <div
                onScroll={() => updateProgressBar()}
                id={idScroll}
                className={clsx('p-4 flex gap-4 overflow-x-auto select-none scrollbar-hide',
                    className
                )}
            >
                { children }
            </div>
            
            <svg width="100%" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="gradientBgScroll" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="rgba(255,255,255,0.2)" />
                  <stop offset="60%" stop-color="rgba(255,255,255,0.3)" />
                  <stop offset="100%" stop-color="rgba(255,255,255,0.4)" />
                </linearGradient>
                <linearGradient id="gradientBgRange" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stop-color="rgba(0,255,255,0.4)" />
                  <stop offset="40%" stop-color="rgba(0,255,255,0.8)" />
                  <stop offset="60%" stop-color="rgba(0,255,255,1)" />
                </linearGradient>
              </defs>
              <rect 
                y="10" 
                width="100%" 
                height="12" 
                rx="6" 
                fill='url(#gradientBgScroll)'
              />
              <g>
              <rect 
                y="10" 
                width={`${percentage}%`} 
                height="12"
                rx="6" 
                fill="url(#gradientBgRange)" />
                <rect 
                y="11" 
                x="12"
                width={`${percentage - 3.5}%`}
                height="10" 
                rx="100" 
                fill="url(#gradientBgRange)" 
                className='blur-sm rounded-full absolute top-0'/> 
               </g>  
            </svg>
        </div>
    );
}