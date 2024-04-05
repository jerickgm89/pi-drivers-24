import { configureStore } from '@reduxjs/toolkit';
import { driversSlice } from './drivers';
import { driversApi } from './api';

export const store = configureStore({
    reducer: {
        drivers: driversSlice.reducer,

        [driversApi.reducerPath]: driversApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(driversApi.middleware),
});
