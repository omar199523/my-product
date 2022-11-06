import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import { H1 } from '../Typograph';
import './style.css';


const Header = ({setDarckMode ,DarckMode}) => {
    const [activeNav,setActiveNav] = useState(false);
    const handdleDarckMode = ()=>{
        console.log(setDarckMode)
        setDarckMode(!DarckMode)
    }
    return (
        <header className="main-header">
            <Link to="/" className="main-logo">
                <img src={logo} alt="logo" />
                <H1>Product</H1>
            </Link>
            <div className= "main-nav-bar">
                <ul className={(activeNav)?"active":null}>
                    <Link to="/"><li>Product</li></Link>
                    <Link to="/Customers"><li>Customers</li></Link>
                    <Link to="/Pricing"><li>Pricing</li></Link>
                    <Link to="/Resources"><li>Resources</li></Link>
                    <li className="button sing-in">Sign In</li>
                    <li className="button sing-up">Sign Up</li>
                    
                
                </ul>
                <div className="half-circite" onClick={handdleDarckMode}>
                    <div></div><div></div>
                </div>
                <div className="visbule-sx nav-icon" onClick={()=>(setActiveNav((prev)=>{return !prev}))}>
                    <div></div>
                </div>
            </div>
        </header>
    )
};
export default Header;
