import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import product from "../api/product";

const initialState = {

    iphone: [],
    macbook: [],
    ipad: [],
    categories: []
}
export const GetAllMacbook = createAsyncThunk(
    'macbook/category',
    async (value, { rejectWithValue }) => {
        try {
            const data = await product.All(value);
            return data.data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

export const GetAllIphone = createAsyncThunk(
    'iphone/category',
    async (value, { rejectWithValue }) => {
        try {
            const data = await product.All(value);
            return data.data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

export const GetAllIpad = createAsyncThunk(
    'ipad/category',
    async (value, { rejectWithValue }) => {
        try {
            const data = await product.All(value);
            return data.data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

export const GetAllWatch = createAsyncThunk(
    'watch/category',
    async (value, { rejectWithValue }) => {
        try {
            const data = await product.All(value);
            return data.data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)
export const GetAllSound = createAsyncThunk(
    'sound/category',
    async (value, { rejectWithValue }) => {
        try {
            const data = await product.All(value);
            return data.data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)
export const GetAllAccessory = createAsyncThunk(
    'accessory/category',
    async (value, { rejectWithValue }) => {
        try {
            const data = await product.All(value);
            return data.data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)
export const GetProductBySlug = createAsyncThunk(
    'productbyslug',
    async (value, { rejectWithValue }) => {
        try {
            const data = await product.GetBySlug(value);
            return data.data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllMacbook.fulfilled, (state, action) => {
                state.macbook = action.payload
            })
            .addCase(GetAllIphone.fulfilled, (state, action) => {
                state.iphone = action.payload
            })
            .addCase(GetAllIpad.fulfilled, (state, action) => {
                state.ipad = action.payload
            })
            .addCase(GetAllWatch.fulfilled, (state, action) => {
                state.watch = action.payload
            })
            .addCase(GetAllSound.fulfilled, (state, action) => {
                state.sound = action.payload
            })
            .addCase(GetAllAccessory.fulfilled, (state, action) => {
                state.accessory = action.payload
            })
            .addCase(GetProductBySlug.fulfilled, (state, action) => {
                state.productbyslug = action.payload
            })
    }

})

// export const { getAllCategories } = productSlice.actions

export default productSlice.reducer;