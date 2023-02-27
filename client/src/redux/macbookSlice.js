import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import macbookApi from "../api/macbookApi";

const initialState = {
    macbooks: [],

}
export const getAllMacbook = createAsyncThunk(
    'macbooks/getall',
    async (value, { rejectWithValue }) => {
        try {
            const data = await macbookApi.getAllMacbook();
            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const macbookSlice = createSlice({
    name: 'macbooks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllMacbook.fulfilled, (state, action) => {
            if (state.macbooks.length === 0)
                state.macbooks.push(...action.payload.data)
        })
    }

})

export default macbookSlice.reducer;