import { configureStore } from '@reduxjs/toolkit'
import sideBarSlice from './sideBarSlice';
import todoSlice from './todoSlice';
export const store = configureStore({ reducer: {
    "sideBar":sideBarSlice,
    "todoSlice":todoSlice

} })
