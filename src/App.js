import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import DiscountCalc from './Components/DiscountCalc';

function App() {
  return (
    <div className="App">
      <Header />
      <DiscountCalc />
      <Footer />
    
    </div>
  );
}

export default App;
