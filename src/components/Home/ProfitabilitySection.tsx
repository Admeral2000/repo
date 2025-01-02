import Image from 'next/image'
import React from 'react'

function ProfitabilitySection() {
  return (
    <div className='relative'>
    <div className='max-width w-full flex justify-center max-sm:pb-28 pb-[439px] px-5 max-md:pb-44'>
        <Image src='/line graph.png' width={1440} height={1440} alt='Profitability Line Graph' className='absolute w-full z-[1]  -translate-y-[39%] top-2/4 left-0 max-sm:opacity-30 max-md:top-2/3 max-sm:top-1/2'/>
        <div className='flex relative z-[2] max-w-screen-md w-full items-center justify-between gap-4 max-sm:flex-col max-sm:gap-y-16 max-sm:text-center'>
            <h2 className='max-w-72 w-full font-ibm-plex text-primary text-5xl font-semibold leading-[64px] max-md:text-[40px] max-md:leading-[48px] max-sm:text-2xl'>{'30% or more Profitability'}</h2>
            <p className='max-w-[413px] opacity-70 font-roboto-flex text-lg font-normal max-md:text-base max-sm:text-sm max-sm:leading-7'>{'Based on our analysis of historical data, it is proven that our method has the potential to generate up to 100% profit in 80% of cases while ensuring the safety of your funds in your account'}</p>
        </div>
    </div>
    </div>
  )
}

export default ProfitabilitySection