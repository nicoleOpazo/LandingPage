import React from 'react';

import '../assets/Styles.css'
import city from '../assets/city.png'
import city2 from '../assets/city2.png'
import city3 from '../assets/city3.png'
import city4 from '../assets/city4.png'
import city42 from '../assets/city4.2.png'
import city5 from '../assets/city5.png'

function AboutUsComponent() {
    return (
        <div id='about'>

            <table style={{color: '#797979'}}>

                <tr>
                    <th style={{ visibility: 'hidden' }}><h6>Column</h6></th>
                    <th style={{ visibility: 'hidden' }}><h5>Column 1</h5></th>
                    <th style={{ visibility: 'hidden' }}><h5>Column 3</h5></th>
                </tr>
                <tr className='contr-img'>
                    <th style={{ visibility: 'hidden' }}><h6>Column</h6></th>
                    <th>
                        <h6 style={{paddingTop: '40px'}}>VACATION RENTAL INVESTING, SIMPLIFIED</h6>
                        <h1 style={{color: '#f0f0f0', paddingBottom: '25px'}}>Own your future.</h1>
                        <p style={{fontWeight: '400', paddingBottom: '40px'}}>
                            We are the industry leading real state platform.
                            <br/>
                            And now we’re introducing the Wander REIT, the first and only institutional-grade, vacation rental investment product. Unlock access to this ascendant asset category and invest in the best of the best vacation rentals.
                        </p>
                        <a href="/readmore">Read More ➝</a>
                    </th>
                    <th className='conth-img'><img src={city4} alt=".." style={{ height: '500px' }} /></th>
                </tr>
                <tr>
                    <th style={{ visibility: 'hidden', paddingBottom: '20px' }}><h6>Column</h6></th>
                    <th style={{ visibility: 'hidden', paddingBottom: '20px' }}><h1>Column 1</h1></th>
                    <th style={{ visibility: 'hidden', paddingBottom: '20px' }}><h1>Column 3</h1></th>
                </tr>





                {/* <tr style={{ visibility: 'visible', borderColor: 'white' }}>
                    <h2>Dato</h2>
                </tr>
                <tr style={{ visibility: 'visible' }}>
                    <h3>Dato</h3>
                </tr>
                <tr>
                    <th>
                        <h1>Column 1</h1>
                        <p>Some text</p>
                    </th>

                    <th style={{ visibility: 'visible' }}>
                        <h1>Column 2</h1>
                        <p>Text</p>
                    </th>
                    <th style={{ visibility: 'visible' }}>
                        <h1>Column 3</h1>
                        <p>Text</p>
                    </th>

                    <th>
                        <img src={city4} alt=".." style={{ height: '500px' }} />
                    </th>
                </tr>
                <tr style={{ visibility: 'visible' }}>
                    <h2>Dato</h2>
                </tr> */}

            </table>

            {/* <div class="row">

                <div class="column left" style={{ backgroundColor: '#111' }}>
                    <h2>Column 1</h2>
                    <p>Some text..</p>
                </div>

                <div class="column right" style={{ backgroundColor: 'red' }}>
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar man" />
                </div>

            </div> */}



        </div>
    );
};
export default AboutUsComponent;