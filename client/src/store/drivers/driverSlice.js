import { createSlice } from '@reduxjs/toolkit';

export const driversSlice = createSlice({
    name: 'Drivers',
    initialState: {
        page: 0,
        drivers: [],
        isLoading: false,
    },
    reducers: {
        starLoadingDrivers: (state) => {
            state.isLoading = true;
        },
        setDrivers: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.drivers = action.payload.drivers;
        },
    }
});


// Action creators are generated for each case reducer function
export const { 
    starLoadingDrivers, 
    setDrivers 
} = driversSlice.actions;