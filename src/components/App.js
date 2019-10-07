import React from 'react';
import './App.css';
import Header from './Header'
import Hero from './Hero'

function App() {
  return (
    <div className="App">
      <Header location="Pęcz 15, Strzelin" hours="Poniedziałek-Piątek 08:30 - 17:30" imgUrl="../img/logo.jpg" phone="564 345 345" />
      <Hero />
    </div>
  );
}

export default App;
