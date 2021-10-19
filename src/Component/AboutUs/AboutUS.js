import React from 'react';
import img from '../img/banner.jpg'
import img2 from '../img/image_003.jpg'
import img3 from '../img/founder.jpg'

import './About.css'

const AboutUS = () => {
    return (
        <div>
           <header className="banner ">
               <img  src={img} alt="" />
           </header>
           <div className="aboutUs">
               <div className="about-right">
                    <h2>About Us</h2>
                    <p>Dr. Glenn Tripp, a Developmental Pediatrician with Mary Bridge Children's Health Center, shows you typical infant milestones and learning at the 6 months of age stage. Your baby likely know your face, plays, responds to name, passes toys hand to hand, rolls, sits and supports own weight in standing.</p>

                    <div className="founder d-flex">
                        <img src={img3} alt="" />
                        <div>
                            <h2>Dr. John Doe</h2>
                            <p>Pediatric and founder</p>
                        </div>
                    </div>
               </div>
               <div >
                <img className="w-75" src={img2} alt="" />
               </div>
           </div>
        </div>
    );
};

export default AboutUS;