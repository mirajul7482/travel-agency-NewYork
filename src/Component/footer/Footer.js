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
                <h2>About travel agency NewYork</h2>
                <p>NewYork travel agency is the best agency in the world it is very important that if wont to visite safly in world you can visite us</p>
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
                        <h4>Italian visitors</h4>
                        <p>Now we give up 30% off italian visitors.</p>
                    </div>
                </div>
                <div className="d-flex">
                    <img src={img2} alt="" />
                    <div>
                        <h4>Uk trip</h4>
                        <p>presntly most of the visitor like very much to visite Uk </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;