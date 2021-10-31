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
                    <h3>Safty security</h3>
                    <p>we are give best in the world service. And we provided best security Safty. so you can belive us for bset security. </p>
                    <h5>Read more <FontAwesomeIcon icon={faArrowRight}/></h5>
                </div>
            </div>
            <div className="blog">
                <div>
                    <img src={img2} alt="" />
                </div>
                <div className="bloge-half">
                    <h3>uk Trip</h3>
                    <p>London is the most visited city in the UK. In 2019, over 21.7 million visits were made to the city by international tourists. Edinburgh and Manchester ranked second, accounting for around 2.2 million and 1.7 million inbound visits respectively</p>
                    <h5>Read more <FontAwesomeIcon icon={faArrowRight}/></h5>
                </div>
            </div>
            <div className="blog">
                <div>
                    <img src={img3} alt="" />
                </div>
                <div className="bloge-half">
                    <h3>Grand Italy</h3>
                    <p>Grand Canal, Italian Canale Grande, main waterway of Venice, Italy, following a natural channel that traces a reverse-S course from San Marco Basilica to Santa Chiara Church and divides the city into two parts.</p>
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