"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const images = [
  {
    src: "https://www.logoinfotech.com/wp-content/uploads/2023/01/gadgets-social-media-banner-design.jpg",
    title: "Discover the Future of Tech",
    description: "Explore our latest products and innovations.",
  },
  {
    src:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqzW7i0NaSqkxd_WCd_IiKtbBSyALrmCBTcg&s",
    title: "Style Meets Comfort",
    description: "Upgrade your wardrobe with our new collection.",
  },
  {
    src:  "https://img.freepik.com/free-vector/realistic-fitness-club-sale-horizontal-banner-template_52683-81877.jpg",
    title: "Unleash Your Potential",
    description: "Gear up with top-quality equipment for every adventure.",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {images.map((slide, index) => (
        <div
          key={index}
          className={`w-full absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.src}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-4xl font-bold text-white mb-4">
              {slide.title}
            </h1>
            <p className="text-lg text-white mb-6">{slide.description}</p>
            
            <Link href="/categories/all" className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded-full cursor-pointer">
              Discover Now
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-[50px] h-[50px] cursor-pointer hidden md:block"
      >
        <FaArrowAltCircleLeft className="fill-white w-full h-full hover:fill-gray-400" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-[50px] h-[50px] cursor-pointer hidden md:block"
      >
        <FaArrowAltCircleRight className="fill-white w-full h-full hover:fill-gray-400 " />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-gray-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

  
 
 