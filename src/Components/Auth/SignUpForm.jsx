import React, { useState } from 'react';
// import "./styles.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { register } from "../../Actions/Auth/SignUp";
import Recaptcha from "react-recaptcha";

function SignUpForm({ history }) {

    //6Lc9a-0aAAAAAP-OzBsc2NgqsJozhefKOacXKzcG

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRobot,setisRobot]=useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();//page does not reload on submit which is default behaviour
        try {
            await register({ name, email, password });
            // console.log("Regitered User  ///////////////////////////", response);
            toast.success('Register Success please Login');
            history.push('/login');
        }
        catch (err) {
            // console.log("response",response);
            console.log("Error", err.response);
            if (err.response.status === 400) {
                toast.error(err.response.data);
            }
        }
    }


    const verifyCallback=()=>{
        if(!isRobot){
            setisRobot(true);
        }
        console.log("Clicked verify Callback working");
    }

    return (
        <>
            <form className="container mt-5" onSubmit={(e) => handleSubmit(e)}>
                <h1 style={{ textAlign: 'center', color: "black" }}>Sign Up</h1>
                <div className="form-group mb-3">
                    <label for="exampleInputName1">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Your Name"
                        value={name} required onChange={e => setName(e.target.value)} />
                </div>
                <div className="form-group mb-3">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={email} required onChange={e => setEmail(e.target.value)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mb-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        value={password} required onChange={e => setPassword(e.target.value)} />
                </div>

                <Recaptcha
                    sitekey="6Lc9a-0aAAAAAP-OzBsc2NgqsJozhefKOacXKzcG"
                    render="explicit"
                    verifyCallback={verifyCallback}
                    onloadCallback={console.log("loaded")}
                />
                {console.log(isRobot && password && email && name)}
                {
                    isRobot && password && email && name ?
                    <button type="submit mb-3" className="btn btn-primary">Sign Up</button>
                    :
                    <button type="submit mb-3" className="btn btn-primary" disabled>Sign Up</button>
                }
                {/* <button type="submit mb-3" className="btn btn-primary">Sign Up</button> */}

                <p style={{ color: "black" }}>Alreay have an account? Click here to <Link to="/login">LogIn</Link></p>
            </form>

        </>
    )
}

export default SignUpForm;
