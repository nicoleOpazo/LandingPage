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
            <h1>services</h1>

            <button className='btn-services'>
                <a href="https://www.instagram.com/">
                    <FaMedapps className='icon' />
                    <br/>
                    <p>
                        Some quick example text to build
                        on the card title and make up
                        the bulk of the card's content.
                    </p>
                </a>
            </button>

            <Card style={{ width: '18rem' }}>
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
            </Card>
        </div >
    );
};
export default ServicesComponent;

/*
<div>
    <NavBarComponent />
    <div className='catalogue'
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '100%',
            width: '100%'
        }}>
        <h1>3aló</h1>
    </div>
</div>
*/