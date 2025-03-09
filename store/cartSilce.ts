import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category_name: string;
    image_url: string;
    quantity?: number;
    rating?: { rate: number; count: number };
}

interface CartState {
    reduce(arg0: (acc: any, item: any) => any, arg1: number): unknown;
    cart: Product[];
    totalAmount: number;
}

const initialState: CartState = {
    cart: [],
    totalAmount: 0,
    reduce: function (arg0: (acc: any, item: any) => any, arg1: number): unknown {
        throw new Error("Function not implemented.");
    }
};


const calculateTotalAmount = (cart: Product[]) => {
    return cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0);
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = state.cart.find((product) => product.id === action.payload.id);
            if (item) {
                item.quantity = (item.quantity || 1) + 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount = calculateTotalAmount(state.cart);
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.cart.find((product) => product.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
            state.totalAmount = calculateTotalAmount(state.cart);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
            state.totalAmount = calculateTotalAmount(state.cart);
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalAmount = 0;
        },
    },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
