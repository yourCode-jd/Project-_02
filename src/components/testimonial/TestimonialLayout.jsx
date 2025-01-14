import TestimonialData from "@/components/testimonial/TestimonialData";

function testimonialLayout() {
  return (
    <div className="dz_container_large ">
      <div className="py-20">
        <ul className="w-full col grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-x-[30px] md:gap-y-[26px]">
          <TestimonialData />
        </ul>
      </div>
    </div>
  );
}

export default testimonialLayout;
