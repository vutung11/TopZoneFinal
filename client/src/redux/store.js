import { configureStore } from "@reduxjs/toolkit";
import productSlice from './product';

export default configureStore({
    reducer: {
        product: productSlice,
    }
})