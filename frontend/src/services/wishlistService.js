import axios from'axios'
axios.defaults.withCredentials = true
import { BASE_URL } from '../../../../Personal Finance Tracker/frontend/src/utils/urls';
import { getUserData } from '../utils/storageHandler';

export const addToWishlistAPI= async(data)=>{
    const userToken=getUserData()  
    const response=await axios.post(`${BASE_URL}/wishlist/save/${data}`,{},{
        headers:{
            Authorization: `Bearer ${userToken}`
        }
    })
    return response.data
}

export const removeFromWishlistAPI= async(data)=>{
    const userToken=getUserData()  
    const response=await axios.delete(`${BASE_URL}/wishlist/delete/${data}`,{
        headers:{
            Authorization: `Bearer ${userToken}`
        }
    })
    return response.data
}