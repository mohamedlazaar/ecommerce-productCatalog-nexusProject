import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ProductList from "@/components/ProductList";
import vercel from "@/public/vercel.svg"
import Link from "next/link";

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
    <div className="w-[100vw] h-[100vh] bg-amber-50">
      <header className="w-full h-[100px] p-2 flex  justify-between items-center bg-gray-600">
        <div className="flex gap-2 p-2  items-center">
          <Image src={vercel} alt="logo" width={40} height={40} />
          <h1>Store Title</h1>
        </div>
        <div className="flex gap-2 p-2 items-center">
          <ul>
            <li>
              <Link href="/categoris">Categories</Link> 
            </li>
            <li>
              <Link href="/details">Details</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </header>
      {/* <ProductList/> */}
    </div>
  );
}
