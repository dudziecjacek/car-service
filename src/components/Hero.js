import React from 'react';
import { Zoom } from 'react-slideshow-image';
import './Hero.css';
import bg1 from '../img/background1.jpg';
import bg2 from '../img/background2.jpg';
import bg3 from '../img/background3.jpg';

const images = [
    bg1, bg2, bg3
];

const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: false
}

const Hero = () => {
    return (
        <div className="slide-container">
            <Zoom {...zoomOutProperties}>
                {
                    images.map((each, index) => <img key={index} alt="hero img" style={{ width: "100%", height: "calc(100vh - 180px)", objectFit: "cover" }} src={each} />)
                }
            </Zoom>
            <section className="hero">
                <div className="hero__inner">
                    <h1 className="hero__header">VAG Tech Serwis Marcin Walukiewicz</h1>
                    <h2 className="hero__subheader">Naszą pasją są wasze samochody.</h2>
                    <p className="hero__paragraph">Warsztat istnieje od 2008 roku. Zapraszam do skorzystania z naszych usług.</p>
                </div>
            </section>
        </div>
    )
}

export default Hero;