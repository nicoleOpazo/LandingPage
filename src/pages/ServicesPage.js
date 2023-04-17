import React from 'react';
import '../assets/Styles.css'

import { NavBarComponent } from '../components';

const ServicesPage = () => {
    return (
        <div>
            <NavBarComponent />
            <div
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
                <h1>2aló</h1>
            </div>
        </div>
    );
}

export default ServicesPage;