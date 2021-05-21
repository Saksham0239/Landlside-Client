import axios from "axios";

export const  register=async (user)=>{
    const res=await axios.post("http://localhost:8000/register",user);
    return res;
}