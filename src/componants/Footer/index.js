import React from 'react'
import {H1,H4,P3} from '../Typograph';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import instgam from '../../img/icon/instgram.svg';
import facebook from '../../img/icon/facebook.svg'
import twitter from '../../img/icon/twitter.svg'
import './style.css'
const Footer = () => {
    return (
        <footer className="main-footer container">
            <div className="col-4 logo-cont">
                <Link href="/" className="main-logo">
                    <img src={logo} alt="logo" />
                    <H1>Product</H1>
                </Link>
                <div className="social-media">
                    <img src={instgam} alt=""/>
                    <img src={facebook} alt=""/>
                    <img src={twitter} alt=""/>
                </div>
            </div>
            <ul className="col-4">
                <H4>Resource</H4>
                <Link to=""><li>About Us</li></Link>
                <Link to=""><li>Blog</li></Link>
                <Link to=""><li>Contact</li></Link>
                <Link to=""><li>FAQ</li></Link>
            </ul>
            <ul className="col-4">
                <H4>Legal Stuff</H4>
                <Link to=""><li>Disclaimer</li></Link>
                <Link to=""><li>Financing</li></Link>
                <Link to=""><li>Privacy Policy</li></Link>
                <Link to=""><li>Terms of Service</li></Link>
            </ul>
            <div className="col-4 input-cont">
                <H4>knowing you're always on the best energy deal. </H4>
                <input type="text"/>
                <button>Sign up Now</button>
            </div>
            <P3 className="work-by">@ Made With Love By Omar Al.gamri </P3>
        </footer>
    )
}

export default Footer
