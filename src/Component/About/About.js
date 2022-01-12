import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="about" id="about">
            <div className='about-section'>
                <div className="about-hero">
                    <h2 data-aos="fade-up">ABOUT US</h2>
                    <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Container>
                <Row xs={1} md={3} className="g-4">
                   <Col>
                        <Card data-aos="fade-up" data-aos-duration="1000">
                            <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/about-mission.jpg" />
                            <Card.Body>
                                <div className="about-font">
                                <i class="fas fa-wifi"></i>
                                </div>
                                <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                   <Col>
                        <Card data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500" data-aos-easing="ease-in-out">
                            <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/about-plan.jpg" />
                            <Card.Body>
                                <div className="about-font">
                                <i class="far fa-sun"></i>
                                </div>
                                <Card.Title>Our Plan</Card.Title>
                            <Card.Text>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                   <Col>
                        <Card data-aos="fade-up" data-aos-delay="50" data-aos-duration="2000">
                            <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/about-vision.jpg" />
                            <Card.Body>
                            <div className="about-font">
                            <i class="far fa-calendar-alt"></i>
                                </div>
                            <Card.Title>Our Vision</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;