import { useDispatch, useSelector } from 'react-redux';
import { filteredProductsByCategory} from '@/store/productSlice';
import { RootState } from '@/store';

const FilterByCategory = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.categories);
    
    return (

            <div className="flex gap-[10px] items-center">
                <label className='font-bold text-[16px] md:block hidden'>Sort by category:</label>
                <select 
                    onChange={(e) => dispatch(filteredProductsByCategory(e.target.value))}
                    className="p-2 border rounded">
                    <option value="All">All Categories</option>
                
                     {products.list.map((category:any)=>(
                        <option key={category.name} value={category.name}>{category.name}</option>
                     ))}
                   
                </select>
            </div>

    );
};

export default FilterByCategory;