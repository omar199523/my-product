import React from 'react';
import logo from '../../img/logo.svg';
import '../../App.css'
import './style.css';


const Header = () => {
    return (
        <header className="main-header">
            <a href="#" className="main-logo">
                <img src={logo} alt="logo" />
                <h1>Product</h1>
            </a>
            <ul className="main-nav-bar hadin-sx">
                <li>Product</li>
                <li>Customers</li>
                <li>Pricing</li>
                <li>Resources</li>
                <li className="button sing-in">Sing In</li>
                <li className="button sing-up">Sing Up</li>
                <li><a href="#" className="half-circite"></a></li>
               
            </ul>
            
            {/* <div className="">
                <span></span>
            </div> */}
        </header>
    )
};
export default Header;
