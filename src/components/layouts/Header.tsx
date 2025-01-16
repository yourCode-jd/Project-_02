import { cartIcon, searchIcon, userIcon } from "@/helpers/icons";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/Constants/index"

function Header() {
  return (
    <header className="py-2 sm:py-4 bg-white lg:fixed lg:top-10 w-full z-10">
      <div className="dz_container_large">
        <div className="flex items-center justify-between gap-2">
          <div className=" text-2xl xl:text-3xl logo flex-1 md:text-left text-center">GREENKIVE</div>
          <div className=" md:hidden flex-1 -order-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" ><path d="M19 5H1c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1m-9 6H1c-.6 0-1-.4-1-1s.4-1 1-1h9c.6 0 1 .4 1 1s-.4 1-1 1m9 6H1c-.6 0-1-.4-1-1s.4-1 1-1h18c.6 0 1 .4 1 1s-.4 1-1 1" /></svg>
            <ul className="hidden sm:flex flex-col list gap-4 bg-primary p-6 absolute left-0 top-[88px]  z-10 min-w-60 h-screen">
              {navLinks.map((link) => (<Link href={link.href} key={link.key} className="text-sm md:text-base lg:text-md  text-white font-medium " >
                {link.label}
              </Link>))}
            </ul>
          </div>
          <div className="flex space-x-10 items-center">
            <ul className=" hidden lg:flex list gap-7 xl:gap-16">
              {navLinks.map((link) => (<Link href={link.href} key={link.key} className="text-sm md:text-base lg:text-md  text-primary font-medium " >
                {link.label}
              </Link>))}
            </ul>
          </div>
          <div className="flex items-center space-x-3 xl:space-x-10  flex-1 justify-end">
            <div className="relative hidden md:block ">
              <input
                type="text"
                placeholder="Search"
                className="bg-lightGrey p-2 pl-4 pr-10 input-no-border w-full min-w-max xl:min-w-[300px] placeholder:text-darGrey text-base font-medium"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {searchIcon}
              </div>

            </div>
            <div className="block md:hidden">
              {searchIcon}
            </div>
            <div className="relative">{userIcon}</div>
            <div className="relative">{cartIcon}</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
