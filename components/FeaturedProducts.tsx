import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchProducts, addToCart } from "@/store/productSlice";
import { useEffect } from "react";
import ProductCard from "./common/ProductCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules";

const ArrowLeft = (props: any) => (
    <button {...props} className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 z-10 text-gray-700 hover:text-black cursor-pointer ">
        <FaArrowLeft size={30} />
    </button>
);

const ArrowRight = (props: any) => (
    <button {...props} className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 z-10 text-gray-700 hover:text-black cursor-pointer">
        <FaArrowRight size={30} />
    </button>
);

const FeaturedProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const products = useSelector((state: RootState) => state.products.products);
    console.log("products", products)
    useEffect(() => {
        dispatch(fetchProducts());
        console.log("fetch products",dispatch(fetchProducts()))
    }, [dispatch]);

    // Get One Product Per Category
    const uniqueCategoryProducts = products.reduce((acc: any[], product: any)=>{
        if(!acc.some((item)=> item.category.name === product.category.name)){
            acc.push(product);
        }
        return acc;
    }, [])
    console.log("uniqueCategoryProducts", uniqueCategoryProducts)

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <ArrowLeft />,
        nextArrow: <ArrowRight />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerdPadding: '0px'
                },
            },
        ],
    };

    return (
        <div className="container mx-auto pt-[0px] pb-[100px] mb-[20px] ">
            <h1 className="text-4xl font-extrabold pl-[20px] mb-[30px]">Featured Products</h1>
            <Slider {...settings} className="!flex  !justify-around  pb-[30px] !items-center">
                {uniqueCategoryProducts.slice(0, 5).map((product: any) => (
                    <ProductCard key={product.id} product={product} addToCart={() => dispatch(addToCart(product))} />
                ))}
            </Slider>
        </div>
    );
};

export default FeaturedProducts;
