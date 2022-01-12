import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-container">
            <Container>
                <div className="contact-info">
                    <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100">CONTACT US</h2>
                    <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
                <Row >
                    <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1400">
                        <div className="contact-details">
                        <i class="fas fa-map-marker-alt"></i>
                        <h3>ADDRESS</h3>
                        <p>A108 Adam Street, NY 535022, USA</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500">
                        <div className="contact-details contact-border">
                        <i class="fas fa-mobile-alt"></i>
                        <h3>PHONE NUMBER</h3>
                        <p>+1 5589 55488 55</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1600">
                        <div className="contact-details">
                        <i class="far fa-envelope"></i>
                        <h3>EMAIL</h3>
                        <p>info@example.com</p>
                        </div>
                    </Col>
                </Row>
                <div className="contact-form" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1700">
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Name"/>
                    <input type="text" placeholder='Subject' />
                    <textarea placeholder="Message" rows="4" cols="50"></textarea>
                    <button className='form-button'>Send Message</button>
                </form>
                </div>
            </Container>
        </div>
    );
};

export default Contact;