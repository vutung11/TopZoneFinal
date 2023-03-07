import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import category from "../api/category";

const initialState = {
    categories: []
}
export const GetAllCategory = createAsyncThunk(
    'getall/category',
    async (value, { rejectWithValue }) => {
        try {
            const data = await category.All(value);
            return data.data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const categorytSlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetAllCategory.fulfilled, (state, action) => {
                state.categories = action.payload
            })
    }
})


export default categorytSlice.reducer;