import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './CardLightBox.css'



const images =  [
	{ id: '1', imageName: 'img1.jpg', tag1: 'Web', cardName: 'Web1' },
	{ id: '2', imageName: 'img2.jpg', tag1: 'App', cardName: 'App1' },
	{ id: '3', imageName: 'img3.jpg', tag1: 'Card', cardName: 'Card1' },
	{ id: '4', imageName: 'img4.jpg', tag1: 'Web', cardName: 'Web2' },
	{ id: '5', imageName: 'img5.jpg', tag1: 'Card', cardName: 'Card2' },
	{ id: '6', imageName: 'img6.jpg', tag1: 'App', cardName: 'App2' },
	{ id: '7', imageName: 'img6.jpg', tag1: 'Card', cardName: 'Card3' },
	{ id: '8', imageName: 'img8.jpg', tag1: 'App', cardName: 'App3' },
	{ id: '9', imageName: 'img9.jpg', tag1: 'Web', cardName: 'Web3' }

];

const Tagbutton = ({name, handleSetTag}) =>{
    return <li onClick={ () => handleSetTag(name)}>{name.toUpperCase() }</li>
          
}

const CardLightBox = () => {
    // console.log(tag)
    // const getColor = (curr) =>{

    // }
    const [tag1, setTag1] = useState('all');
    const [fliterImage, setFliterImage] = useState([]);
    useEffect(()=>{
        tag1 === 'all' ? setFliterImage(images) : setFliterImage(images.filter(image => image.tag1 === tag1))
    },[tag1])
    return (
        <div className="CardLightBox" handleSetTag={setTag1} data-aos="fade-up" data-aos-delay="50" data-aos-duration="1100">
            <div className="cardLight-info">
                <h2>OUR PORTFOLIO</h2>
            </div>
            <div className="cardLight-button">
            <ul>
            <Tagbutton className='active' name="all"  handleSetTag={setTag1}/>
            <Tagbutton name="App"  handleSetTag={setTag1}/>
            <Tagbutton name="Card"  handleSetTag={setTag1}/>
            <Tagbutton name="Web"  handleSetTag={setTag1}/>
            </ul>
            </div>
            <div>
                <Container>
                <Row xs={1} md={3} className='services-items my-5'>
                        {fliterImage.map(image =>(
                            <Col className='cardLight-col'>
                                <Card data-aos="fade-up" data-aos-delay="50" data-aos-duration="1300">
                                    <Card.Img variant="top" src={`/images/${image.imageName}`} />
                                    <Card.Body>
                                    <Card.Title>{image.cardName}</Card.Title>
                                    <Card.Text className='text-center'>
                                       {image.tag1}
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                                </Col>
                                ))
                         }
                       
                    </Row>
                </Container>
            </div>
        </div>
    );
};


export default CardLightBox;