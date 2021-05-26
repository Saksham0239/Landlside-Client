import React from 'react';
import Navbar from "../Navbar/CustomNavbar1.jsx";
import "./styles.css";
import Footer from "../Footer/Footer.jsx"
import Fade from 'react-reveal/Fade';


function AboutLandSlides() {
    return (
        <>
        <img src="/bg-newImg.jpg" id="article-bg" alt="bg-img-1"/>
            <Navbar />
            <div className="container-fluid" id="bg" style={{ paddingTop: "10%" }}>
                <h1>Landslides</h1>
                <Fade top cascade big>
                <div>
                    <h3>What causes landslides and debris flows</h3>
                    <p>Landslides are caused by disturbances in the natural stability of a slope. They can accompany heavy rains or follow droughts, earthquakes, or volcanic eruptions. Mudslides develop when water rapidly accumulates in the ground and results in a surge of water-saturated rock, earth, and debris. Mudslides usually start on steep slopes and can be activated by natural disasters. Areas where wildfires or human modification of the land have destroyed vegetation on slopes are particularly vulnerable to landslides during and after heavy rains.</p>
                </div>
                <div>
                    <br />
                    <br />
                    <h3>
                        Health threats from landslides and debris flows
                </h3>
                    <p>In the United States, landslides and debris flows result in 25 to 50 deaths each year. The health hazards associated with landslides and mudflows include:</p>
                    <ul>
                        <li>Rapidly moving water and debris that can lead to trauma;</li>
                        <li>Broken electrical, water, gas, and sewage lines that can result in injury or illness; and</li>
                        <li>Disrupted roadways and railways that can endanger motorists and disrupt transport and access to health care.</li>
                    </ul>
                </div>
                <br />
                    <br />
                <div>
                    <h3>
                        What areas are at risk
                </h3>
                    <p>Some areas are more likely to experience landslides or mudflows, including:</p>
                    <ul>
                        <li>Areas where wildfires or human modification of the land have destroyed vegetation;</li>
                        <li>Areas where landslides have occurred before;</li>
                        <li>Steep slopes and areas at the bottom of slopes or canyons;</li>
                        <li>Slopes that have been altered for construction of buildings and roads;</li>
                        <li>Channels along a stream or river; and</li>
                        <li>Areas where surface runoff is directed.</li>
                    </ul>
                </div>
                <br />
                    <br />
                <div>
                    <h3>
                        What you can do to protect yourself
                </h3>
                    <h5>Before intense storms and rainfall</h5>
                    <ul>
                        <li>Assume that steep slopes and areas burned by wildfires are vulnerable to landslides and debris flows.</li>
                        <li>Learn whether landslides or debris flows have occurred previously in your area by contacting local authorities, a county geologist or the county planning department, state geological surveys or departments of natural resources, or university departments of geology.</li>
                        <li>Contact local authorities about emergency and evacuation plans.</li>
                        <li>Develop emergency and evacuation plans for your family and business.</li>
                        <li>Develop an emergency communication plan in case family members are separated.</li>
                        <li>If you live in an area vulnerable to landslides, consider leaving it.</li>
                    </ul>
                    <br />
                    <h5>During intense storms and rainfall</h5>
                    <ul>
                        <li>Listen to the radio or watch TV for warnings about intense rainfall or for information and instructions from local officials.</li>
                        <li>Be aware of any sudden increase or decrease in water level on a stream or creek that might indicate debris flow upstream. A trickle of flowing mud may precede a larger flow.</li>
                        <li>Look for tilted trees, telephone poles, fences, or walls, and for new holes or bare spots on hillsides.</li>
                        <li>Listen for rumbling sounds that might indicate an approaching landslide or mudflow.</li>
                        <li>Be alert when driving. Roads may become blocked or closed due to collapsed pavement or debris.</li>
                        <li>If landslide or debris flow danger is imminent, quickly move away from the path of the slide. Getting out of the path of a debris flow is your best protection. Move to the nearest high ground in a direction away from the path. If rocks and debris are approaching, run for the nearest shelter and take cover (if possible, under a desk, table, or other piece of sturdy furniture).
</li>
                    </ul>
                    <br />
                    <h5>After a landslide or debris flow</h5>
                    <ul>
                        <li>Stay away from the site. Flooding or additional slides may occur after a landslide or mudflow.</li>
                        <li>Check for injured or trapped people near the affected area, if it is possible to do so without entering the path of the landslide or mudflow.</li>
                        <li>Listen to the radio or TV for emergency information.</li>
                        <li>Report broken utility lines to the appropriate authorities.</li>
                        <li>Consult a geotechnical expert (a registered professional engineer with soils engineering expertise) for advice on reducing additional landslide problems and risks. Local authorities should be able to tell you how to contact a geotechnical expert.</li>

                    </ul>
                </div>
                </Fade>
            </div>
            <Footer />
        </>
    )
}

export default AboutLandSlides;
