import React from 'react';
import './About.css';
import teamPhoto from '../img/about.jpg'

function About() {
    return (
        <section className="about">
            <div className="about__textContainer">
                <h2>O nas</h2>
                <h3>Nasi mistrzowie wykorzystujący najnowsze systemy i sprzęt, koncentrują się na zapewnieniu życzliwej, jasnej i uczciwej obsługi. Już od 2008 roku naszą pasją są Wasze samochody</h3>
                <ul className="about__list">
                    <li className="about__item">Wymiana oleju i filtra</li>
                    <li className="about__item">Smarowanie podwozia</li>
                    <li className="about__item">Filtr powietrza silnika</li>
                    <li className="about__item">Centrowanie koła</li>
                    <li className="about__item">Wydech</li>
                    <li className="about__item">Poziom oleju silnikowego</li>
                    <li className="about__item">Układ kierowniczy i zawieszenie</li>
                    <li className="about__item">Pasy</li>
                    <li className="about__item">Akumulator i Kable</li>
                </ul>
            </div>
            <div className="about__imgContainer">
            </div>
        </section>
    )
}

export default About;