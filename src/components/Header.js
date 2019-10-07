import React from 'react';
import './Header.css';
import logo from '../img/logo.jpg';
import 'font-awesome/css/font-awesome.min.css';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'
configureAnchors({ offset: -80, scrollDuration: 400 })

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <ScrollableAnchor id={'contact'}>
                <section className="contact">
                    <div className="contact__div contact__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="contact__div contact__div--right">
                        <div className="contact__icon">
                            <i className="fa fa-map-marker contact__clock"></i>
                        </div>
                        <div className="contact__info">
                            <h2 className="contact__header">Lokalizacja</h2>
                            <p className="contact__paragraph">{this.props.location}</p>
                        </div>

                    </div>
                    <div className="contact__div contact__div--right">
                        <div className="contact__icon">
                            <i className="fa fa-clock-o contact__clock" aria-hidden="true"></i>
                        </div>
                        <div className="contact__info">
                            <h2 className="contact__header">Godziny otwarcia</h2>
                            <p className="contact__paragraph">{this.props.hours}</p>
                        </div>
                    </div>
                    <div className="contact__div contact__div--right">
                        <div className="contact__icon">
                            <i className="fa fa-mobile contact__clock" aria-hidden="true"></i>
                        </div>
                        <div className="contact__info">
                            <h2 className="contact__header">Telefon</h2>
                            <p className="contact__paragraph">{this.props.phone}</p>
                        </div>
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Header