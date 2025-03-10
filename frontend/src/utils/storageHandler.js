import { jwtDecode } from "jwt-decode";


export const getUserData = () => {
    return localStorage.getItem("userData") ? localStorage.getItem("userData") : null

}

export const getDecodedData = () => {
    return localStorage.getItem("userData") ? jwtDecode(localStorage.getItem("userData")) : null
}

