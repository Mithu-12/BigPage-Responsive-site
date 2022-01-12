import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <div id='service'>
            <div className="services-container">
                <Container>
                <div className="services-info">
                    <h1 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">SERVICES</h1>
                    <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100">Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.</p>
                </div>
                <div className="service">
                <Row>
                    <Col xs={12} md={4} className='services' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1300">
                    <div className="icon"><i class="fas fa-envelope"></i></div>
                    <div className="icon-info">
                        <h5>Dolor Sitema</h5>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    </Col>
                    <Col xs={12} md={4} className='services' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1600">
                    <div className="icon"><i class="fas fa-calendar-check"></i></div>
                    <div className="icon-info">
                        <h5>Dolor Sitema</h5>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    </Col>
                    <Col xs={12} md={4} className='services' data-aos="fade-up" data-aos-delay="50" data-aos-duration="1900">
                    <div className="icon"><i class="fas fa-binoculars"></i></div>
                    <div className="icon-info">
                        <h5>Dolor Sitema</h5>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='services' data-aos="fade-up" data-aos-delay="50" data-aos-duration="2200">
                    <div className="icon"><i class="fas fa-wifi"></i></div>
                    <div className="icon-info">
                        <h5>Dolor Sitema</h5>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    </Col>
                    <Col xs={12} md={4} className='services' data-aos="fade-up" data-aos-delay="50" data-aos-duration="2500">
                    <div className="icon"><i class="far fa-sun"></i></div>
                    <div className="icon-info">
                        <h5>Dolor Sitema</h5>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    </Col>
                    <Col xs={12} md={4} className='services' data-aos="fade-up" data-aos-delay="50" data-aos-duration="3000" data-aos-offset="50" data-aos-easing="ease-in-out">
                    <div className="icon"><i class="far fa-calendar-alt"></i></div>
                    <div className="icon-info">
                        <h5>Dolor Sitema</h5>
                        <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                    </Col>
                </Row>
                
                </div>
                </Container>

            </div>
        </div>
    );
};

export default Services;