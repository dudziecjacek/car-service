import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor() {
        super()
        this.myRef = React.createRef();
    }

    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        return (
            <section className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a className="nav__link" alt="contact" href="#contact">Home</a></li>
                    <li className="nav__item"><a className="nav__link" alt="services" href="#services">Usługi</a></li>
                    <li className="nav__item"><a className="nav__link" alt="carousel" href="#carousel">Galeria</a></li>
                    <li className="nav__item"><a className="nav__link" alt="contact" href="#contact">Kontakt</a></li>
                    <li className="nav__item"><a className="nav__link" alt="about" href="#about">O nas</a></li>
                </ul>
            </section>
        )
    }
}

export default Navbar;