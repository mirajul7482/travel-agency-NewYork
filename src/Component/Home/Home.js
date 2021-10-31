
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../img/sr1.png';
import img2 from '../img/sr2.jpg';
import img3 from '../img/sr3.jpg';
import img4 from '../img/download.jpg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Service from '../Service/Service';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
    const [services, setservices] = useState([]);

    useEffect(() =>{
        fetch('https://shrieking-blood-65013.herokuapp.com/services')
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
                    src="https://wander-lush.org/wp-content/uploads/2020/01/Phandar-Valley-Beautiful-places-in-Pakistan-Depositphotos.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption >
                    <h1>We are given best service in the worl for visitors</h1>
                    <p>If you are a visitor and you want visite in the world we can help you best. because our service is the best service in the world</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://www.touropia.com/gfx/b/2013/06/ottawa-1.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h1>We have an spatial pakage</h1>
                    <h4>Italian visite</h4>
                    <p>In this pakage you can visite italian all the wonderfull places .the pakage cost have 30% discount now </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPyIjx23FW3k1NoHwtUwAlvlOMi5Z1iZZbvkyQHxN4uc6ep9V_WWUGDZ7Y9mvxdYonhM&usqp=CAU"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h1>The world best tour</h1>
                    <p>If you are wont to know about world you have must need to visite in the world. We are belive able agency in the world</p>
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

            <div className="count">
                <div>
                <img src={img1} alt="" />
                    <h1>50</h1>
                    <h4>Our total Services</h4>
                </div>
                <div>
                <img src={img2} alt="" />
                    <h1>5550</h1>
                    <h4>Our Total Visitor</h4>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <h1>400</h1>
                    <h4>Total boking now</h4>
                </div>
            </div>
            <div className="blog">
                <div>
                    <img src={img4} alt="" />
                </div>
                <div className="bloge-half">
                    <h3>The Best visiting place</h3>
                    <p>In the world have many histry theat we cannot konow. If we read it but we are forget it. but if we are visite an area we can remember. it is importan for our healt also</p>
                    <h5>Read more <FontAwesomeIcon icon={faArrowRight}/></h5>
                </div>
            </div>
            
        </div>
    );
};

export default Home;