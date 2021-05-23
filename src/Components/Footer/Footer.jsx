import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faGoogle, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <div className="footer">

            <div className="services">
                <h4>Services</h4>
                <Fade left big cascade>
                    <h6>Overview</h6>
                    <h6>Design</h6>
                    <h6>Machine Learning</h6>
                    <h6>Collaborate</h6>
                    <h6>API Development</h6>
                </Fade>
            </div>
            <div className="contactUs">

                <h4>Contact Us </h4>
                <Fade top big cascade>
                    <h6>Instagram  <FontAwesomeIcon icon={faInstagram} /></h6>
                    <h6>Twitter  <FontAwesomeIcon icon={faTwitter} /></h6>
                    <h6>Gmail <FontAwesomeIcon icon={faGoogle} /></h6>
                    <h6>Linked In <FontAwesomeIcon icon={faLinkedin} /></h6>
                    <h6>Youtube <FontAwesomeIcon icon={faYoutube} /></h6>
                    <h6>Facebook <FontAwesomeIcon icon={faFacebookF} /></h6>
                </Fade>
            </div>
            <div className="knowMore">
                <h4>About</h4>
                <Fade right big cascade>
                    <h6>Stories</h6>
                    <h6>Blog</h6>
                    <h6>Community</h6>
                    <h6>Careers</h6>
                    <h6>Brand Assests</h6>
                    <h6>Sponsors</h6>
                </Fade>
            </div>
        </div>
    )
}

export default Footer;
