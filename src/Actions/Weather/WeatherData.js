import axios from "axios";

export const getWeatherData=async()=>{
    const weatherData=await axios.get("localhost:8000/weather");
    console.log("Weather data");
    return weatherData;
}