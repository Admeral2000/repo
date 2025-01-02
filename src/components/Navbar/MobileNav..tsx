import navLinks from '@/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
    showNav: boolean,
    closeNav: ()=>void;
}

function MobileNav({closeNav, showNav}: Props) {

    const navOpen = showNav? 'translate-x-0' : 'translate-x-[-100%]';

    return (
        <div>
            {/* overlay */}
            <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen`}></div>
            <div className={`fixed ${navOpen} justify-around flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-dark-gradient z-[10010]`}>
                {/* CloseButton */}
                <CgClose onClick={closeNav} className='absolute top-[2rem] right-[2rem] sm:w-8 sm:h-8 w-6 h-6'/>
            {/* Navlinks */}
                <div className='space-y-6 pt-[2rem]'>
                <Link className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]" href={'/'}>Home</Link>
                    {navLinks.map((link) => (
                        <Link className="nav_link text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]" key={link.id} href={link.url}>{link.name}</Link>
                    ))}
                </div>
                <button className="bg-primary hidden items-center max-sm:flex justify-center py-2 px-6 text-gray">
                    <Link href={"/login"} className="font-semibold leading-4">Sign in</Link>
                </button>
            </div>
        </div>
    )
}

export default MobileNav