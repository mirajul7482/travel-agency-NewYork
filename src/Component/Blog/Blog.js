import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import img1 from '../img/ped_01.jpg'
import img2 from '../img/ped_02.jpg'
import img3 from '../img/ped_03.jpg'
import img4 from '../img/ped_04.jpg'
import './blog.css'

const Blog = () => {
    return (
        <div className="container">
            <div className="blog">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className="bloge-half">
                    <h3>Early stimulation</h3>
                    <p>Seamlessly embrace client-based solutions rather than fully researched imperatives. Quickly develop sticky mindshare through standards compliant bandwidth. Collaboratively coordinate holistic systems ...</p>
                    <h5>Read more <FontAwesomeIcon icon={faArrowRight}/></h5>
                </div>
            </div>
            <div className="blog">
                <div>
                    <img src={img2} alt="" />
                </div>
                <div className="bloge-half">
                    <h3>Babys care</h3>
                    <p>Seamlessly embrace client-based solutions rather than fully researched imperatives. Quickly develop sticky mindshare through standards compliant bandwidth. Collaboratively coordinate holistic systems ...</p>
                    <h5>Read more <FontAwesomeIcon icon={faArrowRight}/></h5>
                </div>
            </div>
            <div className="blog">
                <div>
                    <img src={img3} alt="" />
                </div>
                <div className="bloge-half">
                    <h3>Children dentistry</h3>
                    <p>Seamlessly embrace client-based solutions rather than fully researched imperatives. Quickly develop sticky mindshare through standards compliant bandwidth. Collaboratively coordinate holistic systems ...</p>
                    <h5>Read more <FontAwesomeIcon icon={faArrowRight}/></h5>
                </div>
            </div>
            <div className="blog">
                <div>
                    <img src={img4} alt="" />
                </div>
                <div className="bloge-half">
                    <h3>Constant check</h3>
                    <p>Seamlessly embrace client-based solutions rather than fully researched imperatives. Quickly develop sticky mindshare through standards compliant bandwidth. Collaboratively coordinate holistic systems ...</p>
                    <h5>Read more <FontAwesomeIcon icon={faArrowRight}/></h5>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;