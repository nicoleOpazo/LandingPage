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
            <h1 style={{ textAlign: 'center' }}>services</h1>

            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Card className='card'>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/rpa-concept-with-blurry-hand-touching-screen_23-2149311914.jpg?w=1060&t=st=1682369791~exp=1682370391~hmac=3a9ac4a613df2e510186c77d0e01fbdd3e318a3cb6fe115c7123334cb1d8238a" className='img-card' />
                    <Card.Body className='card-body'>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='btn'>Read More</Button>
                    </Card.Body>
                </Card>

                <Card className='card'>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/close-up-view-woman-s-hands-typing-keyboard-young-people-working-call-center-new-deals-is-coming_146671-17373.jpg?w=1060&t=st=1682369798~exp=1682370398~hmac=94eb3ce64653d6a7046e6e03dc33f66117d035ac8b4af46859b9a8b46df34c57" className='img-card' />
                    <Card.Body className='card-body'>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='btn'>Read More</Button>
                    </Card.Body>
                </Card>


                <Card className='card'>
                    <Card.Img variant="top" src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-121525.jpg?w=1060&t=st=1682370087~exp=1682370687~hmac=a1f3f33b43fa6dd600b9c603da4875df3f77ef9f3fb2000d46d9004a4c48ae54" className='img-card' />
                    <Card.Body className='card-body'>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button className='btn'>Read More</Button>
                    </Card.Body>
                </Card>
            </div>

        </div >
    );
};
export default ServicesComponent;

/* 
<div style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }>
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
*/