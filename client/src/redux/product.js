import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import product from "../api/product";

const initialState = {
    iphone: [],
    mac: [],
    ipad: [],
    watch: [],
    sound: [],
    accessory: [],
    categories: [],
    allproduct: [],
}
export const GetAllProduct = createAsyncThunk(
    'getall/product',
    async (value, { rejectWithValue }) => {
        try {
            const data = await product.AllProduct(value);
            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

export const GetAllMacbook = createAsyncThunk(
    'mac/category',
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
    'am-thanh/category',
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
    'phu-kien/category',
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
    reducers: {
        updateIphone: (state, action) => {
            state.iphone = [...state.iphone, ...action.payload]
        },
        updateMac: (state, action) => {
            state.mac = [...state.mac, ...action.payload]
        },
        updateIpad: (state, action) => {
            state.ipad = [...state.ipad, ...action.payload]
        },
        updateWatch: (state, action) => {
            state.watch = [...state.watch, ...action.payload]
        },
        updateSound: (state, action) => {
            state.sound = [...state.sound, ...action.payload]
        },
        updateAccessory: (state, action) => {
            state.accessory = [...state.accessory, ...action.payload]
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(GetAllMacbook.fulfilled, (state, action) => {
                state.mac = action.payload
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
            .addCase(GetAllProduct.fulfilled, (state, action) => {
                state.allproduct = action.payload
            })
    }

})

export const { updateIphone, updateMac, updateIpad, updateWatch, updateSound, updateAccessory } = productSlice.actions

export default productSlice.reducer;