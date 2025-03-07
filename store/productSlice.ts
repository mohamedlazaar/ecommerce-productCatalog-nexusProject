import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: any;
    images: string [];
    quantity?: number;
    rating?: { rate: number; count: number };
}

interface ProductState {
    products: Product[];
    filteredProducts: Product[];
    loading: boolean;
    cart: Product[];
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    filteredProducts: [],
    cart: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
});


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filteredProductsByCategory: (state, action: PayloadAction<string>) => {
            if (action.payload === 'all') {
                state.filteredProducts = state.products;
            } else {
                state.filteredProducts = state.products.filter((product) => product.category.name === action.payload);
            }
        },
        sortProductsByPrice: (state, action) => {
            state.filteredProducts.sort((a, b) =>
                action.payload === 'asc' ? a.price - b.price : b.price - a.price
            );
        },
        // sortProductsByRating: (state, action) => {
        //     state.filteredProducts.sort((a, b) =>
        //         action.payload === 'asc' ? a.rating.rate - b.rating.rate : b.rating.rate - a.rating.rate
        //     );
        // },
        addToCart: (state, action: PayloadAction<Product>) => {
            const item = state.cart.find((product) => product.id === action.payload.id);
            if (item) {
                item.quantity = (item.quantity || 1) + 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const item = state.cart.find((product) => product.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
                state.filteredProducts = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load products';
            });
    },
});

export const {
    filteredProductsByCategory,
    sortProductsByPrice,
    // sortProductsByRating,
    addToCart,
    updateQuantity,
    removeFromCart,
} = productSlice.actions;

export default productSlice.reducer;




const response = await fetch('https://api.escuelajs.co/api/v1/products');