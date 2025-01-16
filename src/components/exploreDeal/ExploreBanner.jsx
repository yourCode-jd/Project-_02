import Image from "next/image";

function ExploreBanner() {
  return (
    <div className="relative">
      <div className="h-[300px]">
        <Image
          className="w-full h-full object-cover object-right "
          src="/images/fullWidth-banner.png"
          alt=""
          width={1920}
          height={500}
        />
      </div>
      <div className="absolute top-2/4 left-5 sm:left-2/4 -translate-y-2/4 w-auto">
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
