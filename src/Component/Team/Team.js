import React from 'react';
import './Team.css'
import { Card, Col, Collapse, Container, Row } from 'react-bootstrap';

const Team = () => {
    return (
        <div className="team-container">
            <Container>
                <div className="team-info">
                    <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100">TEAM</h2>
                    <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                </div>
            <Row xs={1} md={4} className="g-4">
                <Col>
                <Card data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100">
                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/team-1.jpg" />
                </Card>
                </Col>
                <Col>
                <Card data-aos="fade-up" data-aos-delay="50" data-aos-duration="1300">
                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/team-2.jpg" />
                </Card>
                </Col>
                <Col>
                    <Card data-aos="fade-up" data-aos-delay="50" data-aos-duration="1600">
                        <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/team-3.jpg" />
                    </Card>
                 </Col>
                <Col>
                <Card data-aos="fade-up" data-aos-delay="50" data-aos-duration="1900">
                    <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/BizPage/assets/img/team-4.jpg" />
                </Card>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Team;