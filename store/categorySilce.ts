import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
//     const response = await fetch('https://api.escuelajs.co/api/v1/categories');
//     if (!response.ok) {
//         throw new Error('Failed to fetch products');
//     }
//     return response.json();
// });
export const fetchCategories = createAsyncThunk('products/fetchCategories', async () => {
    const response = await fetch('https://abdelrhmang4.pythonanywhere.com/api/categories/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        
    });

    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }

    return response.json();
});


const categorySlice = createSlice({
    name: 'categories',
    initialState: { list: [],  loading: false},
    reducers: {
        setCategories: (state, action)=>{
            state.list = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCategories.pending, (state)=> {state.loading = true})
        .addCase(fetchCategories.fulfilled, (state, action)=>{
            state.list = action.payload;
            state.loading = false;
        })
        .addCase(fetchCategories.rejected, (state)=> {state.loading = false})}
})

export const { setCategories } = categorySlice.actions;
export default categorySlice.reducer;  