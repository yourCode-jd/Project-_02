import Image from "next/image";

function ExploreBanner() {
  return (
    <div className="relative">
      <Image
        src="/images/fullWidth-banner.png"
        alt=""
        width={1920}
        height={500}
      />
      <div className=" relative sm:absolute sm:bottom-20 lg:bottom-36 lg:left-2/4 translate-x-1/2 p-8 px-4 sm:p-8 lg:p-0">
        <h1 className="text-2xl lg:text-4xl text-primary font-normal">
          Hot Summer Deals
        </h1>
        <p className="text-base md:text-md text-darGrey font-normal mb-0 md:mb-5">
          Refresh Your Wardrobe with Up to 50% Off
        </p>
        <button className="primaryBtn primaryBtn-text mt-5" type="button">
          <label className="cursor-pointer">Explore Now</label>
        </button>
      </div>
    </div>
  );
}

export default ExploreBanner;
