import React from 'react';
import './OurClients.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from 'react-bootstrap';
import client1 from '../Images/client-1.png'
import client2 from '../Images/client-2.png'
import client3 from '../Images/client-3.png'
import client4 from '../Images/client-4.png'
import client5 from '../Images/client-5.png'
import client6 from '../Images/client-6.png'
import client7 from '../Images/client-7.png'
import client8 from '../Images/client-8.png'
const OurClients = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

    return (
        <div className="client-container" >
            <div className="client-info">
                <h2>OUR CLIENTS</h2>
            </div>
            <Container data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500">
            <Slider {...settings} data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500">
          <div className='client-img'>
            <img src={client1} alt="" />
          </div>
          <div className='client-img'>
          <img src={client2} alt="" />
          </div>
          <div className='client-img'>
          <img src={client3} alt="" />
          </div>
          <div className='client-img'>
          <img src={client4} alt="" />
          </div>
          <div className='client-img'>
          <img src={client5} alt="" />
          </div>
          <div className='client-img'>
          <img src={client6} alt="" />
          </div>
          <div className='client-img'>
          <img src={client7} alt="" />
          </div>
          <div className='client-img'>
          <img src={client8} alt="" />
          </div>
        </Slider>
            </Container>
        </div>
    );
};

export default OurClients;