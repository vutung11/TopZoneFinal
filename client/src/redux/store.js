import { configureStore } from "@reduxjs/toolkit";
import iphoneReducer from './iphoneSlice';
import macbookReducer from './macbookSlice';
import productidReducer from './getProductByIdSlice';
import ipadReducer from './ipadSlice';
import watchReducer from './watchSlice';
import soundReducer from './soundSlice'
import accessoryReducer from './accessorySlice'

export default configureStore({
    reducer: {
        iphones: iphoneReducer,
        macbooks: macbookReducer,
        productbyid: productidReducer,
        ipads: ipadReducer,
        watches: watchReducer,
        sounds: soundReducer,
        accessories: accessoryReducer,
    }
})