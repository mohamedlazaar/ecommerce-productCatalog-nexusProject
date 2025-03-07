import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSilce';
import ProductCard from './common/ProductCard';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AppDispatch } from '@/store';

const ProductList = ({ products }: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    return (
        <div className="w-full">
            <div className="flex flex-wrap justify-center items-center gap-[10px]">
                {currentProducts.map((product: any) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                        addToCart={() => dispatch(addToCart(product))} 
                    />
                ))}
            </div>

            <div className="flex justify-center  mt-6 mb-6 gap-2">
                <button 
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                    <FaArrowLeft />
                </button>
                <span className="px-4 py-2 bg-gray-100 rounded">
                    Page {currentPage} of {totalPages}
                </span>
                <button 
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default ProductList;