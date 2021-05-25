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
            <p style={{color:"white"}}>Above is colour coded moisture map of India where, yellow region represent low moisture content in soil and blue region represent high moisture percentage in soil.As we go from red to yellow and yellow to blue, moisture percentage also increases.</p>
            <hr/>
            <hr />
            <h4 id="slope">Slope Map</h4>
            {
                mainUrl && mainUrl.data ?<img className="map-img" src={mainUrl.data[0].slope}  alt="slope" />:<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
            <p style={{color:"white"}}>Above map gives us the brief idea about the slope of India.
Here, White region represent no slope and dark brown region represent higher slope. High intensity of brown colour represents high slope.</p>
            <hr/>
            <hr />
            <h4 id="output">Output Map</h4>
            {
                mainUrl && mainUrl.data ?<img className="map-img" src={mainUrl.data[0].output}  alt="output" />:<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            }
            <p style={{color:"white"}}>Above colour coded map gives us the information about landlide prone regions in India. 
Here, yellow region with red & blue dots represent area which is more prone to landslide & have safety-factor less then 1 and 0.75 respectively. Green region represent area with no landslide risk with safety-factor more then 1.</p>
            <hr/>
        </div>
        </>
    )
}

export default ColorCodedMap;
