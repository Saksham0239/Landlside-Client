import React from 'react';
import Navbar from "../Navbar/CustomNavbar.jsx";
import "./Home.css";
import Footer from "../Footer/Footer.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faTree } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';



const Home = () => {
    return (
        <>

            <Navbar />
            <div className='hero-container' id="one">
                {/* <img src="/img1.jpg" alt="backImg" /> */}
                <video src='/videos/bg1.mp4' autoPlay loop muted />
                <Jump><h1>World should be safe from natural disasters</h1></Jump>
                <Jump><p>After a LandSlide. One more can be expected</p></Jump>
                <Link to={{pathname:"https://www.cdc.gov/disasters/landslides.html#:~:text=Landslides%20are%20caused%20by%20disturbances,rock%2C%20earth%2C%20and%20debris."}} target="_blank"><button className="btn btn-lg btn-outline-light">Explore More</button></Link>
            </div>

            <div id="landslides">
                <h1>What are Landslides</h1>
                <div className="data-img">
                    <Fade left><p>
                        A landslide is defined as the movement of a mass of rock, debris, or earth down a slope. Landslides are a type of "mass wasting," which denotes any down-slope movement of soil and rock under the direct influence of gravity. The term "landslide" encompasses five modes of slope movement: falls, topples, slides, spreads, and flows. These are further subdivided by the type of geologic material (bedrock, debris, or earth). Debris flows (commonly referred to as mudflows or mudslides) and rock falls are examples of common landslide types.</p>
                    </Fade>
                    <Fade right><img src="/landslideImg.gif" /></Fade>
                </div>
                <Link to={{pathname:"https://www.business-standard.com/article/current-affairs/12-indian-land-prone-to-landslides-as-climate-crisis-increases-the-risks-120100200239_1.html"}} target="_blank"><button className="btn btn-outline-light btn-lg">More About Lanslides</button></Link>
            </div>

            <div className="weather" id="weather">
                <Fade right big cascade>
                    <h1>Weather</h1>
                    <h4>We Also Provide Weather Service. Click on the button below. </h4>
                    <Link to="weather"><button className="btn btn-outline-light btn-lg">Weather</button></Link>
                </Fade>
            </div>
            <div className="factors" id="factors">
                <h1>Factors Effecting Landslides</h1>
                <Fade left big cascade>
                    <h4>1.Heavy Rainfall  <FontAwesomeIcon icon={faCloudRain} /></h4>
                    <h4>2.Deforestation   <FontAwesomeIcon icon={faTree} /></h4>
                    <h4>3.Soil Erosion    <FontAwesomeIcon icon={faBuilding} /></h4>
                </Fade>
                <p>We have considered all these factors and developed a model which will consider all these factors <br />
                    and construuct a color coded map which will show which areas are more prone to LandSlides. <br />
                    <em>Click on the button below to see that model.</em></p>
                <Link to="/coloredMaps"><button className="btn btn-outline-light btn-lg">Color Coded Map</button></Link>
            </div>
            <Footer />
        </>
    )
}

export default Home;
