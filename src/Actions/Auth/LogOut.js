import axios from "axios";
import {toast} from "react-toastify";

export const  logout=async (data)=>{
    console.log("Logout working");
    // console.log("TOKEN",data);
    const {token,user}=data;
    if(localStorage.getItem("authEpics")){
        localStorage.removeItem("authEpics");
    }
    try{
        const res=await axios.post("https://land-slide-auth-api.herokuapp.com/logout",user,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
        toast.success("Successfully Logged Out");
        window.location.reload();
        return res;
    }
    catch(err){
        toast.error("Could Not Log Out please try again");
    }    
}