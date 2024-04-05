import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const driversApi = createApi({

    reducerPath: 'driversApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3001' 
    }),
    endpoints: (builder) => ({
        getDrivers: builder.query({
            query: (page = 0) => `drivers?limit=9&offset=${page * 9}`,
            providesTags: ['Drivers'],
        }),
        getAllDrivers: builder.query({
            query: () => `drivers`,
            providesTags: ['Drivers'],
        }),
        getNameDriver: builder.query({
            query: (name) => `drivers?name=${name}`,
            providesTags: ['Drivers'],
        }),
        getIdDriver: builder.query({
            query: (id) => `drivers/${id}`,
            providesTags: ['Drivers'],
        }),
    }),

});

export const { 
    useGetDriversQuery, 
    useGetAllDriversQuery, 
    useGetNameDriverQuery, 
    useGetIdDriverQuery 
} = driversApi;