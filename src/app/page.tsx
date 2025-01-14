import HomeBanner from "@/components/banner/HomeBanner";
import SummerDealData from "@/components/deals/SummerDealData";
import BestSellerLayout from "@/components/bestSeller/BestSellerLayout";
import ExploreBanner from "@/components/exploreDeal/ExploreBanner"
import TestimonialLayout from "@/components/testimonial/TestimonialLayout"
import LookBook from "@/components/lookBook/LookBook"


export default function Home() {
  return (
    <div>
      <HomeBanner />
      <SummerDealData />
      <BestSellerLayout />
      <ExploreBanner />
      <TestimonialLayout />
      <LookBook />
    </div>
  );
}
