import { configureStore } from "@reduxjs/toolkit";
import auth from "./userSlice";




export const store = configureStore({
    reducer:{
        user: auth
    }
})