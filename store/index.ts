import { configureStore } from "@reduxjs/toolkit";
import productReducer from './productSlice';
import categoryReducer from './categorySilce'
import cartReducer from './cartSilce'
export const store = configureStore({
    reducer: {
        products: productReducer,
        categories: categoryReducer,
        cart: cartReducer,
    },
});

// Types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
