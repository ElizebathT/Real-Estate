import { createSlice } from "@reduxjs/toolkit";
import {jwtDecode } from "jwt-decode";
import { getDecodedData, getUserData } from "../utils/storageHandler";
const userSlice = createSlice({

    name:"user",
    initialState: {
        name:getDecodedData()?.name || null,
        email:getDecodedData()?.email || null,
        token:getUserData() || null,
        isLogin:getUserData() ? true : false,
        role:getDecodedData()?.role || null,
    },

    reducers:{

        signup:((state,action)=>{
            state.token= action.payload.token
            
            const decoded = jwtDecode(action.payload.token)
            state.isLogin=true
            state.email=decoded.email
        }),

        login:((state,action)=>{
            state.token= action.payload.token
            
            const decoded = jwtDecode(action.payload.token)
            state.isLogin=true
            state.email=decoded.email
        }),

        logout(state){ // action is need only when we need to fetch data
            state.isLogout=false
            state.name = null
            state.email = null
            state.token= null
        },
        
    }
})

export const { signup, login, logout } = userSlice.actions;
export default userSlice.reducer;