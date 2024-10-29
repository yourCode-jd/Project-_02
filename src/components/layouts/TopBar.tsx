import {
  facebookIcon,
  instagramIcon,
  linkdinIcon,
  xIcon,
} from "@/helpers/icons";
import React from "react";

function TopBar() {
  return (
    <section className="py-2 sm:py-[10px] bg-primary lg:fixed lg:top-0 w-full z-10">
      <div className="dz_container_large">
        <div className="row flex items-center justify-between">
          <div className="col text-sm font-medium text-grey">Currency: USA (USD)</div>
          <div className=" hidden sm:block col text-sm font-medium text-grey">
            Enjoy 10% Off Your First Order - Use Code 10new
          </div>
          <div className="col flex space-x-4">
            <span>{instagramIcon}</span>
            <span>{facebookIcon}</span>
            <span>{xIcon}</span>
            <span>{linkdinIcon}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopBar;
