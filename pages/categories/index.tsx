import ProductList from '@/components/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchProducts } from '@/store/productSlice';
import { useEffect } from 'react';
import FilterByCategory from '@/components/common/FilterByCategory';
import SortByPrice from '@/components/common/SortByPrice';
// import SortByRating from '@/components/common/SortByRating';

const CategoryPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filteredProducts, loading } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div>
            <div className="w-full h-[200px] flex justify-center items-center p-2 bg-gray-700 mb-[20px]">
                <h2 className="text-[32px] font-extrabold text-white mb-4 capitalize">All Products</h2>
            </div>
            <div className="container mx-auto flex-wrap gap-[20px] justify-center flex mb-6">
                <FilterByCategory /> 
                <SortByPrice /> 
                {/* <SortByRating /> */}
            </div>
            <div className="w-[90%] mx-auto">
            {loading ? (
                <p className="text-center text-gray-600">Loading products...</p>
            )  : filteredProducts.length > 0 ? (
                <ProductList products={filteredProducts} />
            ) : (
                <p className="text-center text-gray-600">No products found in this category.</p>
            )}                
            </div>

        </div>
    );
};

export default CategoryPage;