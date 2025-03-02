import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { filteredProductsByCategory, sortProductsByPrice } from '@/store/productSilce'

const ProductList = ()=>{
    const dispatch = useDispatch<AppDispatch>();
    const { filteredProducts }:any = useSelector((state: RootState)=> state.product)
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch(filteredProductsByCategory(e.target.value))
    }
    const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch(sortProductsByPrice(e.target.value))
    }
    console.log({filteredProducts})
    return(
        <div className="flex flex-col">
            <div className="flex">
        <div className="flex justify-centßer items-center">
            <select className="p-2 rounded-lg" onChange={handleCategoryChange}>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
                <option value="Home Appliances">Home Appliances</option>
                <option value="Booksß">Books</option>
            </select>
        </div>
        <div className="flex justify-centßer items-center">
            <select className="p-2 rounded-lg" onChange={handleSortChange}>
                <option value=''>select</option>
                <option value="asc">Highest</option>
                <option value="desc">Lowest</option>
            </select>
        </div>                
            </div>

        <div className="flex justify-center items-center gap-3 p-2 flex-wrap"> 
            {filteredProducts.map((product:any)=>(
                <div key={product.id} className="w-[200px]">
                     <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-4" />
                    <h2>{product.name}</h2>
                    <p>Price: {product.price}</p>
                </div>
            ))}
        </div>            
        </div>

    )
}
export default ProductList;