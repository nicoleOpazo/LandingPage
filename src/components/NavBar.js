import React, { useRef } from 'react';

import '../assets/Styles.css'
import ServicesComponent from './Services';
import CatalogueComponent from './Catalogue';
import ContactComponent from './Contact';
import SliderImgsComponent from './SliderImgs';
import SliderVideosComponent from './SliderVideos';

function NavBarComponent() {
    const menuBtnRef = useRef(null);
    const navigationRef = useRef(null);

    const handleClick = () => {
        menuBtnRef.current.classList.toggle("active");
        navigationRef.current.classList.toggle("active");
    };

    return (
        <header>
            <a href="/" class="brand">Logo</a>
            <div class="menu-btn" ref={menuBtnRef} onClick={handleClick}></div>
            <div class="navigation" ref={navigationRef}>
                <div class="navigation-items">
                    <a href="/">Inicio</a>
                    <a href="/#services">Servicios</a>
                    <a href="/#catalogue">Catálogo</a>
                    <a href="/#contact">Contacto</a>

                    <div class="close-btn" ref={menuBtnRef} onClick={handleClick}></div>
                </div>
            </div>
        </header>
    );
};
export default NavBarComponent;