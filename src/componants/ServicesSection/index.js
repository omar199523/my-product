import React from 'react';
import pointer from "../../img/icon/pointer.svg";
import design from "../../img/icon/design.svg";
import fiveSecond from "../../img/icon/fiveSecond.svg";
import preference from "../../img/icon/preference.svg";
import './style.css';

const ServiceSection = () => {
    return (
        <section className="service-section continer">
            <div><h2>Product  was Built Specifically for You</h2></div>
            <div>
                <div>
                    <img src={pointer}/>
                    <h3>First click tests</h3>
                    <p>While most people enjoy casino gambling,</p>
                </div>
                <div>
                    <img src={design}/>
                    <h3>Design surveys</h3>
                    <p>Sports betting, lottery and bingo playing for the fun</p>
                </div>
                <div>
                    <img src={fiveSecond}/>
                    <h3>Preference tests</h3>
                    <p>The Myspace page defines the individual.</p>
                </div>
                <div>
                    <img src={preference}/>
                    <h3>Five second tests</h3>
                    <p>Personal choices and the overall personality of the person. </p>
                </div>
            </div>
            <div className="button-cont">
                <button>SIGN UP NOW</button>
            </div>
        </section>
    )
}

export default ServiceSection
