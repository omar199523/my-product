import React from 'react'
import "./style.css";
import pepoleLogo from '../../img/pepoleLogo.svg';
 const MainLogo =()=>{
    return(
        <div className="container main-pepole">
            <div className="pepole-img"><img src={pepoleLogo}/></div>
            <div className="text-cont">
                <h2>Work at the speed of thought</h2>
                <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                <div className="button-cont">
                    <button>Get started</button>
                    <button>Watch the Video</button>
                </div>
            </div>
            
        </div>
    )
 }
 export default MainLogo;