import React from 'react'
import {H2} from '../Typograph'
import joinImgae from "../../img/joinImgae.svg"
import './style.css'
export const JoinSection = () => {
    return (
        <section className="container">
            <div>
                <H2>Join 100 Compannies who boost their business with Product</H2>
                <button>Get This</button>
            </div>
            <div>
                <img src={joinImgae} alt=""/>
            </div>
            <div><img src="" alt= ""/></div>
        </section>
    )
}
export default JoinSection;
