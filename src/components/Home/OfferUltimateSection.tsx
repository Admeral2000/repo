import Image from "next/image";
import React from "react";

type CardProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
};

function OfferUltimateSection() {
    const cards: CardProps[] = [
        {
            id:1,
            title: "Ready-made investment algorithms",
            description: "We offered specific investment packages based on developed system algorithms. The user can choose the most convenient for him, independently managing the ratio of  risk to profit",
            image: "/algorithm-icon.png",
            alt: "Offer Ultimate Card Icon",
        },
        {
            id:2,
            title: "Universal and manual packages",
            description: "The user can buy a manual investment package, where control over the system is with him, and independently make decisions based on the recommendations of the robot systems. Or choose a universal package that combines both investment packages",
            image: "/manual-packages-icon.png",
            alt: "Manual Packages Icon",
        },
        {
            id:3,
            title: "Franchising",
            description: "We give the opportunity, in addition to purchasing an investment package, to buy a franchise. This will make it possible to launch an already proven and profitable business in your region",
            image: "/franchising-icon.png",
            alt: "Franchising Icon",
        },
    ];
  
            return (
    <div className="max-width w-full flex justify-center mb-[164px] max-sm:mb-36">
      <div className="relative z-[2] flex flex-col items-center gap-20 px-8 max-sm:px-4 max-sm:gap-14">
        <h1 className="font-ibm-plex max-w-[663px] text-center text-5xl leading-[60px] max-sm:text-2xl">
          We offer ultimate
        </h1>
        <div className="max-w-4xl w-full flex justify-between gap-6 max-md:gap-12 max-md:flex-wrap max-md:justify-center max-sm:gap-16">
            {cards.map((card) => (
          <div key={card.id} className="inline-block bg-ulltimate-card-gradient max-w-[282px] min-w-52 w-full p-[1px] rounded-lg max-md:max-w-[340px] max-sm:max-w-none">
            <div className="relative h-full pt-10 px-4 pb-6 rounded-lg bg-ultimate-card-color">
              <div className="absolute -top-6">
                <Image
                  src={card.image}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                  alt={card.alt}
                />
              </div>
              <div>
                <h2 className="text-lg leading-[26px] mb-3 font-semibold">
                  {card.title}
                </h2>
                <p className="opacity-70 text-base leading-[26px] font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OfferUltimateSection;
