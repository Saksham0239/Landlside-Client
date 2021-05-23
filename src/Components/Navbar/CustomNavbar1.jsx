import React from 'react';
import "./CustomNavbar.css";
// import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import Logo from "../../Assets/logo-main1-remove.png";


function CustomNavbar1() {
    // const history=useHistory();
    // const authToken=JSON.parse(localStorage.getItem("authEpics"));
    // console.log(authToken);
    return (
        <>
            <div className="navbar-custom">
                <div className="left">
                    <ul>
                    <Link to="/"><img src={Logo} alt="" style={{height:"50px",width:"50px"}} /></Link>
                        {/* <li className="Brand" style={{fontSize:"x-large",fontWeight:"bold"}}>Logo</li> */}
                    </ul>
                </div>
                <div className="right">
                
                </div>
            </div>
        </>
    )
}

export default CustomNavbar1;
