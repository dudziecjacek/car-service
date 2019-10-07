import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <section className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a className="nav__link" alt="about" href="#">Home</a></li>
                <li className="nav__item"><a className="nav__link" alt="about" href="#">Usługi</a></li>
                <li className="nav__item"><a className="nav__link" alt="about" href="#">O nas</a></li>
                <li className="nav__item"><a className="nav__link" alt="about" href="#">Galeria</a></li>
                <li className="nav__item"><a className="nav__link" alt="about" href="#">Kontakt</a></li>
            </ul>
        </section>
    )
}

export default Navbar;