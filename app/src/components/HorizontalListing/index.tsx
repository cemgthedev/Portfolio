import clsx from 'clsx';
import { ReactNode, useState } from "react";

import { ProgressBar } from '../ProgressBar';

export interface HorizontalListingProps {
    idBox: string,
    idScroll:string,
    children: ReactNode,
    className?: string
}

export function HorizontalListing({idBox, idScroll, children, className}: HorizontalListingProps) {
    const [percentage, setPercentage] = useState(0);

    async function updateProgressBar() {
      try{
          const box = await document.querySelector(`#${idBox}`);
          const scroll = await document.querySelector(`#${idScroll}`);
          if(box && scroll) {
            const percentageValue = (scroll.scrollLeft / (scroll.scrollWidth - box.scrollWidth)) * 100;
            setPercentage(percentageValue);
          }
      } catch(error) {
        console.error(error);
      }
       
    }

    return (
        <div
          id={idBox}
          className='flex flex-col w-full'
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
            
            <ProgressBar percentage={ percentage } />
        </div>
    );
}