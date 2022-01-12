import React from 'react';
import './BannerItems.css'
import { Col, Container, Row } from 'react-bootstrap';

const BannerItems = () => {
    return (
        <div  className='banner-container'>
            <Container>
            <Row>
                
                <Col xs={12} md={4}>
                    <div className="banner-content">
                <i class="fas fa-envelope"></i>
                <h4>Lorem Ipsum Delino</h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditates non provident</p>
                </div>
                </Col>
                
                <Col xs={12} md={4}>
                    <div className="banner-content banner-single">
                <i class="fas fa-calendar-check"></i>
                <h4>Dollar Simmet</h4>
                <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
                </Col>
                
                
                <Col xs={12} md={4}>
                <div className="banner-content">
                <i class="fas fa-binoculars"></i>
                <h4>Sed ut perspiciatis</h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                </Col>
                
                </Row>
            </Container>
        </div>
    );
};

export default BannerItems;