import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppDispatch, RootState } from '@/store';
import { fetchProducts, filteredProductsByCategory } from '@/store/productSlice';
import { fetchCategories } from '@/store/categorySilce';
import FilterByCategory from '@/components/common/FilterByCategory';
import ProductList from '@/components/ProductList';
import SortByPrice from '@/components/common/SortByPrice';
import Pagination from '@/components/common/Pagination';

const CategoryPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const { category, page } = router.query;

    const products = useSelector((state: RootState) => state.products.filteredProducts);

    const [currentPage, setCurrentPage] = useState(Number(page) || 1);
    const productsPerPage = 10;

    useEffect(() => {
        dispatch(fetchCategories()); // Fetch categories

        if (!category || category === 'all') {
            dispatch(fetchProducts());
        } else {
            dispatch(filteredProductsByCategory(category as string));
        }
    }, [category, dispatch]);


    useEffect(() => {
        setCurrentPage(Number(page) || 1);
    }, [page]);

  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / productsPerPage);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        router.push(`/categories/${category || 'all'}?page=${newPage}`);
    };


    return (
        <div className="">
            <div className='w-full h-[200px] flex justify-center items-center p-2 bg-gray-700 mb-[20px]'>
                <h1 className="text-[32px] font-extrabold text-white mb-4 capitalize">
                    {category === 'all' || !category ? 'All Products' : `${category} Products`}
                </h1>
            </div>
      
            <div className="container mx-auto flex-wrap gap-[20px] justify-center items-center flex mb-6">
                <FilterByCategory selectedCategory={category as string} />
                <SortByPrice /> 
            </div>
            
            <div className='w-[90%] mx-auto'>
                <ProductList products={currentProducts} />
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default CategoryPage;
