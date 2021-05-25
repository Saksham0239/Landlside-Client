import React, { useState } from 'react';
import axios from "axios";
import "./Weather.css";
import Fade from 'react-reveal/Fade';
import {Link} from "react-scroll";
import Navbar from "../Navbar/CustomNavbar1";
// import {getWeatherData} from "../../Actions/Weather/WeatherData";

function Weather() {

    const APIKey = "58a9ba26e62db863ce3b57385b19a136";
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState("");


    const handleClick = async (e) => {
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`);
        // const data=await getWeatherData(city);
        console.log(data);
        setWeatherData(
            data.data
        );
    }
    return (
        <>
            <Navbar />
            <img id="bg-img" src="/web-img-2.jpg" alt="" />
            <Fade left>
            <div className="bg">
                <h1 style={{color:"white"}}>Weather Page</h1>
                <input type="text" className="form-control" name="city" id="city" onChange={(e) => { setCity(e.target.value) }} value={city}
                    placeholder="City Name" />
                <Link to="weather-desc"><button className="btn btn-outline-light btn-lg mt-3 mb-3" onClick={handleClick}>Double Click to view weather</button></Link>
            </div>
            </Fade>
            <div className="temp">
                {weatherData ?
                    <>
                        <Fade top>
                        <h1 id="weather-desc" style={{ textDecoration: "underline",color:"white" }}>Weather Description</h1>
                        </Fade>
                        <Fade right>
                         <img style={{height:"8%",width:"8%"}} src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="" /> 
                             <h2>{weatherData.name} , {weatherData.sys.country}</h2>
                            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                                <h4>Description : {weatherData.weather[0].description}</h4>
                            </div>
                            <div style={{ display: "flex", flexFlow: "column", alignItems: "center" }}>
                                <h4>Current Temprature : {weatherData.main.temp} C</h4>
                                <h4>Humidity : {weatherData.main.humidity}%</h4>
                                <h4>Wind Speed: {weatherData.wind.speed}Km/h</h4>
                            </div>
                        </Fade>

                    </>
                    :
                    "Enter a Valid City Name"
                }
            </div>
        </>
    )
}

export default Weather;
