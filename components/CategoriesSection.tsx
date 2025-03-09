import { useEffect } from 'react';
import Slider from 'react-slick';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { AppDispatch, RootState } from "@/store/index";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '@/store/categorySilce'; 
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategoriesSection = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.categories);
  

    useEffect(() => {
        dispatch(fetchCategories());
        console.log("fet", dispatch(fetchCategories()))
    }, [dispatch]);



    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        padding: "0",
        nextArrow: <FaLongArrowAltRight className="text-3xl cursor-pointer" />,
        prevArrow: <FaLongArrowAltLeft className="text-3xl cursor-pointer" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <div className="pt-[100px] pb-[100px] flex flex-col container mx-auto gap-10 ">
            <h2 className="text-4xl font-extrabold pl-[20px] mt-2 mb-6">Categories</h2>
            <Slider {...settings} className="w-full">
                {products.list.map((category: any) => (
                    <div key={category.id} className="px-2">
                        <div className="group flex flex-col w-full h-[200px] items-center  rounded-[10px] border-[1px] relative overflow-hidden">
                            <img 
                                src={category.category_image_url} 
                                className="w-full h-full rounded-[10px] object-cover group-hover:scale-110 transition-all ease-in-out" 
                                alt={category.name}
                            />  
                            <div className='absolute w-full h-full top-0 left-0 bg-black opacity-40 rounded-[10px] z-1'></div>
                            <p className="font-extrabold text-center text-[20px] text-white mt-2 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-2">
                                {category.name}
                            </p>
                            <Link href={`/categories/${category.name}`} className="absolute top-0 left-0 w-full h-full z-3 content-['']"></Link>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CategoriesSection;
