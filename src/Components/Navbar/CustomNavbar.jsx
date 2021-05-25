import React from 'react';
import "./CustomNavbar.css";
import {useHistory} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import {logout} from "../../Actions/Auth/LogOut";
import Logo from "../../Assets/logo-main1-remove.png";
import {Link} from "react-router-dom";

function CustomNavbar() {
    const history=useHistory();
    const authToken=JSON.parse(localStorage.getItem("authEpics"));
    console.log(authToken);
    return (
        <>
            <div className="navbar-custom">
                <div className="left">
                    <ul>
                        {/* <li className="Brand" style={{fontSize:"x-large",fontWeight:"bold"}}>Logo</li> */}
                        <Link to="/"><img src={Logo} alt="" style={{height:"50px",width:"50px"}} /></Link>
                       <ScrollLink to="one"> <li>Home</li></ScrollLink>
                        <ScrollLink to="landslides"><li>Report</li></ScrollLink>
                        <ScrollLink to="weather"><li>Weather</li></ScrollLink>
                        <ScrollLink to="factors"><li>Maps</li></ScrollLink>
                    </ul>
                </div>
                <div className="right">
                    <ul>
                        {authToken? <li onClick={()=>logout(authToken)}>Log Out</li>
                        :
                        <>
                        <li onClick={()=>history.push("login")}>Log In</li>
                        <li onClick={()=>history.push("signup")}>Sign Up</li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CustomNavbar;
