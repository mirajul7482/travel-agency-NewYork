import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'
import img from '../img/img2.jpg'
import img2 from '../img/img3.jpg'


import { faFacebook, faGithub, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer " fixed="bottom">
            <div>
                <h2>About Medico</h2>
                <p>Medico provides the highest quality concierge medicine services and assistance navigating today's complex healthcare environment for any individual desiring personalized medical care from their physician.</p>
            </div>
            <div>
                <h2>Quick Links</h2>
                <h4> <Link to="/home">Main services</Link></h4>
                <h4> <Link to="/aboutus">Abou us</Link></h4>
                <h4> <Link to="/login">Log In</Link></h4>
            </div>
            <div>
                <h2>Social Link</h2>
                <FontAwesomeIcon className="icon" icon={faFacebook}/>
                <FontAwesomeIcon className="icon" icon={faTwitter}/>
                <FontAwesomeIcon className="icon" icon={faYoutube}/>
                <br />
                <FontAwesomeIcon className="icon" icon={faInstagram}/>
                <FontAwesomeIcon className="icon" icon={faGithub}/>



            </div>
            <div>
                <h2>Latest News</h2>
                <div className="d-flex">
                    <img src={img} alt="" />
                    <div>
                        <h4>Constant check</h4>
                        <p>Seamlessly embrace client-based solutions rather t...</p>
                    </div>
                </div>
                <div className="d-flex">
                    <img src={img2} alt="" />
                    <div>
                        <h4>Early stimulation</h4>
                        <p>Seamlessly embrace client-based solutions rather t...</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;