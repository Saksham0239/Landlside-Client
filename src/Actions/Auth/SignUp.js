import axios from "axios";

export const  register=async (user)=>{
    const res=await axios.post("https://land-slide-auth-api.herokuapp.com/register",user);
    return res;
}