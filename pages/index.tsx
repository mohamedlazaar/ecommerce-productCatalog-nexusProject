import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ProductList from "@/components/ProductList";
import vercel from "@/public/vercel.svg"
import Link from "next/link";
import  Header  from "@/components/layout/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import LatestProducts from "@/components/LatestSection";
import TopCategoriesSection from "@/components/TopCategoriesSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
