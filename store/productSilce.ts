import { mockProducts } from "@/mockData";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
}
interface ProductState{
    products: Product[];
    filteredProducts: Product[];
}
const initialState: ProductState = {
    products: mockProducts,
    filteredProducts: mockProducts
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filteredProductsByCategory: (state, action: PayloadAction<string>)=>{
            if(action.payload === 'All'){
                state.filteredProducts = state.products;
            }
            else{
                state.filteredProducts = state.products.filter((product)=> product.category === action.payload)
            };
        },
        sortProductsByPrice: (state, action)=>{
            state.filteredProducts.sort((a,b)=>
            action.payload === 'asc' ? a.price - b.price : b.price - a.price)
        }
    }
});

export const { filteredProductsByCategory, sortProductsByPrice} = productSlice.actions
export default productSlice.reducer; 
