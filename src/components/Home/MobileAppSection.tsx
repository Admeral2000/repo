import Image from "next/image";
import React from "react";

const FuncList = [
  {
    id: 1,
    text: "Get written reports about your investments",
    icon: "/profit-report-icon.svg",
    alt: "Profit Report Icon",
  },
  {
    id: 2,
    text: "Set up your account based on your chosen plan",
    icon: "/set-up-icon.svg",
    alt: "Set Up Icon",
  },
  {
    id: 3,
    text: "Get notified about your operations",
    icon: "/bell-icon.svg",
    alt: "Bell Icon",
  },
];

function MobileAppSection() {
  return (
    <div className="max-width w-full pb-40 max-sm:pb-52">
      <div className="flex justify-between items-center max-sm:px-4 min-[600px]:px-6 w-full mx-auto box-border max-md:flex-col  max-md:gap-12 max-sm:gap-8">
        <div className="max-md:flex max-md:flex-col max-md:items-center max-md:justify-center">
          <h1 className="title_stl text-start max-md:text-center">
            <span className="title_stl_primary">Download our mobile app </span>
            {"for maximum convenience"}
          </h1>
          <ul className="mb-3 max-w-md max-md:text-center">
            {FuncList.map((list) => (
              <li
                key={list.id}
                className="flex items-center gap-4 py-4 px-2 list-none text-lg leading-6 font-normal border-b border-mobile-app-list-bg border-solid max-md:text-base "
              >
                <Image
                  src={list.icon}
                  alt={list.alt}
                  width={24}
                  height={24}
                  className=""
                />
                <p>{list.text}</p>
              </li>
            ))}{" "}
          </ul>
          <div className="flex gap-4">
            <div className="cursor-pointer">
              <Image
                src={"/app-store.svg"}
                width={139}
                height={50}
                alt=""
                className="w-[139px] h-[50px]"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src={"/google-play.svg"}
                width={139}
                height={50}
                alt=""
                className="w-[139px] h-[50px]"
              />
            </div>
          </div>
        </div>

        <div className="max-w-md">
          <Image
            src={"/phones-bg.png"}
            alt="Mobile App"
            width={448}
            height={448}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default MobileAppSection;
