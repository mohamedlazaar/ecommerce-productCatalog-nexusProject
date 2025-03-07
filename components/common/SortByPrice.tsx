import { useDispatch, useSelector } from 'react-redux';
import { sortProductsByPrice} from '@/store/productSlice';
import { RootState } from '@/store';

const SortByPrice = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);

    return (

            <div className="flex gap-[10px] items-center">
                <label className='font-bold text-[16px] md:block hidden'>Sort by price:</label>
                <select className="p-2 border rounded" onChange={(e) => {
                    const value = e.target.value;
                    dispatch(sortProductsByPrice(value));
                }}>
                    <option value="">Sort By Price</option>
                    <option value="asc">Price: Low to High</option>
                    <option value="desc">Price: High to Low</option>
                </select>
            </div>

    );
};

export default SortByPrice;

