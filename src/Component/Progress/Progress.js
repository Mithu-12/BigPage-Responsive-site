import React from 'react';
import { Container } from 'react-bootstrap';
import SkillBar from 'react-skillbars';
import './Progress.css'

const Progress = () => {
    const skills = [
        {type: "HTML", level: 100},
        {type: "CSS", level: 90},
        {type: "JAVASCRIPT", level: 75},
        {type: "PHOTOSHOP", level: 55}
      ];
      
    return (
        <div>
            <Container data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">
                <div className="progress-content">
                    <h2 data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000">OUR SKILLS</h2>
                    <p data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
                <SkillBar skills={skills} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1500"/>
            </Container>
        </div>
    );
};

export default Progress;