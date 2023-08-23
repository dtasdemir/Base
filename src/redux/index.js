import { configureStore } from "@reduxjs/toolkit";

// Slices
import authSlice from "./authSlice";


export default configureStore({
    reducer: {
        auth: authSlice
    }
})