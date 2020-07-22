import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import DiscountCalc from './components/DiscountCalc';
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
