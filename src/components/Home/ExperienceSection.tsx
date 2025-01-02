import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ExperienceSection() {
  return (
    <div className='relative max-width w-full flex justify-center px-5 pb-[570px] overflow-hidden max-md:pb-[442px] max-sm:pb-[452px]'>
        <Image src='/illustration-barcharts-bg.png' alt='background' width={1440} height={1440} className='absolute top-[100px]  w-full max-md:top-[350px] max-md:scale-125 max-sm:top-[400px] max-sm:scale-125'  />
        <div className='max-w-[757px] w-full flex flex-col items-center gap-6 text-center z-[2]'>
            <h1 className='title_stl'>
                <span className='title_stl_primary text-center'>5+ years of algotrading expertise: </span> {'BitMoney Invest'}
            </h1>
            <p className='font-roboto-flex opacity-70 max-w-lg text-lg font-normal max-md:text-base max-sm:leading-8'>With 5 years of experience and a robot that operates on 10 years of data, our algorithm has proven to be effective in 80% of cases</p>
            <button className='py-3 px-8 rounded bg-primary sm:flex items-center justify-center xl:py-3 xl:px-8 text-gray hover:bg-green-300 transition-all duration-200'>
          <Link href={"/about-us"} className="font-roboto-flex font-semibold max-sm:text-[14px] leading-normal text-base">
    {"Learn more about us"}
          </Link>
            </button>
        </div>
    </div>
  )
}

export default ExperienceSection