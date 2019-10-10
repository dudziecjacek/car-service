import React from 'react';
import '../styles/Header.css';
import logo from '../img/logo.jpg';
import 'font-awesome/css/font-awesome.min.css';
import ScrollableAnchor from 'react-scrollable-anchor'

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
                    <div className="contact__wrapper">
                        <div className="contact__div contact__logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="contact__div contact__div--right">
                            <div className="contact__icon">
                                <i className="fa fa-map-marker contact__clock"></i>
                            </div>
                            <div className="contact__info">
                                <h2 className="contact__header">Adres</h2>
                                <p className="contact__paragraph">{this.props.location}<br />{this.props.post}</p>
                            </div>

                        </div>
                        <div className="contact__div contact__div--right">
                            <div className="contact__icon">
                                <i className="fa fa-clock-o contact__clock" aria-hidden="true"></i>
                            </div>
                            <div className="contact__info">
                                <h2 className="contact__header">Godziny pracy</h2>
                                <p className="contact__paragraph">{this.props.days}<br />{this.props.hours}</p>
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
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Header