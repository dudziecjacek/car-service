import React from 'react';
import { Zoom } from 'react-slideshow-image';
import './Carousel.css';
import img1 from '../img/gallery/img1.jpg';
import img2 from '../img/gallery/img2.jpg';
import img3 from '../img/gallery/img3.jpg';
import img4 from '../img/gallery/img4.jpg';
import img5 from '../img/gallery/img5.jpg';

import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({ offset: -80, scrollDuration: 400 })

const images = [
    img1, img2, img3, img4, img5
];



const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    scale: 0.4,
    arrows: true
}

const Carousel = () => {
    return (
        <ScrollableAnchor id={'carousel'}>
            <section className="carousel">
                <div className="carousel-container">
                    <Zoom {...zoomOutProperties}>
                        {
                            images.map((each, index) => <img key={index} alt="hero img" style={{ width: "100%", height: "calc(100vh - 200px)", objectFit: "cover" }} src={each} />)
                        }
                    </Zoom>
                </div>
            </section>
        </ScrollableAnchor>
    )
}

export default Carousel;