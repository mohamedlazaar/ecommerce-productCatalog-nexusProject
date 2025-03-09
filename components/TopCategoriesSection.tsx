import { useEffect } from 'react';
import { AppDispatch, RootState } from "@/store/index";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '@/store/categorySilce'; 
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategoriesSection = () => {
    const dispatch = useDispatch<AppDispatch>();
    const categories: any = useSelector((state: RootState) => state.categories.list);
    const loading = useSelector((state: RootState) => state.categories.loading);

    console.log("top-categories", categories)

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
                    <img 
                        src={categories[0]?.category_image_url} 
                        className='w-full h-full absolute top-0 left-0 object-cover group-hover:scale-110' 
                        alt={categories[0]?.name || 'Category'} 
                    />
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
                            <img 
                                src={categories[index]?.category_image_url} 
                                className='w-full h-full absolute top-0 left-0 object-cover group-hover:scale-110' 
                                alt={categories[index]?.name || 'Category'} 
                            />
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
