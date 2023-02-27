import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ipadApi from "../api/ipadApi";

const initialState = {
    ipads: [],

}
export const getAllIpad = createAsyncThunk(
    'ipads/getall',
    async (value, { rejectWithValue }) => {
        try {
            const data = await ipadApi.getAllIpad();
            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const ipadSlice = createSlice({
    name: 'ipads',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllIpad.fulfilled, (state, action) => {
            if (state.ipads.length === 0)
                state.ipads.push(...action.payload.data)
        })
    }

})

export default ipadSlice.reducer;