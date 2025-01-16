import BestSellerData from "@/components/bestSeller/BestSellerData";
import Button from "../buttons/Button";

function BestSellerLayout() {
  return (
    <>
      <div className="dz_container_large ">
        <div className="flex gap-5 flex-wrap lg:flex-nowrap py-5 pb-10 md:py-20">
          <div className="col w-full lg:w-[30%]">
            <div className="relative content-center h-full">
              <h2 className="text-2xl lg:text-4xl text-primary font-normal">
                Best Seller
              </h2>
              <p className="text-base md:text-md text-darGrey font-normal mb-0 md:mb-5">
                Stay ahead of the style curve with our latest arrivals.
              </p>
              <Button type="button" title="Explore Now" />
            </div>
          </div>
          <ul className="w-full lg:w-[70%] col grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-x-[30px] md:gap-y-[26px]">
            <BestSellerData />
          </ul>
        </div>
      </div>
    </>
  );
}

export default BestSellerLayout;
