import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import accessoryApi from "../api/accessoryApi";

const initialState = {
    accessories: [],

}
export const getAllAccessory = createAsyncThunk(
    'accessories/getall',
    async (value, { rejectWithValue }) => {
        try {
            const data = await accessoryApi.getAllAccessory();
            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const accessorySlice = createSlice({
    name: 'accessories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllAccessory.fulfilled, (state, action) => {
            if (state.accessories.length === 0)
                state.accessories.push(...action.payload.data)
        })
    }

})

export default accessorySlice.reducer;