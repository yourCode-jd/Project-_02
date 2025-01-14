import HomeBanner from "@/components/banner/HomeBanner";
import SummerDealData from "@/components/deals/SummerDealData";
import BestSellerLayout from "@/components/bestSeller/BestSellerLayout";
import ExploreBanner from "@/components/exploreDeal/ExploreBanner"
import TestimonialLayout from "@/components/testimonial/TestimonialLayout"


export default function Home() {
  return (
    <div>
      <HomeBanner />
      <SummerDealData />
      <BestSellerLayout />
      <ExploreBanner />
      <TestimonialLayout />
    </div>
  );
}
