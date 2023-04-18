import React from 'react';
import '../assets/Styles.css'

import { NavBarComponent, SliderVideosComponent, SliderImgsComponent } from '../components';

const HomePage = () => {
    return (
        <div className='homePage'>
            <NavBarComponent/>
            {/* <SliderVideosComponent/> */}
            <SliderImgsComponent/>
        </div>
    );
}

export default HomePage;