import axios from "axios";
import { BASE_URL } from "../utils/url";
import { getUserData } from "../utils/storageHandler";

export const loginAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/users/login`,data)
    return response.data
}

export const registerAPI= async(data)=>{
    const response = await axios.post(`${BASE_URL}/users/register`,data)
    return response.data
}

export const getProfileAPI= async()=>{
    const userToken=getUserData()  
    const response=await axios.get(`${BASE_URL}/users/view`,{
        headers:{
            Authorization: `Bearer ${userToken}`
        }
    })
    return response.data
}

export const editProfileAPI= async(data)=>{
    const userToken=getUserData()  
    const response=await axios.put(`${BASE_URL}/users/edit`,data,{
        headers:{
            Authorization: `Bearer ${userToken}`
        }
    })
    return response.data
}