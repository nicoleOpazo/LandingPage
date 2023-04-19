import React from 'react';
import '../assets/Styles.css'

import { NavBarComponent, SliderVideosComponent, SliderImgsComponent, ServicesComponent, CatalogueComponent, ContactComponent } from '../components';
import CataloguePage from './CataloguePage';

const HomePage = () => {
    return (
        <div className='homePage'>
            <NavBarComponent/>
            {/* <SliderVideosComponent/> */}
            <SliderImgsComponent/>
            {/* <CataloguePage/> */}
            <ServicesComponent/>
            <CatalogueComponent/>
            <ContactComponent/>
        </div>
    );
}

export default HomePage;