import React from 'react';
import '../assets/Styles.css'

import { NavBarComponent, SliderVideosComponent, SliderImgsComponent, ServicesComponent, ProductsComponent, ContactComponent } from '../components';

const HomePage = () => {
    return (
        <div className='homePage'>
            <NavBarComponent/>
            {/* <SliderVideosComponent/> */}
            <SliderImgsComponent/>
            <ServicesComponent/>
            <ProductsComponent/>
            <ContactComponent/>
        </div>
    );
}

export default HomePage;