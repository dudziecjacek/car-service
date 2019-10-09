import React from 'react';
import Map from './Map'
import './Contact.css'
import 'font-awesome/css/font-awesome.min.css';

class Contact extends React.Component {

    render() {

        return (
            <section className="contactMe">
                <div className="contactMe__wrapper">
                    <Map className="contactMe__item" />
                    <div className="contactMe__item">
                        <h2 className="contactMe__header">Dane Kontaktowe</h2>
                        <div className="contactMe__container">
                            <h3>Adres</h3>
                            <p className="contactMe__paragraph">Pęcz 15, 57-100 Strzelin</p>
                        </div>
                        <div className="contactMe__container">
                            <h3>Telefon</h3>
                            <p className="contactMe__paragraph">663 153 909</p>
                        </div>
                        <div className="contactMe__container">
                            <h3>Godziny Otwarcia</h3>
                            <p className="contactMe__paragraph">Pon.-Pt. 08:30-17:30</p>
                        </div>
                        <div className="contactMe__container">
                            <h3>Adres e-mail</h3>
                            <p className="contactMe__paragraph">mailme@gmail.com</p>
                        </div>
                        <div>
                            <a className="contactMe__social" href="https://www.facebook.com/vagtechwalukiewicz/" alt="facebook website"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Contact;