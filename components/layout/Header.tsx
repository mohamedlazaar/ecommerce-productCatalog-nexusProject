"use client"
import Image from "next/image";
import Link from "next/link";
import vercel from "@/public/vercel.svg"
import { LuShoppingCart } from "react-icons/lu"
import { useState } from "react";
import { TiThMenu } from "react-icons/ti"
import Search from "../common/Search";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index"


const Header = ()=>{
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalQuantity = cart.reduce((acc, item) => acc + (item.quantity ?? 0), 0);

    const [mobileMenu, setMobileMenu] = useState<boolean>(false)

    return(
        <header className="font-poppins w-full h-[10vh] p-2 flex justify-between items-center bg-[#D9D9D9] text-black relative">
        {/*  Title  */}
        <div className="flex gap-2 p-2  items-center md:w-[15%] justify-start">
        <Link href="/" className="flex gap-2 items-center" >
          <Image src={vercel} alt="logo" width={40} height={40} />
          <h1 className="md:block hidden text-[20px] font-extrabold">Alx Nexus</h1>
        </Link>
 
        </div>
        {/* Menu */}
        <div className="p-2 md:w-[75%] md:flex justify-around  items-center hidden menu">
          <Search/>
          <ul className="flex gap-5 ">
            <li>
              <Link href="/categories/all" className="relative pb-2 before:absolute before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:w-full hover:before:translate-x-[0]  transition-all">Products Catalog</Link> 
            </li>
            <li>
              <Link href="/contact" className="relative pb-2 before:absolute before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:w-full hover:before:translate-x-[0]  transition-all">Contact</Link>
            </li>
            <li>
              <Link href="/about" className="relative pb-2 before:absolute before:bottom-0 before:w-0 before:h-[2px] before:bg-black before:translate-x-[100%] hover:before:w-full hover:before:translate-x-[0]  transition-all">About</Link>
            </li>
          </ul>
        </div>
        {/* Informations */}
        <div className="p-2  md:w-[10%]">
          <ul className="flex gap-5 justify-center items-center">
            <li className={`w-[24px] h-[24px] flex items-center relative `}>
            <Link href="/cart" className="w-[24px] h-[24px] relative"><LuShoppingCart className="!w-full  !h-full hover:text-amber-400"/></Link> 
            {totalQuantity > 0 && (
              <span className="absolute -top-[10px] -right-2 bg-red-500 text-white text-xs rounded-full w-[20px] h-[20px] flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
            </li>
            <li className="w-[24px] h-[24px] flex items-center  md:hidden ">
                <button className="mobile_menu w-full h-full cursor-pointer" onClick={()=>{setMobileMenu((prev)=> !prev)}}>
                    <TiThMenu className="!w-full !h-full hover:text-amber-400"  />
                </button>
            </li>
          </ul>
        </div>
        {/* Mobile Menu */}
        {mobileMenu == true ?      
        <div className="absolute top-full w-full h-[100vh] pt-[20px] z-1000  left-0 bg-gray-400" ><Search/>
        <ul className="flex flex-col gap-5  justify-center items-center ">    
        
            <li className="border-b-[1px] border-white w-full text-center pt-5 pb-5 hover:bg-white hover:text-black transition-all ease-in">
              <Link href="/categories" >Products Catalog</Link> 
            </li>
            <li className="border-b-[1px] border-white w-full text-center pt-5 pb-5 hover:bg-white hover:text-black transition-all ease-in">
              <Link href="/contact" >Contact</Link>
            </li>
            <li className="border-b-[1px] border-white w-full text-center pt-5 pb-5 hover:bg-white hover:text-black transition-all ease-in">
              <Link href="/about" >About</Link>
            </li>
          </ul>
        </div> : ""
        }
   
      </header>
    )
}

export default Header;