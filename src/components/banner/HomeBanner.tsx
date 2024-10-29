import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";
import Conditions from "@/components/Conditions";
import Testing from "@/components/Testing";

function HomeBanner() {
  return (
    <>
      <div className="w-full relative overflow-hidden">
        <Image className="h-[800px]"
          src={"/images/banner.png"}
          layout="responsive"
          width={1920}
          height={1080}
          alt="banner"
        />

        <div className=" relative sm:absolute sm:bottom-20 lg:bottom-36 lg:left-[100px] xl:left-[160px] p-8 px-4 sm:p-8 lg:p-0">
          <h1 className="text-2xl lg:text-3xl xl:text-5xl font-md text-primary max-w-lg leading-[1.3] ">Spring Collection Sundress</h1>
          <Button type="button" title="Explore Now" />
        </div>


        {/* <div className="box min-h-64 my-3 border border-red-500 text-center p-8">
        <Conditions isLoggedIn={false} title="Logged in" secondTitle="please login for continue" />
        <Button type={"button"} title={"Login"} variant={""} />
        <div className="mt-5 box_inner bg-slate-600 border min-h-24 flex items-center justify-center">
          <Testing rightContent={false} title="this is a heading" para="this is a paragraph" />
        </div>
      </div> */}
      </div >
    </>

  );
}

export default HomeBanner;
