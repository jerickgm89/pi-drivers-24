import { configureStore } from '@reduxjs/toolkit';
import { driversSlice } from './drivers';

export const store = configureStore({
    reducer: {
        drivers: driversSlice.reducer,
    },
});
