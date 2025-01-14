import { reviewStar } from "@/helpers/icons";
import Image from "next/image";
import TestimonialImgData from "./TestimonialImgData";

function TestimonialData() {
  return (
    <>
      {TestimonialImgData.map((item) => (
        <li key={item.id} className="">
          <div className="border border-grey-100 p-10">
            <div className="flex gap-2 mb-6">
              {reviewStar}
              {reviewStar}
              {reviewStar}
              {reviewStar}
            </div>
            <h3 className="text-sm md:text-base font-medium text-black-100 mb-8">
              {item.title} {/* Display the title of the image */}
            </h3>
            <p className="text-sm font-medium text-darGrey mb-6">{item.para}</p>
            <div className="flex gap-5 items-center mt-4">
              <div className="w-[75px] max-h-[75px] max-w-full overflow-hidden rounded-full">
                <Image
                  className="w-full h-full"
                  src={item.img}
                  width={100}
                  height={100}
                  alt={item.title}
                />
              </div>
              <h4 className="text-sm font-semibold text-gray-500">
                {item.author}
              </h4>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default TestimonialData;
