import React from 'react';
import '../assets/Styles.css'

import { NavBarComponent, SliderVideosComponent, SliderImgsComponent, ServicesComponent, ProductsComponent, ContactComponent, AboutUsComponent } from '../components';

const HomePage = () => {
    return (
        <div className='homePage'>
            <NavBarComponent/>
            {/* <SliderVideosComponent/> */}
            <SliderImgsComponent/>
            <AboutUsComponent/>
            <ServicesComponent/>
            <ProductsComponent/>
            <ContactComponent/>
        </div>
    );
}

export default HomePage;