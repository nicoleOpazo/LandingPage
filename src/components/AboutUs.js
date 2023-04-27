import React from 'react';

import '../assets/Styles.css'
import aboutus from '../assets/us.jpg'

function AboutUsComponent() {
    return (
        <div id='about' className='container z-20 mx-auto flex items-center'>
            <div class="column">
                <h1>Nosotros</h1>
                <p>Contenido ...</p>
            </div>

            <div class="column">
                <img src='https://img.freepik.com/free-photo/real-estate-agent-handing-house-key-client_53876-20466.jpg?w=1060&t=st=1682541256~exp=1682541856~hmac=efd28aae63a8a3839e5843f495ecb87ebf74b51f6eff381ae6044e2806eede6d' alt='...'>
                </img>
            </div>

        </div>
    );
};
export default AboutUsComponent;