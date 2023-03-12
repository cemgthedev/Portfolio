import '../../styles/global.css'

import { Fragment, useState } from 'react'
import nextId from 'react-id-generator'
import { Menu } from '@headlessui/react'

const links = [
    {
      href: '#home', label: 'Home'
    },
    {
      href: '#projetos', label: 'Projetos'
    },
    {
      href: '#formacao', label: 'Formação'
    },
    {
      href: '#stack', label: 'Stack'
    },
    {
      href: '#certificados', label: 'Certificados'
    },
    {
      href: '#habilidades', label: 'Habilidades'
    },
    {
      href: '#feedback', label: 'Feedback'
    },
    {
      href: '#contatos', label: 'Contatos'
    }
]

export function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    function toggleModal() {
        setModalOpen(prevState => !prevState);
    }

    return (
        <header
            className='
                w-screen
                sticky
                top-0
            '
        >
            <nav
                className='
                    relative
                    bg-neutral-900
                  text-white
                    text-lg
                '
            >
                <ul
                    className='
                        max-md:hidden
                        flex
                        items-center
                        justify-center
                        border-b-2
                        border-solid-white
                    '
                >
                    {
                        links.map((link) => (
                            <a 
                                key={nextId()}
                                href={link.href}
                                className='
                                    p-2
                                '
                            >
                                { link.label }
                            </a>
                        ))
                    }
                </ul>
                <ul
                    className='md:hidden relative'
                >
                    <Menu>
                        <Menu.Button
                            onClick={toggleModal}
                            className='
                                absolute 
                                top-2 
                                right-2 
                                p-1 
                                rounded-sm 
                                transition 
                                hover:bg-cyan-500
                                bg-gradient-to-b
                                from-neutral-200/40
                                via-neutral-400/60
                                to-neutral-600/80
                            '
                        >
                            { modalOpen ? 
                                <img src="/assets/icons/Vector.svg" alt="Menu"  /> : 
                                <img src="/assets/icons/List.svg" alt="Fechar"  /> }
                        </Menu.Button>
                        <Menu.Items
                        className='h-screen w-[90vw] flex flex-col gap-2 pt-16 items-center'
                        >
                            {
                                links.map((link) => (
                                    <Menu.Item
                                    key={nextId()}
                                    as={Fragment}
                                    >
                                        <a 
                                            onClick={toggleModal}
                                            href={link.href}
                                            className='transition hover:text-cyan-500'
                                        >
                                            { link.label }
                                        </a>
                                    </Menu.Item>
                                ))
                            }
                        </Menu.Items>
                    </Menu>
                </ul>
            </nav>
        </header>
    );

}