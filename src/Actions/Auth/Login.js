import axios from "axios";

//http://localhost:8000
export const  login=async (user)=>{
    const response= await axios.post("https://land-slide-auth-api.herokuapp.com/login",user);
    return response;
 }