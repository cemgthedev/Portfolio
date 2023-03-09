import clsx from 'clsx';
import { ReactNode, useState } from "react";


export interface HeaderProps {
    id?: string,
    children:ReactNode,
    className?:string
}

export function Header({id, children, className}: HeaderProps) {
    const [toggleActive, setToggleActive] = useState(false);
    
    function toggleMenu() {
        setToggleActive(prevState => !prevState)
    }

    return (
        <header
            id = { id }
            className={clsx(`bg-neutral-900 
                           text-white 
                           flex
                           items-center
                           justify-center
                            border-b-2 
                            border-b-white
                            sticky
                            top-0
                            z-[999]
                            mobile:max-sm:w-fit
                            mobile:max-sm:justify-end`,
                            {
                                'mobile:max-sm:fixed mobile:max-sm:right-0': toggleActive === true
                            },
                className
            )}
        >
            <nav
              className={clsx(
                `flex
                items-start
                justify-end
                p-2
                w-screen`
              )}
            >
                <ul
                  onClick={toggleMenu}
                  id='menu'
                  className={clsx(
                    `flex 
                    items-center
                    justify-center
                    w-screen
                    mobile:max-sm:flex-col
                    mobile:max-sm:h-screen`,
                    {
                        'mobile:max-sm:hidden': toggleActive === false,
                        'mobile:max-sm:flex': toggleActive === true
                    }
                  )}
                >
                { children }
                </ul>
                <button
                  onClick={toggleMenu}
                  className={clsx(
                    `hidden mobile:max-sm:block hover:bg-cyan-500 min-h-[32px] min-w-[32px]
                     `
                  )}
                >
                    <img src="/icons/List.svg" alt="Menu" />
                </button>
            </nav>
        </header>
    );
}