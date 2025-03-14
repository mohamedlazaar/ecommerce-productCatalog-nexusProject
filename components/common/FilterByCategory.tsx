'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { fetchCategories } from '@/store/categorySilce';
import { filteredProductsByCategory } from '@/store/productSlice';

// Define interfaces for props and category
interface FilterByCategoryProps {
  selectedCategory?: string;
}

interface Category {
  id: string | number;
  name: string;
  // Add other properties your category objects might have
}

const FilterByCategory = ({ selectedCategory }: FilterByCategoryProps) => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.categories.list) as Category[];
    
    const [category, setCategory] = useState(selectedCategory || 'all');
    
    useEffect(() => {
        if (categories.length === 0) {
            dispatch(fetchCategories()); // Fetch categories if not loaded
        }
        
        // Update selected category based on URL
        setCategory(selectedCategory || 'all');
    }, [selectedCategory, categories, dispatch]);
    
    const handleCategoryChange = (newCategory: string) => {
        setCategory(newCategory);
        router.push(`/categories/${newCategory}`);
        dispatch(filteredProductsByCategory(newCategory)); // Filter products
    };
    
  
    
    return (
        <div className="flex gap-[10px] items-center">
            <label className='font-bold text-[16px] md:block hidden' htmlFor="">
                Filter By Category: 
            </label>
            <select
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="p-2 border rounded"
            >
                <option value="all">All Categories</option>
                {categories.map((cat: Category) => (
                    <option key={cat.id} value={cat.name}>
                        {cat.name.charAt(0).toUpperCase() + cat.name.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterByCategory;