import React from "react";
import Button from "../buttons/Button";
import Image from "next/image";

function SummerDeal() {
  return (
    <>
      <div className="dz_container_large">
        <div className="relative flex w-full sm:mt-10 lg:mt-[100px] gap-4 lg:gap-8 flex-col-reverse sm:flex-row mb-5">
          <div className="col mt-3 sm:mt-0">
            <Image src={"/images/summer02.png"} width={836} height={1080} />
          </div>
          <div className="col flex justify-between gap-5 flex-col ">
            <Image src={"/images/summer01.png"} width={836} height={650} />
            <div className="relative content-center h-full lg:pl-[100px]">
              <h2 className="text-2xl lg:text-4xl text-primary font-normal">
                Hot Summer Deals
              </h2>
              <p className="text-sm lg:text-md text-darGrey font-normal mb-0 md:mb-5">
                Refresh Your Wardrobe with Up to 50% Off
              </p>
              <Button type="button" title="Explore Now" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SummerDeal;
