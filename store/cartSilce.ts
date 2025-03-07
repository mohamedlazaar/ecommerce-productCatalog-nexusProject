import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { items:[], totalAmount:0},
    reducers: {
        addToCart: (state:any, action)=>{
            state.items.push(action.payload);
        },
        removeFromCart: (state:any, action)=>{
            state.items = state.items.filter((item:any)=>item.id !== action.payload);
        },
        updateQuantity: (state:any, action)=>{
            state.items = state.items.map((item:any)=>item.id === action.payload.id ? {...item,quantity: action.payload.quantity} : item);
        },
        clearCart: (state:any)=>{
                    state.items = [];
                    state.totalAmount = 0;
        }, 
    }
})
export const {addToCart, removeFromCart, updateQuantity, clearCart} = cartSlice.actions;
export default cartSlice.reducer;  