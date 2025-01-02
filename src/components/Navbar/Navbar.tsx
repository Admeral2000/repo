"use client";
import navLinks from "@/constant";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "../../../public/burger-menu.svg";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 ${
        navBg ? "bg-nav-dark-blue shadow-lg" : "fixed"
      } z-[1000] border-navborderlategray border-b-[1px] border-solid`}
    >
      <nav className="w-full max-w-[83%] mx-auto flex  items-center justify-between py-3 xl:py-4 text-sm xl:text-base font-roboto-flex">
        <Link
          href={"/"}
          className="flex gap-[4.9px] justify-between text-xl xl:text-[24px] font-noto-traditional-nushu"
        >
          <Image
            width={22}
            height={22}
            className="w-auto h-auto"
            alt="brand-logo"
            src="/brand-logo.svg"
          />
          <h1>BitMoney</h1>
        </Link>
        <div className="hidden lg:flex justify-between font-normal items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <Link className="nav_link" key={link.id} href={link.url}>
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded bg-primary hidden sm:flex items-center justify-center py-2 px-6 xl:py-3 xl:px-8 text-gray hover:bg-green-300 transition-all duration-200">
            <Link href={"/login"} className="font-semibold leading-4">
              Sign in
            </Link>
          </button>
          {/* Burger Menu */}
          <button
            className="lg:hidden px-[14px] py-2"
            onClick={openNav}
          >
            <Image width={20} height={20} alt="burger-menu" src={BurgerMenu} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
