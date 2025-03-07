// import { useDispatch, useSelector } from 'react-redux';
// import { sortProductsByRating } from '@/store/productSlice';
// import { RootState } from '@/store';

// const SortByRating = () => {
//     const dispatch = useDispatch();
//     const products = useSelector((state: RootState) => state.products.products);

//     return (

//             <div className="flex gap-[10px] items-center">
//                 <label className='font-bold text-[16px] md:block hidden'>Sort by rating:</label>
//                 <select className="p-2 border rounded" onChange={(e) => {
//                     const value = e.target.value;
//                     dispatch(sortProductsByRating(value === 'high' ? 'desc' : 'asc'));
//                 }}>
//                     <option value="">Sort By Review</option>
//                     <option value="high">Best Reviews</option>
//                     <option value="low">Worst Reviews</option>
//                 </select>
//             </div>
 
//     );
// };

// export default SortByRating;
