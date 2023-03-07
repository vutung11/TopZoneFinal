import { configureStore } from "@reduxjs/toolkit";
import productSlice from './product';
import categorySlice from './categories';

export default configureStore({
    reducer: {
        product: productSlice,
        category: categorySlice
    }
})