import TestimonialData from "@/components/testimonial/TestimonialData";

function testimonialLayout() {
  return (
    <div className="dz_container_large ">
      <div className="py-10 md:py-20">
        <ul
          className="w-full flex gap-x-3 md:gap-x-7 overflow-auto pb-4  
          [&::-webkit-scrollbar]:h-2
        [&::-webkit-scrollbar-track]:bg-gray-100    
        [&::-webkit-scrollbar-track]:rounded-full    
        [&::-webkit-scrollbar-thumb]:bg-gray-300
        [&::-webkit-scrollbar-thumb]:rounded-full
        "
        >
          <TestimonialData />
        </ul>
      </div>
    </div>
  );
}

export default testimonialLayout;
