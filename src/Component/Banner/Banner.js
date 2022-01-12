import React, { useEffect } from 'react';
import './Banner.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Button, Carousel } from 'react-bootstrap';
import 'aos/dist/aos.css'
import Aos from 'aos'


const Banner = () => {
    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1600,
            easing: 'ease-in-out',
            delay: 100,
            disable: 'mobile'
        })
    }, [])
    return (
        <div className="banner-containers">
            <Carousel fade >
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src='https://bootstrapmade.com/demo/templates/BizPage/assets/img/hero-carousel/1.jpg'
                        alt="First slide"
                    />
                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                                
                                <h1 data-aos='fade-down'>We are professional</h1>
                                <p data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <Button data-aos='fade-up' className="btn btn-style">Get Started</Button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src='https://bootstrapmade.com/demo/templates/BizPage/assets/img/hero-carousel/4.jpg'
                        alt="Second slide"
                    />

                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                                
                                <h1 data-aos='fade-down'>At vero eos et accusamus</h1>
                                <p data-aos='fade-up'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.</p>
                                <Button data-aos='fade-up' className="btn btn-style">Get Started</Button>

                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/hero-carousel/2.jpg"
                        alt="Third slide"
                    />

                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                                
                                <h1 data-aos='fade-down'>Temporibus autem quibusdam</h1>
                                <p data-aos='fade-up'>Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.</p>
                                <Button data-aos='fade-up' className="btn btn-style">Get Started</Button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/hero-carousel/3.jpg"
                        alt="Third slide"
                    />

                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                                
                                <h1 data-aos='fade-down'>Nam libero tempore</h1>
                                <p data-aos='fade-up'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.</p>
                                <Button data-aos='fade-up' className="btn btn-style">Get Started</Button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Banner;