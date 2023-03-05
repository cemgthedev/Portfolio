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
            
            <svg width="100%" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0" width="100%" height="12" rx="6" fill="#E5E5E5"/>
              <rect y="0" width={`${percentage}%`} height="12" rx="6" fill="#06B6D4" />  
            </svg>
        </div>
    );
}