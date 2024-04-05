import { createSlice } from '@reduxjs/toolkit';

export const DriversSlice = createSlice({
    name: 'Drivers',
    initialState: {
        page: 0,
        drivers: [],
        isLoading: false,
    },
    reducers: {
        getAllDriver: (state) => {
            state.counter += 1;
        }
    }
});


// Action creators are generated for each case reducer function
export const { increment } = DriversSlice.actions;