import React from 'react';

import '../assets/Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import conejudo from '../assets/cone.jpeg'
import conejudo2 from '../assets/cone2.jpeg'
import chimi from '../assets/chimi.jpeg'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaMedapps } from 'react-icons/fa';

function ServicesComponent() {
    return (
        <div id='services'>
            <h1 style={{textAlign: 'center'}}>services</h1>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
                    <a href="https://www.instagram.com/" >
                        <FaMedapps className='icon' />
                        <br />
                        <p>
                            Some quick example text to build
                            on the card title and make up
                            the bulk of the card's content.
                        </p>
                    </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
                    <a href="https://www.instagram.com/" >
                        <FaMedapps className='icon' />
                        <br />
                        <p>
                            Some quick example text to build
                            on the card title and make up
                            the bulk of the card's content.
                        </p>
                    </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="https://www.instagram.com/" >
                        <FaMedapps className='icon' />
                        <br />
                        <p>
                            Some quick example text to build
                            on the card title and make up
                            the bulk of the card's content.
                        </p>
                    </a>
                </div>
            </div>    

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
                    <a href="https://www.instagram.com/" >
                        <FaMedapps className='icon' />
                        <br />
                        <p>
                            Some quick example text to build
                            on the card title and make up
                            the bulk of the card's content.
                        </p>
                    </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginRight: '50px' }}>
                    <a href="https://www.instagram.com/" >
                        <FaMedapps className='icon' />
                        <br />
                        <p>
                            Some quick example text to build
                            on the card title and make up
                            the bulk of the card's content.
                        </p>
                    </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="https://www.instagram.com/" >
                        <FaMedapps className='icon' />
                        <br />
                        <p>
                            Some quick example text to build
                            on the card title and make up
                            the bulk of the card's content.
                        </p>
                    </a>
                </div>
            </div>

        </div>
    );
};
export default ServicesComponent;

/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={conejudo} className='tarjeta' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={conejudo2} className='tarjeta' />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={chimi} className='tarjeta' />
                <Card.Body>
                    <Card.Title>Espécimen número 3</Card.Title>
                    <Card.Subtitle>Chimichurri en posición rara</Card.Subtitle>
                    <Card.Text>
                        Este tercer espécimen se encuentra en su habitad natural: su casita.
                    </Card.Text>
                    <Button variant="primary">Aprende más sobre: El Chimichurri</Button>
                </Card.Body>
            </Card> */