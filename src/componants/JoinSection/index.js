import React from 'react'
import {H2} from '../Typograph'
import joinImgae from "../../img/joinImgae.svg"
import './style.css'
export const JoinSection = () => {
    return (
        <section className="container join-section">
            <div className="join-text-cont">
                <H2>Join 100 Compannies who boost their business with Product</H2>
                <button>Get This</button>
            </div>
            <div className="join-img">
                <img src={joinImgae} alt=""/>
            </div>
            <div><img src="" alt= ""/></div>
        </section>
    )
}
export default JoinSection;
