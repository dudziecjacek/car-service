import React from 'react';
import './Navbar.css';
import animateScrollTo from 'animated-scroll-to';

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
                    <li className="nav__item"><a className="nav__link" alt="about" href="#contact">Home</a></li>
                    <li className="nav__item"><a className="nav__link" alt="about" href="#services">Usługi</a></li>
                    <li className="nav__item"><a className="nav__link" alt="about" href="#">O nas</a></li>
                    <li className="nav__item"><a className="nav__link" alt="about" href="#">Galeria</a></li>
                    <li className="nav__item"><a className="nav__link" alt="about" href="#">Kontakt</a></li>
                </ul>
            </section>
        )
    }
}

export default Navbar;