import React from 'react';
import '../styles/Services.css';
import service1 from '../img/service1.jpg';
import service2 from '../img/service2.jpg';
import service3 from '../img/service3.jpg';
import service4 from '../img/service4.jpg';
import service5 from '../img/service5.jpg';
import service6 from '../img/service6.jpg';
import service7 from '../img/service7.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'

class Services extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    componentDidMount() {
        const services = [];
        let activeServices = 0;
        const containers = document.querySelectorAll('.services__container');
        containers.forEach(el => {
            services.push(el.offsetTop)
        })

        const debounce = (func, delay) => {
            let inDebounce
            return function () {
                const context = this
                const args = arguments
                clearTimeout(inDebounce)
                inDebounce = setTimeout(() => func.apply(context, args), delay)
            }
        }

        const handleScroll = () => {
            if (activeServices >= containers.length) window.removeEventListener('scroll', handleScroll);
            const windowHeightScroll = window.scrollY + window.innerHeight + 50;
            containers.forEach(el => {
                if (windowHeightScroll > el.offsetTop && !el.className.includes('active')) {
                    activeServices += 1;
                    el.classList.add('active')
                }
            })
        }

        window.addEventListener('scroll', debounce(handleScroll, 10))
    }

    render() {
        return (
            <ScrollableAnchor id={'services'}>
                <section className="services scrollToHere" ref={this.myRef} >
                    <div className="services__wrapper">
                        <div className="services__container">
                            <img className="services__img" src={service1} alt="service" />
                            <div className="services__inner">
                                <h2 className="services__header">Klimatyzacja, odgrzybianie</h2>
                                <p className="services__p">Cena usługi 160zł+ 30zł za 100gram czynnika.</p>
                            </div>
                        </div>
                        <div className="services__container">
                            <img className="services__img" src={service2} alt="service" />
                            <div className="services__inner">
                                <h2 className="services__header">Wymiana zaworu EGR 1.6 TDI VAG</h2>
                                <p className="services__p">Czas trwania jest zróżnicowany • 400 zł</p>
                            </div>
                        </div>
                        <div className="services__container">
                            <img className="services__img" src={service3} alt="service" />
                            <div className="services__inner">
                                <h2 className="services__header">Obsługa okresowa</h2>
                                <p className="services__p">Usługa polega na wymianie oleju silnikowego oraz wszystkich filtrów (paliwa, powietrza, kabinowego, oleju). Kasowanie inspekcji serwisowej. </p>
                            </div>
                        </div>
                        <div className="services__container">
                            <img className="services__img" src={service4} alt="service" />
                            <div className="services__inner">
                                <h2 className="services__header">Wymiana sprzęgła</h2>
                                <p className="services__p">Czas trwania jest zróżnicowany • od 300 zł. Cena uzależniona jest od marki i modelu samochodu.</p>
                            </div>
                        </div>
                        <div className="services__container">
                            <img className="services__img" src={service5} alt="service" />
                            <div className="services__inner">
                                <h2 className="services__header">Diagnostyka komputerowa</h2>
                                <p className="services__p">Diagnostyka komputerowa wszystkie marki. </p>
                            </div>
                        </div>
                        <div className="services__container">
                            <img className="services__img" src={service6} alt="service" />
                            <div className="services__inner">
                                <h2 className="services__header">Wymiana tarcz i klocków hamulcowych</h2>
                                <p className="services__p">Kompleksowa usługa wymiany układu rozrządu zarówno paski jak i łańcuchy. Cena jest uzależniona od marki/ modelu samochodu.</p>
                            </div>
                        </div>
                        <div className="services__container">
                            <img className="services__img" src={service7} alt="service" />
                            <div className="services__inner">
                                <h2 className="services__header">Wymiana rozrządu</h2>
                                <p className="services__p">Czas trwania jest zróżnicowany • 150zł - 1700zł. Kompleksowa usługa wymiany układu rozrządu zarówno paski jak i łańcuchy. Cena jest uzależniona od marki/ modelu samochodu.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Services;