import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import './CountUp.css'

const CountNumber = () => {
    return (
        <div className='count-container'>
            <div className="count" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100">
            <Container>
            <div className="count-info">
                <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">FACTS</h2>
                <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
            <Row>
                <Col xs={6} md={3}>
                <div className="count-up">
                <CountUp end={232} duration={2}/>
                <h5>Clients</h5>
                </div>
                </Col>
                <Col xs={6} md={3}>
                <div className="count-up">
                <CountUp end={421} duration={2}/>
                <h5>Project</h5>
                </div>
                </Col>
                <Col xs={6} md={3}>
                <div className="count-up">
                <CountUp end={1364} duration={2}/>
                <h5>Hours Of Support</h5>
                </div>
                </Col>
                <Col xs={6} md={3}>
                <div className="count-up">
                <CountUp end={38} duration={2}/>
                <h5>Hard Workers</h5>
                </div>
                </Col>
            </Row>
            <div data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" className="count-image">
                <img src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/facts-img.png" alt="" />
            </div>
            </Container>
        </div>
        </div>
    );
};

export default CountNumber;