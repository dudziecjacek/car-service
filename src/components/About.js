import React from 'react';
import './About.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({ offset: -80, scrollDuration: 400 })

class About extends React.Component {

    constructor() {
        super();

        this.debounced = this.debounce(this.handleScroll, 10)
    }

    debounce = (func, delay) => {
        let inDebounce
        return function () {
            const context = this
            const args = arguments
            clearTimeout(inDebounce)
            inDebounce = setTimeout(() => func.apply(context, args), delay)
        }
    }

    handleScroll = () => {
        const section = document.querySelector('.about');
        const windowHeightScroll = window.scrollY + window.innerHeight;
        console.log(windowHeightScroll, section.offsetTop);
        if (windowHeightScroll > section.offsetTop + 250) {
            section.classList.add('active')
            console.log('ok');
            window.removeEventListener('scroll', this.debounced, false)
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.debounced, false);
    }

    render() {
        return (
            <ScrollableAnchor id={'about'}>
                <section className="about">
                    <div className="about__textContainer">
                        <h2 className="about__header">O nas</h2>
                        <h3 className="about__subheader">Nasi mistrzowie wykorzystujący najnowsze systemy i sprzęt, koncentrują się na zapewnieniu życzliwej, jasnej i uczciwej obsługi. Nashą specjalizacją jest szeroko pojęta mechanika samochodowa oraz kompleksowe naprawy aut osobowych różnych marek. Warsztat samochodowy - VAG Tech Serwis - gwarantuje klientom bardzo atrakcyjne ceny na usługi mechaniki samochodowej, kompetentną i profesionalną obsługe, indywidualne podejście do każdego przypadku oraz skuteczność w działaniu. Wszystko to dla zapewnienia najwyższego bezpieczeństwa jazdy i maksymalnego komfortu użytkowania auta. Już od 2008 roku naszą pasją są Wasze samochody</h3>
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
            </ScrollableAnchor>
        )
    }
}

export default About;