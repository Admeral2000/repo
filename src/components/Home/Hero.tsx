import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    // className={`top-0  left-0 bottom-0 max-sm:bg-[length:100%_80vh] max-md:bg-fixed max-md:bg-[length:100%_100vh]  max-md:bg-origin-content w-full pt-[9.5vh] bg-hero-pattern bg-no-repeat bg-cover`}
    <div className='relative'>
      <div className='w-full flex justify-center items-center mx-auto max-w-[1440px] max-sm:pt-[152px] max-sm:pb-28 max-sm:px-4 max-md:pt-[140px] max-md:pb-[271px] max-md:px-5 py-[232px]'>
      <Image src='/hero-pattern.png' alt='Hero' width={1440} height={1440}   className='absolute top-0 left-0 z-[1] max-sm:h-[80vh] max-md:h-[100vh] w-full'/>
        <div className='relative z-[2] max-md:max-w-[518px] max-w-[576px] w-full text-center  flex flex-col items-center max-sm:gap-6 gap-8'>
          <h1 className='font-ibm-plex text-4xl leading-[44px] sm:text-[44px] sm:leading-[56px] md:text-[64px] md:leading-[64px] font-bold'>
            <span className='max-[500px]:block text-primary'>We trade,</span>{" you earn"}
          </h1>
          <p className='font-roboto-flex text-lg  max-md:text-base opacity-70 max-w-lg font-normal'>{'Our platform allows you to trade and invest your funds with ease. Your funds will remain in your account, and our platform connects to it securely through our API. We trade your funds in the spot market, generating income without the need for liquidation.'}</p>
          <button className='py-3 px-8 rounded bg-primary sm:flex items-center justify-center xl:py-3 xl:px-8 text-gray hover:bg-green-300 transition-all duration-200'>
          <Link href={"/"} className="font-roboto-flex font-semibold max-sm:text-[14px] leading-normal text-base">
             Get started
            </Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Hero