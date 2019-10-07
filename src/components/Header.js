import React from 'react';
import './Header.css';
import logo from '../img/logo.jpg';
import 'font-awesome/css/font-awesome.min.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <section className="contact" id="contact">
                <div className="contact__div contact__logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="contact__div contact__div--right">
                    <div className="contact__icon">
                        <i className="fa fa-map-marker contact__clock"></i>
                    </div>
                    <div className="contact__info">
                        <h2 className="contact__header">Lokalizacja</h2>
                        <p>{this.props.location}</p>
                    </div>

                </div>
                <div className="contact__div contact__div--right">
                    <div className="contact__icon">
                        <i className="fa fa-clock-o contact__clock" aria-hidden="true"></i>
                    </div>
                    <div className="contact__info">
                        <h2 className="contact__header">Godziny otwarcia</h2>
                        <p>{this.props.hours}</p>
                    </div>
                </div>
                <div className="contact__div contact__div--right">
                    <div className="contact__icon">
                        <i className="fa fa-mobile contact__clock" aria-hidden="true"></i>
                    </div>
                    <div className="contact__info">
                        <h2 className="contact__header">Telefon</h2>
                        <p>{this.props.phone}</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header