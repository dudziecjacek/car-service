import React from 'react';
import '../styles/App.css';
import Header from './Header'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import About from './About'
// import Carousel from './Carousel'
import Contact from './Contact'
import Reviews from './Reviews'
import Footer from './Footer'
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";
import { configureAnchors } from 'react-scrollable-anchor';
import CookieConsent from "react-cookie-consent";
configureAnchors({ offset: (window.innerWidth > 980 ? 0 : -60), scrollDuration: 400 })

function App() {
  return (
    <div className="App">
      <Header location="Pęcz 15" post="57-100 Strzelin" days="Pon.-Pt." hours="08:30-17:30" imgUrl="../img/logo.jpg" phone="564 345 345" />
      <Navbar />
      <Hero />
      <Services />
      {/* <Carousel /> */}
      <Reviews />
      <About />
      <Contact />
      <ScrollUpButton
        style={{ height: 30, width: 30, zIndex: 15, backgroundColor: "orange", color: "rgb(60,60,60)", borderRadius: "5px", outline: 0, border: "2px solid rgb(60,60,60)" }}
      />
      <Footer />
      <CookieConsent style={{ background: "rgb(60,60,60)" }}
        buttonText="Zgoda"
        buttonStyle={{ backgroundColor: "orange", fontSize: "13px" }}>
        Ta strona koszysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie</CookieConsent>
    </div>
  );
}

export default App;
