'use client'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortProductsByPrice } from '@/store/productSlice';
import { RootState } from '@/store';

const SortByPrice = () => {
    const dispatch = useDispatch();
    const currentSortOrder = useSelector((state: RootState) => state.products.currentSortOrder);
    const [sortValue, setSortValue] = useState(currentSortOrder || '');
    
    // Keep local state in sync with Redux state
    useEffect(() => {
        setSortValue(currentSortOrder || '');
    }, [currentSortOrder]);

    const handleSortChange = (value: string) => {
        setSortValue(value);
        dispatch(sortProductsByPrice(value));
    };

    return (
        <div className="flex gap-[10px] items-center">
            <label className='font-bold text-[16px] md:block hidden'>Sort by price:</label>
            <select 
                className="p-2 border rounded" 
                value={sortValue}
                onChange={(e) => handleSortChange(e.target.value)}
            >
                <option value="">Sort By Price</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
            </select>
        </div>
    );
};

export default SortByPrice;