import axios from'axios'
axios.defaults.withCredentials = true
import { getToken } from '../utils/storageHandler';
const token=getToken()

export const viewPropertyAPI=async()=>{    
    const response=await axios.get(`${BASE_URL}/property/viewall`,{
        headers:{
            Authorization: `Bearer ${token}`
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