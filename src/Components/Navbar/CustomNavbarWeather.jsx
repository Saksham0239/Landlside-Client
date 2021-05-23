import React from 'react';
import "./CustomNavbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo-main1-remove.png";
import { Link as ScrollLink } from "react-scroll";



function CustomNavbar1() {

    return (
        <>
            <div className="navbar-custom">
                <div className="left">
                    <ul>
                        <Link to="/"><img src={Logo} alt="" style={{ height: "50px", width: "50px" }} /></Link>
                        <ScrollLink to="moisture"><li className="Brand" style={{ fontSize: "x-large", fontWeight: "bold" }}>Moisture Map</li></ScrollLink>
                        <ScrollLink to="slope"> <li className="Brand" style={{ fontSize: "x-large", fontWeight: "bold" }}>Slope Map</li></ScrollLink>
                        <ScrollLink to="output"><li className="Brand" style={{ fontSize: "x-large", fontWeight: "bold" }}>Output Map</li></ScrollLink>
                    </ul>
                </div>
                <div className="right">

                </div>
            </div>
        </>
    )
}

export default CustomNavbar1;
