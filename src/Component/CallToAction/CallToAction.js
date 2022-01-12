import React from 'react';
import { Container } from 'react-bootstrap';
import './CallToAction.css'

const CallToAction = () => {
    return (
        <div className='callTo-container'>
            <Container className='call-content' data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500">
            <div className="callto-info" data-aos="zoom-in" data-aos-delay="50" data-aos-duration="1500">
                <h2>Call To Action</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>CALL TO ACTION</button>
            </div>
            </Container>
        </div>
    );
};

export default CallToAction;