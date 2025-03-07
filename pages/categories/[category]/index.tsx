import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/index';
import ProductList from '@/components/ProductList';
import { fetchProducts, filteredProductsByCategory } from '@/store/productSlice';
import { useEffect } from 'react';
import SortByPrice from '@/components/common/SortByPrice';
// import SortByRating from '@/components/common/SortByRating';

const CategoryPage = () => {
    const router = useRouter();
    const { category }:any = router.query;
    const dispatch = useDispatch<AppDispatch>()
    
    // Get all products from Redux
    const { filteredProducts, loading, error } = useSelector((state: RootState) => state.products);

    // Filter products by category
    const filtered_products = filteredProducts.filter(product => product.category.name.toLowerCase() === category);
    console.log(filteredProducts)
    useEffect(()=>{
        dispatch(fetchProducts())
        dispatch(filteredProductsByCategory(category))
    },[category, dispatch])

    return (
        <div className="w-full">
           <div className="w-full h-[200px] flex justify-center items-center p-2 bg-gray-700 mb-[20px]">
                <h2 className="text-[32px] font-extrabold text-white mb-4 capitalize">{category} products</h2>
            </div>
            <div className="w-[95%] md:w-[80%] mx-auto flex-wrap gap-[20px] justify-center flex mb-6">
                <SortByPrice/>
                {/* <SortByRating/> */}
            </div>
            <div className="container mx-auto">
              {filtered_products.length > 0 ? (
                <ProductList products={filtered_products} />
            ) : (
                <p className="text-center text-gray-600">No products found in this category.</p>
            )}  
            </div>
            
        </div>
    );
};

export default CategoryPage;
