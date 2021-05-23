import React,{useState,useEffect} from 'react';
import axios from "axios";
import "./ColorCodedMap.css";
import Navbar from "../Navbar/CustomNavbarWeather.jsx";

//https://landslideapi.herokuapp.com/images/?format=json
function ColorCodedMap() {
   

    let [mainUrl,setMainUrl]=useState("");

    useEffect(()=>{
        
        async function getData(){
        const val=await axios.get("https://landslideapi.herokuapp.com/images/?format=json");
        console.log("val",val);
        setMainUrl(val);
        }

        getData();
       window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    },[]);//will work on mount




    return (
        <>
        <Navbar />
        <div className="color-coded">
            <h1 style={{color:"white"}}>Color Coded Maps</h1>
            <hr />
            <hr />
            <hr />
            <h4 id="moisture">Moisture Map</h4>
            {
                mainUrl && mainUrl.data ?<img className="map-img" src={mainUrl.data[0].moisture}  alt="moisture" />:<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr/>
            <hr />
            <h4 id="slope">Slope Map</h4>
            {
                mainUrl && mainUrl.data ?<img className="map-img" src={mainUrl.data[0].slope}  alt="slope" />:<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr/>
            <hr />
            <h4 id="output">Output Map</h4>
            {
                mainUrl && mainUrl.data ?<img className="map-img" src={mainUrl.data[0].output}  alt="output" />:<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <hr/>
        </div>
        </>
    )
}

export default ColorCodedMap;
