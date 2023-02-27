import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import iphoneApi from "../api/iphoneApi";

const initialState = {
    iphones: [],
    loading: false,
    oneiphone: {}

}

export const getAllIphone = createAsyncThunk(
    'iphones/getall',
    async (value, { rejectWithValue }) => {
        try {
            const data = await iphoneApi.getAllIphone();

            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)
export const getIphoneById = createAsyncThunk(
    'iphones/getone',
    async (value, { rejectWithValue }) => {
        try {
            const data = await iphoneApi.getIphoneById(value);

            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const iphoneSlice = createSlice({
    name: 'iphones',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllIphone.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllIphone.fulfilled, (state, action) => {
            state.loading = false;
            if (state.iphones.length === 0)
                state.iphones.push(...action.payload.data)
        })
        builder.addCase(getIphoneById.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getIphoneById.fulfilled, (state, action) => {
            state.loading = false;
            state.oneiphone = (action.payload.data)
        })
    }

})

export default iphoneSlice.reducer;