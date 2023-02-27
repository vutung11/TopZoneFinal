import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import watchApi from "../api/watchApi";

const initialState = {
    watches: [],

}
export const getAllWatch = createAsyncThunk(
    'watches/getall',
    async (value, { rejectWithValue }) => {
        try {
            const data = await watchApi.getAllWatch();
            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const macbookSlice = createSlice({
    name: 'watches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllWatch.fulfilled, (state, action) => {
            if (state.watches.length === 0)
                state.watches.push(...action.payload.data)
        })
    }

})

export default macbookSlice.reducer;