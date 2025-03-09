import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

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

interface ProductState {
    products: Product[] ;
    filteredProducts: Product[];
    selectedProduct: Product | null;
    loading: boolean;
    error: string | null;
    currentSortOrder: string | null;
}

const initialState: ProductState = {
    products: [],
    filteredProducts: [],
    selectedProduct: null,
    loading: false,
    error: null,
    currentSortOrder: null,
};

// Fetch all products
// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const response = await fetch('https://api.escuelajs.co/api/v1/products');
//     if (!response.ok) {
//         throw new Error('Failed to fetch products');
//     }
//     return response.json();
// });
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('https://abdelrhmang4.pythonanywhere.com/api/products/?page=1&page_size=1000', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        
    });

    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }

    
    const data = await response.json();

    // Map the API data to match the Product interface
    return data.results.map((item: any) => ({
        id: item.product_id,
        name: item.name,
        description: item.description,
        price: parseFloat(item.price), // Convert price to a number
        category_name: item.category_name,
        image_url: item.image_url, // Set empty array if image_url is null
        quantity: item.stock_quantity,
    }));
});

// Fetch a single product by ID
export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id: string) => {
    const response = await fetch(`https://abdelrhmang4.pythonanywhere.com/api/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product details');
    }
    return response.json();
});

// Helper function to sort products
const sortProductsByPriceHelper = (products: Product[], sortOrder: string) => {
    if (sortOrder === 'asc') {
        return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
        return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filteredProductsByCategory: (state, action: PayloadAction<string>) => {
            if (action.payload === 'all') {
                state.filteredProducts = state.products;
            } else {
                state.filteredProducts = state.products.filter(
                    (product) => product.category_name === action.payload
                );
            }
            
            // Apply current sort order after filtering if it exists
            if (state.currentSortOrder) {
                state.filteredProducts = sortProductsByPriceHelper(state.filteredProducts, state.currentSortOrder);
            }
        },
        sortProductsByPrice: (state, action: PayloadAction<string>) => {
            const sortOrder = action.payload;
            state.currentSortOrder = sortOrder; // Store current sort order
            
            if (sortOrder) {
                state.filteredProducts = sortProductsByPriceHelper(state.filteredProducts, sortOrder);
            }
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
                
                // Apply sort order to newly fetched products if it exists
                if (state.currentSortOrder) {
                    state.filteredProducts = sortProductsByPriceHelper(state.filteredProducts, state.currentSortOrder);
                }
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load products';
            })
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.selectedProduct = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to load product details';
            });
    },
});

export const { filteredProductsByCategory, sortProductsByPrice } = productSlice.actions;

export default productSlice.reducer;