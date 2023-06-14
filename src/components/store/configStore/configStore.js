import { configureStore } from "@reduxjs/toolkit";

import itemChannelSlices from '../slices/itemChannelSlices';

const store = configureStore({
    reducer: itemChannelSlices.reducer
})

export { store };