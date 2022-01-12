import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="footer">
            <Container className="">
                <Row className='footer-container'>
                    <Col xs={12} md={3}>
                        <div className="footer-items">
                        <div className="footer-item">
                           <h1>BizPage</h1>
                           <span></span>
                           <p className='mt-3'>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.
                            </p>
                        </div>
                        
                        </div>
                        
                    
                    </Col>
                    <Col xs={12} md={3}>
                       <div className="footer-item1">
                           <h5>USEFUL LINKS</h5>
                                <div className="footer-link">
                                <i class="fas fa-chevron-right"></i>
                                <p><a href="#">Home</a></p>
                                </div>
                                <div className="footer-link">
                                <i class="fas fa-chevron-right"></i>
                                <p><a href="#about">About Us</a></p>
                                </div>
                                <div className="footer-link">
                                <i class="fas fa-chevron-right"></i>
                                <p><a href="#service">Services</a></p>
                                </div>
                                <div className="footer-link">
                                <i class="fas fa-chevron-right"></i>
                                <p><a href="#">Terms of Service</a></p>
                                </div>
                                <div className="footer-link">
                                <i class="fas fa-chevron-right"></i>
                                <p><a href="#">Privacy Policy</a></p>
                                </div>
                         </div>
                        </Col>
                        <Col xs={12} md={3}>
                        <div className="footer-item1">
                            <h5>CONTACT US</h5>
                                <p>A108 Adam Street<br/>
                                    New York, NY 535022<br/>
                                    United States<br/>
                                    Phone: +1 5589 55488 55<br/>
                                    Email: info@example.com</p>
                                <div className="footer-icon">
                                <span><i class="fab fa-facebook"></i></span>
                                <span><i class="fab fa-instagram"></i></span>
                                <span><i class="fab fa-twitter"></i></span>
                                <span><i class="fab fa-linkedin"></i></span>
                                </div>
                            </div>
                        
                        </Col>
                        <Col xs={12} md={3}>
                        <div className="footer-item1">
                            <h5>OUR NEWSPAPER</h5>
                           <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                           <form className='footer-input'>
                               <input type="email" />
                               <input type="submit" value="Subscribe" />
                           </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="footer-reserve">
            <p>© Copyright BizPage. All Rights Reserved<br/>
            Designed by <span>Mithu Chandra Vowmick</span></p>
        </div>
        </div>
    );
};

export default Footer;