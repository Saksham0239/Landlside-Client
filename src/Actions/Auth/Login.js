import axios from "axios";

export const  login=async (user)=>{
    const response= await axios.post("http://localhost:8000/login",user);
    return response;
 }