import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestProducts from "@/components/LatestSection";
import TopCategoriesSection from "@/components/TopCategoriesSection";


export default function Home() {
  return (
    <div className="w-[100vw]  text-black">
     <HeroSection/>
     <CategoriesSection />
     <FeaturedProducts />
     <LatestProducts />
     <TopCategoriesSection />
    </div>
  );
}
