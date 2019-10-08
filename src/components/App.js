import React from 'react';
import './App.css';
import Header from './Header'
import Hero from './Hero'
import Navbar from './Navbar'
import Services from './Services'
import About from './About'
import Carousel from './Carousel'
import Contact from './Contact'

function App() {
  return (
    <div className="App">
      <Header location="Pęcz 15, Strzelin" hours="Poniedziałek-Piątek 08:30 - 17:30" imgUrl="../img/logo.jpg" phone="564 345 345" />
      <Navbar />
      <Hero />
      <Services />
      <Carousel />
      <About />
      <Contact />
    </div>
  );
}

export default App;
