import { useEffect } from 'react';
import { AppDispatch, RootState } from "@/store/index";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '@/store/categorySilce'; 
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define a proper Category type
interface Category {
  id: string | number;
  name: string;
  category_image_url: string;
  // Add other properties your category objects might have
}

const CategoriesSection = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.list) as Category[];
    const loading = useSelector((state: RootState) => state.categories.loading);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Show loading state or fallback if categories are empty
    if (loading || categories.length === 0) {
        return (
            <div className="container p-2 mx-auto text-center">
                <p className="text-xl font-semibold"></p>
            </div>
        );
    }

    return (
        <div className="pb-[100px] flex flex-col container p-2 mx-auto">
            <div className="flex h-[450px] md:flex-row flex-col gap-[20px]">
                <div className="group md:w-[50%] md:h-full h-1/3 rounded-[10px] overflow-hidden flex flex-col gap-3 justify-center items-center relative">
                    <div className="w-full h-full absolute top-0 left-0">
                        <Image 
                            src={categories[0]?.category_image_url || '/placeholder.jpg'} 
                            alt={categories[0]?.name || 'Category'} 
                            fill
                            className="object-cover group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-40 z-1"></div>
                    <h2 className="text-3xl font-bold text-white relative z-2">{categories[0]?.name}</h2>
                    <Link 
                        href={`/categories/${categories[0]?.name}`} 
                        className="p-2 rounded-[10px] bg-gray-700 text-white cursor-pointer hover:bg-gray-400 relative z-2"
                    >
                        Discover More
                    </Link>
                </div>

                <div className="group md:w-[50%] md:h-full h-2/3 flex flex-col gap-[20px]">
                    {[1, 2].map((index) => (
                        <div 
                            key={index} 
                            className="flex gap-3 w-full h-full justify-center flex-col items-center relative rounded-[10px] overflow-hidden"
                        >
                            {/* Replace img with Next.js Image */}
                            <div className="w-full h-full absolute top-0 left-0">
                                <Image 
                                    src={categories[index]?.category_image_url || '/placeholder.jpg'} 
                                    alt={categories[index]?.name || 'Category'} 
                                    fill
                                    className="object-cover group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full bg-[#000] opacity-40 z-1"></div>
                            <h2 className="text-3xl font-bold text-white relative z-2">{categories[index]?.name}</h2>
                            <Link 
                                href={`/categories/${categories[index]?.name}`} 
                                className="p-2 rounded-[10px] bg-gray-700 text-white cursor-pointer hover:bg-gray-400 relative z-2"
                            >
                                Discover More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CategoriesSection;