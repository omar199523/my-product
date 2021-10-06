import React from 'react'
import "./style.css";
import pepoleLogo from '../../img/pepoleLogo.svg';
import {H1,H6} from '../Typograph'
 const MainLogo =()=>{
    return(
        <section className="container main-pepole ">
            <div className="text-cont">
                <H1>Work at the speed of thought</H1>
                <H6>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</H6>
                <div className="button-cont">
                    <button>Get started</button>
                    <button>Watch the Video</button>
                </div> 
            </div>

            <div className="pepole-img"><img src={pepoleLogo} alt=""/></div>
        </section>
            


    )
    
 }
 export default MainLogo;