import { cartIcon, searchIcon, userIcon } from "@/helpers/icons";
import Link from "next/link";
import React from "react";
import { navLinks } from "@/Constants/index"

function Header() {
  return (
    <header className="py-2 sm:py-4 bg-white lg:fixed lg:top-10 w-full z-10">
      <div className="dz_container_large">
        <div className="flex items-center justify-between gap-2">
          <div className="max-md:max-w-[130px] text-2xl xl:text-3xl logo">GREENKIVE</div>
          <div className="flex space-x-10 items-center">
            <ul className=" hidden lg:flex list gap-7 xl:gap-16">
              {navLinks.map((link) => (<Link href={link.href} key={link.key} className="text-sm md:text-base lg:text-md  text-primary font-medium " >
                {link.label}
              </Link>))}
            </ul>
          </div>
          <div className="flex items-center space-x-5 xl:space-x-10">
            <div className="relative hidden sm:block ">
              <input
                type="text"
                placeholder="Search"
                className="bg-lightGrey p-2 pl-4 pr-10 input-no-border w-full min-w-max xl:min-w-[300px] placeholder:text-darGrey text-base font-medium"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                {searchIcon}
              </div>

            </div>
            <div className="block sm:hidden">
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
