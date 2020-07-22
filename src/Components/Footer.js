import React from 'react';
import moment from 'moment';
//import logo from '../images/mathlogo.jpg';

var date=moment().format("DD/MM/YYYY");

const Footer = () => <div className = "footer"> About Us | Terms of Use | Privacy Policy |
 Date:{date} 
 </div>
//<img src = {logo} className="App-logo" alt="logo" ></img>
export default Footer; 