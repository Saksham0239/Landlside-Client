import React,{useEffect} from 'react';
import Navbar from "../Navbar/CustomNavbar1.jsx";
import "./styles.css";
import Footer from "../Footer/Footer.jsx";
import Fade from 'react-reveal/Fade';


function IndianLanslides() {
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
    }, [])
    return (
        <div>
            <>
        <img src="/landlside-img2.jpg" id="article-bg" alt="bg-img-1"/>
            <Navbar />
            <div className="container-fluid" id="bg" style={{ paddingTop: "10%" }}>
                <h1>List of worst landslides in India</h1>
                <br />
                <h3>In past years, there have been some serious and fatal landslides in India. Here is a list of worst landslides  that you should know:</h3>
                <br />
                <Fade left big cascade>
                <ul>
                    <li>
                        <h4><strong style={{color:"yellowgreen"}}>Guwahati landslide, Assam:</strong> The landslide took place on September 18, 1948 due to heavy rains. Over 500 people died in the landslide and according to the reports, the landslide buried an entire village</h4>
                    </li>
                    <hr />
                    <li>
                        <h4>
                            <strong style={{color:"yellowgreen"}}>Darjeeling landslide, West Bengal:</strong> The landslide happened around October 4, 1968. The landslide was triggered by floods and the 60 km long highway was cut in 91 parts. As per reports, thousands of people died in the landslide
                        </h4>
                    </li>
                    <hr />
                    <li>
                        <h4><strong style={{color:"yellowgreen"}}>Malpa landslide, Uttarakhand:</strong> Consecutives landslides occurred  between August 11 and August 17 in 1998 in the village of Malpa where over 380 people died as the entire village washed away in the landslide. The landslide is one of the worst landslides in India</h4>
                    </li>
                    <hr />
                    <li>
                        <h4><strong style={{color:"yellowgreen"}}>Mumbai landslide, Maharashtra:</strong> The landslide was caused in July 2000. The landslide took place in the suburbs of Mumbai due heavy rains which was followed by land erosion. As per reports around 67 people died and the local trains were also stricken</h4>
                    </li>
                    <hr />
                    <li>
                        <h4><strong style={{color:"yellowgreen"}}>Amboori landslide, Kerala:</strong> The landslide was known as the worst landslide in Kerala's history. The landslide occurred on November 9, 2001 due to heavy rains and around 40 people died in the incident</h4>
                    </li>
                    <hr />
                    <li>
                        <h4><strong style={{color:"yellowgreen"}}>Kedarnath landslide, Uttarakhand:</strong> The landslide took place on June 16, 2013 and was the result of Uttarakhand floods. Over 5700 were reported dead and over 4,200 villages had been affected by the floods and post-floods landslide</h4>
                    </li>
                    <hr />
                    <li>
                        <h4><strong style={{color:"yellowgreen"}}>Malin landslide, Maharashtra:</strong> The landslide occurred on July 30, 2014, in a village in Malin. The landslide occurred due to heavy rainfall and around 151 people died and 100 people went missing after the disaster.</h4>
                    </li>
                    <hr />
                </ul>
                </Fade>
                
            </div>
            <Footer />
        </>
        </div>
    )
}

export default IndianLanslides
