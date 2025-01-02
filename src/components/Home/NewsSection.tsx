import Image from 'next/image'
import React from 'react'

export default function NewsSection() {
const news=[
  {
    id:1,
    title:'How trading APIs are shaping investment patterns and unlocking ecosystem opportunities',
    image:'/first-news.png',
    alt:'img',
  },
  {
    id:2,
    title:'How to use large language models in asset management industry',
    image:'/second-news.png',
    alt:'img',
  },
  {
    id:3,
    title:'How trading APIs are shaping investment patterns and unlocking ecosystem opportunities',
    image:'/first-news.png',
    alt:'img',
  },
  {
    id:4,
    title:'How to use large language models in asset management industry',
    image:'/second-news.png',
    alt:'img',
  },
  {
    id:5,
    title:'How trading APIs are shaping investment patterns and unlocking ecosystem opportunities',
    image:'/first-news.png',
    alt:'img',
  },
  {
    id:6,
    title:'How to use large language models in asset management industry',
    image:'/second-news.png',
    alt:'img',
  },
];
    

  return (
    <div className='max-width w-full pb-40'>
<div className='w-full mx-auto block box-border min-[600px]:px-6 px-4'>
<div className='flex justify-center mb-14 max-sm:mb-12'>
<h1 className='title_stl text-center max-w-xl'><span className='title_stl_primary'>Stay up-to-date with  </span> {'the algotrading market'}</h1>
</div>


<div className='flex gap-6 overflow-scroll scrollbar-hide'>
    {news.map((news) => (
 <div key={news.id} className='min-w-72 max-w-72 transition-all duration-300'>
 <div className='relative max-h-72 w-full h-full rounded overflow-hidden mb-3'>
 <div className='absolute bottom-0 z-[1] w-full h-[70%] opacity-0 bg-news-card-gradient transition-all duration-500'>
 </div>
 <Image src={news.image} alt={news.alt} width={282} height={282} className='w-full h-full'/>
 </div>

 <div className='relative z-[2] px-2 transition-all duration-300 font-ibm-plex text-base leading-[26px] font-semibold max-sm:text-sm'>
<p>{news.title}</p>
 </div>
 </div>
 ))}
</div>
</div>
    </div>
  )
}
