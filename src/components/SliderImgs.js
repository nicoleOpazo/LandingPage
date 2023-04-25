import React, { useState, useEffect } from 'react';

import '../assets/Styles.css'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const SliderImgsComponent = () => {
    //Se define una variable de estado llamada activeSlide que almacena el índice de la imagen activa en el slider.
    //y una función para actualizar su valor llamada setActiveSlide.
    //La variable de estado inicialmente se establece en 0.
    const [activeSlide, setActiveSlide] = useState(0);
    const [previousSlide, setPreviousSlide] = useState(null);

    //Se define la función sliderNav que toma un parámetro " index "
    function sliderNav(index) {
        setPreviousSlide(activeSlide);
        setActiveSlide(index);
    }

    //Se utiliza el hook useEffect para actualizar el valor de activeSlide cada 10 segundos.
    //Se crea un intervalo que se ejecuta cada 10 segundos y llama a la función sliderNav con el índice de la siguiente imagen.
    useEffect(() => {
        const interval = setInterval(() => {
            let nextSlide = activeSlide + 1;
            //Si el índice es mayor que el número total de imágenes (2), se reinicia a 0.
            if (nextSlide > 2) {
                nextSlide = 0;
            }
            sliderNav(nextSlide);
        }, 10000); //En milisegundos (10 segundos)

        return () => clearInterval(interval);
    }, [activeSlide]);
    //La función useEffect se ejecuta cada vez que activeSlide cambia y devuelve una función que borra el intervalo.

    return (
        <section id='sliderdeimgs' className="home">
            <div className="slider-wrapper" style={{ width: '100%', display: 'flex' }}>

                <img className={activeSlide === 0 ? 'image-slide active' : 'image-slide previous'} src="https://live.staticflickr.com/65535/52828777790_e1455f743c_c.jpg"></img>

                <img className={activeSlide === 1 ? 'image-slide active' : 'image-slide previous'} src="https://live.staticflickr.com/65535/52828558904_a7714ca6e0_c.jpg"></img>

                <img className={activeSlide === 2 ? 'image-slide active' : 'image-slide previous'} src="https://live.staticflickr.com/65535/52827801807_dce43ae968_c.jpg"></img>
            </div>

            <div className={activeSlide === 0 ? 'content active' : 'content'}>
                <h1>Título 1.<br /><span>Subtítulo 1</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More</a>
            </div>

            <div className={activeSlide === 1 ? 'content active' : 'content'}>
                <h1>Título 2.<br /><span>Subtítulo 2</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More</a>
            </div>

            <div className={activeSlide === 2 ? 'content active' : 'content'}>
                <h1>Título 3.<br /><span>Subtítulo 3</span></h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
                </p>
                <a href="/readmore">Read More</a>
            </div>

            <div className="media-icons">
                <a href="https://facebook.com/"><FaFacebook /></a>
                <a href="https://www.instagram.com/"><FaInstagram /></a>
                <a href="https://twitter.com/"><FaTwitter /></a>
            </div>

            <div className="slider-navigation">
                <div className={activeSlide === 0 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(0)}></div>
                <div className={activeSlide === 1 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(1)}></div>
                <div className={activeSlide === 2 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(2)}></div>
            </div>

        </section>

    );
};
export default SliderImgsComponent;

/*
//Se define una variable de estado llamada activeSlide y una función para actualizar su valor llamada setActiveSlide.
//La variable de estado inicialmente se establece en 0.
const [activeSlide, setActiveSlide] = useState(0);

//Se define la función sliderNav que toma un parámetro " index "
const sliderNav = (index) => {
    //Se llama a la función setActiveSlide para actualizar el valor de la variable de estado activeSlide con el valor del parámetro index
    setActiveSlide(index);
};

useEffect(() => {
    const interval = setInterval(() => {
        let nextSlide = activeSlide + 1;
        if (nextSlide > 2) {
            nextSlide = 0;
        }
        sliderNav(nextSlide);
    }, 10000); //En milisegundos

    return () => clearInterval(interval);
}, [activeSlide]);

<section id='sliderdeimgs' className="home">
    <div className="slider-wrapper" style={{ width: '100%', display: 'flex' }}>
        <img className={activeSlide === 0 ? 'image-slide active' : 'image-slide'} src="https://live.staticflickr.com/65535/52828777790_e1455f743c_c.jpg"></img>
        <img className={activeSlide === 1 ? 'image-slide active' : 'image-slide'} src="https://live.staticflickr.com/65535/52828558904_a7714ca6e0_c.jpg"></img>
        <img className={activeSlide === 2 ? 'image-slide active' : 'image-slide'} src="https://live.staticflickr.com/65535/52827801807_dce43ae968_c.jpg"></img>
    </div>

    <div className={activeSlide === 0 ? 'content active' : 'content'}>
        <h1>Título 1.<br /><span>Subtítulo 1</span></h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
        </p>
        <a href="/readmore">Read More</a>
    </div>

    <div className={activeSlide === 1 ? 'content active' : 'content'}>
        <h1>Título 2.<br /><span>Subtítulo 2</span></h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
        </p>
        <a href="/readmore">Read More</a>
    </div>

    <div className={activeSlide === 2 ? 'content active' : 'content'}>
        <h1>Título 3.<br /><span>Subtítulo 3</span></h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie. Non consectetur a erat nam at lectus urna duis.
        </p>
        <a href="/readmore">Read More</a>
    </div>

    <div className="media-icons">
        <a href="https://facebook.com/"><FaFacebook /></a>
        <a href="https://www.instagram.com/"><FaInstagram /></a>
        <a href="https://twitter.com/"><FaTwitter /></a>
    </div>

    <div className="slider-navigation">
        <div className={activeSlide === 0 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(0)}></div>
        <div className={activeSlide === 1 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(1)}></div>
        <div className={activeSlide === 2 ? 'nav-btn active' : 'nav-btn'} onClick={() => sliderNav(2)}></div>
    </div>

</section>
*/