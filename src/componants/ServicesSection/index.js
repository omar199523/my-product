import React from 'react';
import pointer from "../../img/icon/pointer.svg";
import design from "../../img/icon/design.svg";
import fiveSecond from "../../img/icon/fiveSecond.svg";
import preference from "../../img/icon/preference.svg";
import { H6 ,H4,H2} from '../Typograph'
import './style.css';

const ServiceSection = () => {
    return (
        <section className="service-section container">
            <div className="service-title"><H2>Product  was Built Specifically for You</H2></div>
            <div className ="Services">
                <div>
                    <img src={pointer}/>
                    <H4>First click tests</H4>
                    <H6>While most people enjoy casino gambling,</H6>
                </div>
                <div>
                    <img src={design}/>
                    <H4>Design surveys</H4>
                    <H6>Sports betting, lottery and bingo playing for the fun</H6>
                </div>
                <div>
                    <img src={fiveSecond}/>
                    <H4>Preference tests</H4>
                    <H6>The Myspace page defines the individual.</H6>
                </div>
                <div>
                    <img src={preference}/>
                    <H4>Five second tests</H4>
                    <H6>Personal choices and the overall personality of the person. </H6>
                </div>
            </div>
            <div className="button-cont">
                <button>SIGN UP NOW</button>
            </div>
        </section>
    )
}

export default ServiceSection
