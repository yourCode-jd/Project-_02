import HomeBanner from "@/components/banner/HomeBanner";
import SummerDealData from "@/components/deals/SummerDealData";
import BestSellerLayout from "@/components/bestSeller/BestSellerLayout";
import ExploreBanner from "@/components/exploreDeal/ExploreBanner"


export default function Home() {
  return (
    <div>
      <HomeBanner />
      <SummerDealData />
      <BestSellerLayout />
      <ExploreBanner />
    </div>
  );
}
