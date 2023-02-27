import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const initialState = {
    productbyid: [],
}
export const getProductById = createAsyncThunk(
    'productbyid/getone',
    async (value, { rejectWithValue }) => {
        try {
            const data = await productApi.getProductById(value);

            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const getProductByIdSlice = createSlice({
    name: 'productbyid',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.productbyid.push(action.payload)
        })
    }
}
)
export default getProductByIdSlice.reducer;