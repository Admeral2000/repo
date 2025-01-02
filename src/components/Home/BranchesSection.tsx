import Image from "next/image";
import React from "react";


function BranchesSection() {
  const slide = [
    {
      id: 1,
      image: "/uae.png",
      alt: "UAE",
      year: "2024",
      title: "Launch in ",
      country: "UAE",
      description: "Already implemented working system and tested algorithms allow us to go to the launch stage. The launch will target Uzbekistan, and deploy to others markets.",
      aum: "AUM: Over $10 million",
    },
    {
      id: 2,
      image: "/eu.png",
      alt: "EU",
      year: "2025",
      title: "Launch in ",
      country: "EU",
      description: "Project launch in Uzbekistan help you optimize product and get first profit. The next step is launch project in London. In addition, it is planned to release to the stock market. Launch in New York Project launch in New York, will bring the project to the world level, and will attract gigantic amount individual clients. The project will be deployed on world level",
      aum: "AUM: Over $500 million",
    },
    {
      id: 3,
      image: "/uae.png",
      alt: "UAE",
      year: "2024",
      title: "Launch in ",
      country: "UAE",
      description: "Already implemented working system and tested algorithms allow us to go to the launch stage. The launch will target Uzbekistan, and deploy to others markets.",
      aum: "AUM: Over $10 million",
    },
    {
      id: 4,
      image: "/eu.png",
      alt: "EU",
      year: "2025",
      title: "Launch in ",
      country: "EU",
      description: "Project launch in Uzbekistan help you optimize product and get first profit. The next step is launch project in London. In addition, it is planned to release to the stock market. Launch in New York Project launch in New York, will bring the project to the world level, and will attract gigantic amount individual clients. The project will be deployed on world level",
      aum: "AUM: Over $500 million",
    },
  ];

      return(
    <div className = "max-width w-full pb-20 max-md:pb-[85px]" >
      <div className="flex justify-center mb-14 max-md:mb-4 max-sm:mb-12">
        <h1 className="title_stl text-center w-full max-w-[382px] max-sm:max-w-60 ">
          <span className="title_stl_primary">Our path</span>
          {"to success"}
        </h1>
      </div>

      <div className="flex gap-x-12 overflow-x-scroll scrollbar-hide pl-[121px] max-md:px-5 max-sm:overflow-x-visible max-sm:flex-col">
       {slide.map((item) => (
        <div key={item.id} className="flex border-r border-solid border-navborderlategray pt-6 pr-12 gap-[52px] max-sm:py-12 max-sm:pr-0 max-sm:border-r-0 max-sm:border-y max-sm:flex-col">
          <div className="min-w-[445px] flex flex-col items-start max-sm:min-w-fit max-sm:max-w-[345px]">
            <span className="font-ibm-plex text-xl font-medium mb-3 max-sm:text-sm max-sm:leading-6">
              {item.year}
            </span>
            <div>
              <h2 className="font-ibm-plex text-[32px]  leading-10 mb-4 font-bold max-md:text-2xl">
                {item.title} <span className="text-primary">{item.country}</span>
              </h2>
            </div>
            <p className="text-base leading-[26px] font-normal opacity-70 mb-5 max-md:text-[14px] max-md:mb-6 max-sm:leading-[26px]">
             {item.description}
            </p>
            <span className="py-2 px-6 rounded-[4px] bg-ultimate-card-color text-base leading-[26px] font-normal">
             {item.aum}
            </span>
          </div>

          <div className="min-w-[296px] h-64 flex justify-center max-md:min-w-[345px] max-sm:min-w-full max-sm:px-5">
            <Image src={item.image} alt={item.alt} width={386.7} height={258} className="w-full h-full" />
          </div>
        </div>
        ))}
      </div>
    </div >
  );
}

export default BranchesSection;
