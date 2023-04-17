import React from 'react';
import '../assets/Styles.css'

import { NavBarComponent, BannerComponent } from '../components';

const HomePage = () => {
    return (
        <div className='homePage'>
            <NavBarComponent/>
            <BannerComponent/>
        </div>
    );
}

export default HomePage;