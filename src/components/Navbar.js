import React from 'react';
import '../styles/Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
// import { deepStrictEqual } from 'assert';

class Navbar extends React.Component {
    constructor() {
        super()
        this.myRef = React.createRef();
        this.handleClickBurger = this.handleClickBurger.bind(this);
        this.handleClickNav = this.handleClickNav.bind(this);
    }

    handleClickBurger() {
        document.querySelector('.nav').classList.toggle('active')
    }

    handleClickNav() {
        document.querySelector('.nav').classList.remove('active')
    }

    scroll(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' })
    }

    render() {
        return (
            <>
                <section className="nav">
                    <div className="nav__burger" onClick={this.handleClickBurger}>
                        <i className="fa fa-bars" aria-hidden="true"></i> Menu
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item"><a className="nav__link" alt="contact" href="#contact" onClick={this.handleClickNav}>Home</a></li>
                        <li className="nav__item"><a className="nav__link" alt="services" href="#services" onClick={this.handleClickNav}>Usługi</a></li>
                        <li className="nav__item"><a className="nav__link" alt="about" href="#about" onClick={this.handleClickNav}>O nas</a></li>
                        <li className="nav__item"><a className="nav__link" alt="contact" href="#contactMe" onClick={this.handleClickNav}>Kontakt</a></li>
                        <li className="nav__item"><a className="nav__link" alt="carousel" href="#carousel" onClick={this.handleClickNav}>Galeria</a></li>
                    </ul>
                </section>
            </>
        )
    }
}

export default Navbar;