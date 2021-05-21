import React,{useState} from 'react';
import "./styles.css";
import {Link} from "react-router-dom";
import {login} from "../../Actions/Auth/Login";
import {toast} from "react-toastify";

function LoginForm({history}) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    // const dispatch=useDispatch();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log("Send Login data email and password");
        try{
            let res=await login({email,password});
            
            console.log("Login response from server",res);
            if(res.data){
                console.log("SAVE DATA IN REDUX AND LOCAL STORAGE THEN REDIRECT");
                console.log(res.data);
                //save user and token in local storage
                localStorage.setItem("authEpics",JSON.stringify(res.data));

                //save user and token in redux
                // dispatch({
                //     type:"LOGGED_IN_USER",
                //     payload:res.data
                // })
                toast.success("Log In Successfull");
                history.push("/");
            }
        }
        catch(error){
            console.log("Error",error);
            if(error.response.status===400){
                toast.error(error.response.data);
            }
        }
    }
    return (
        <>
            <form className="container mt-5" onSubmit={(e)=>handleSubmit(e)}>
                <h1 style={{textAlign:'center',color:"black"}}>Log In</h1>
               
                <div className="form-group mb-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                    value={email} required onChange={e => setEmail(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                    value={password} required onChange={e => setPassword(e.target.value)}/>
                </div>
                <button type="submit mb-3" className="btn btn-primary">Log In</button>

                <p style={{color:"black"}}>Don't have an account ? Click here to <Link to="/signup">SignUp</Link>.</p>
            </form>
        </>
    )
}

export default LoginForm;
