import React, { useEffect, useState } from 'react';
import './Home.css'
import About from '../About/About';
import Banner from '../Banner/Banner';
import BannerItems from '../BannerItems/BannerItems';
import CardLightBox from '../CardLightBox/CardLightBox';
import Contact from '../Contact/Contact';
import CountNumber from '../CountUp/CountUp';
import Footer from '../Footer/Footer';
import OurClients from '../OurClients/OurClients';
import Progress from '../Progress/Progress';
import ProgressBar from '../ProgressBar/ProgressBar';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
const handleScroll = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
    return (
        <div>
            <button onClick={() => handleScroll()}id='btnScroll'>
            <i class="fas fa-arrow-up"></i>
            </button>
           <Banner></Banner> 
           <BannerItems></BannerItems>
           <About></About>
           <Services></Services>
           <Progress></Progress>
           <CountNumber></CountNumber>
           <ProgressBar></ProgressBar>
           <CardLightBox></CardLightBox>
           <OurClients></OurClients>
           <Testimonial></Testimonial>
           <Team></Team>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;