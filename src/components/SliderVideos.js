import React, { useState, useEffect } from 'react';

//import video from '../assets/video.mp4'
import vid1 from '../assets/vid1.mp4'
import vid2 from '../assets/vid2.mp4'
import vid3 from '../assets/vid3.mp4'
import '../assets/Styles.css'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const SliderVideosComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderNav = (index) => {
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

  return (
    <section className="home">
      <video className={activeSlide === 0 ? 'video-slide active' : 'video-slide'} src={vid1} autoPlay muted loop></video>
      <video className={activeSlide === 1 ? 'video-slide active' : 'video-slide'} src={vid2} autoPlay muted loop></video>
      <video className={activeSlide === 2 ? 'video-slide active' : 'video-slide'} src={vid3} autoPlay muted loop></video>

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
export default SliderVideosComponent;