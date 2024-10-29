import { cartIcon2 } from "@/helpers/icons";
import Image from "next/image";
import ImagesData from "./ImagesData";

function BestSellerData() {
  return (
    <>
      {ImagesData.map((item) => (
        <li key={item.id} className="">
          <div className="w-[350px] max-h-[350px] max-w-full overflow-hidden">
            <Image
              className="w-full h-full"
              src={item.img}
              width={350}
              height={350}
              alt={item.title}
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-sm md:text-base font-medium text-darGrey">
              {item.title} {/* Display the title of the image */}
            </h3>
            {cartIcon2}
          </div>
        </li>
      ))}
    </>
  );
}

export default BestSellerData;
