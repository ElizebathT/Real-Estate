import axios from'axios'
axios.defaults.withCredentials = true
import { BASE_URL } from '../../../../Personal Finance Tracker/frontend/src/utils/urls';
import { getUserData } from '../utils/storageHandler';

export const viewPropertyAPI=async()=>{
    const userToken=getUserData()      
    const response=await axios.get(`${BASE_URL}/property/viewall`,{
        headers:{
            Authorization: `Bearer ${userToken}`
        }
    })
    return response.data
}

export const showPropertyAPI=async(data)=>{
    const userToken=getUserData()      
    const response=await axios.get(`${BASE_URL}/property/view/${data}`,{
        headers:{
            Authorization: `Bearer ${userToken}`
        }
    })
    return response.data
}