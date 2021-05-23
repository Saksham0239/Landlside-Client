import axios from "axios";
//https://land-slide-auth-api.herokuapp.com/weather/
export const getWeatherData=async(city)=>{
    const weatherData=await axios.post(`https://land-slide-auth-api.herokuapp.com/weather`,city);
    console.log("Weather data");
    return weatherData;
}