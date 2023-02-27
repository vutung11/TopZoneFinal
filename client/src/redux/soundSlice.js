import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import soundApi from "../api/soundApi";

const initialState = {
    sounds: [],

}
export const getAllSound = createAsyncThunk(
    'sounds/getall',
    async (value, { rejectWithValue }) => {
        try {
            const data = await soundApi.getAllSound();
            return data;

        } catch (error) {
            return rejectWithValue((error).response.data)
        }
    }
)

const soundSlice = createSlice({
    name: 'sounds',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllSound.fulfilled, (state, action) => {
            if (state.sounds.length === 0)
                state.sounds.push(...action.payload.data)
        })
    }

})

export default soundSlice.reducer;