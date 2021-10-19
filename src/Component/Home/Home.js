import { faArrowCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Accordion, Carousel } from 'react-bootstrap';
import caroselimg1 from '../img/carosel-img1.jpg'
import caroselimg2 from '../img/carosel-img2.jpg'
import caroselimg3 from '../img/carosel-img3.jpg'
import img4 from '../img/ped_01.jpg'

import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const [services, setservices] = useState([]);

    useEffect(() =>{
        fetch('./service.json')
        .then(res => res.json())
        .then(data => setservices(data))
    }, [])
    return (
        <div>
            <header>
            <Carousel className="carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src={caroselimg1}
                    alt="First slide"
                    />
                    <Carousel.Caption >
                    <h1>We take care of your baby's health</h1>
                    <p>Seamlessly fabricate interactive platforms for equity invested leadership skils. Seamlessly expliot cost effective.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src={caroselimg2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>With specialized doctors</h1>
                    <h4>Who love children.</h4>
                    <p>We give best sevice with special doctors. there trainfull and there take care of the student very carefully. So you can blive us for you child </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src={caroselimg3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>We are best for your child</h1>
                    <p>You can desrve us for your chiled best . because we can do it. and we are the best service in the world </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </header>
            <div className="service-container">
                {
                    services.slice(0,6).map(service => <Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
            <div className="blog">
                <div className="blog-half">
                    <h1>Frequently Questions</h1>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Professional Expertise</Accordion.Header>
                            <Accordion.Body >
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Innovation & Technology</Accordion.Header>
                            <Accordion.Body>
                            Innovation is a human-centered perspective and process. ... Innovation can be intangible, as opposed to technology, which is tangible. You can even apply the innovation process to your everyday life. Technology can be used to implement innovation, but the technology itself doesn't produce innovation.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>quality and safety</Accordion.Header>
                            <Accordion.Body>
                            The Journal encourages the science of improvement, debate, and new thinking on improving the quality of healthcare. The journal is led by a patient-focused editorial team with a view towards helping all team members improve their knowledge with the overall goal of improving patient care. The journal integrates the academic and clinical aspects of quality and safety in healthcare by encouraging academics to create evidence and knowledge valued by clinicians and clinicians to value using evidence and knowledge to improve quality.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>About Insurance</Accordion.Header>
                            <Accordion.Body>
                            Anim pariatur cliche rFind Medical Insurance In Us. Unlimited Access. 100% Secure. Always Facts. Privacy Friendly. The Best Resources. Results  Answers. Types: Best Results, Explore Now, New Sources, Best in Search.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
                <div className="blog-half">
                    <h2>Benefits for insured</h2>
                    <div>
                        <h3>Infections Control</h3>
                        <p>Infection prevention and control (IPC) is a practical, evidence-based approach which prevents patients and health workers from being harmed</p>
                    </div>
                    <div>
                        <h3>Pharmacy 24/7</h3>
                        <p>As finding a pharmacy that's open late at night can sometimes be a challenge, we've compiled a list of pharmacies that open after hours.</p>
                    </div>
                    <div>
                        <h3>Injectables</h3>
                        <p>There are three main types of injectables. ... The first category consists of neuromodulators, which are used to weaken and paralyze the muscles</p>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div>
                    <img src={img4} alt="" />
                </div>
                <div className="caption">
                    <h3>Constant check</h3>
                    <p>Seamlessly embrace client-based solutions rather than fully researched imperatives. Quickly develop sticky mindshare through standards compliant bandwidth. Collaboratively coordinate holistic systems ...</p>
                    <h6>Read more <FontAwesomeIcon icon={faArrowRight}/></h6>
                </div>
            </div>
        </div>
    );
};

export default Home;