import React from 'react';
import customer from '../../img/customer.svg';
import corecterYellow from '../../img/icon/corecterYellow.svg'
import corecterRed from '../../img/icon/corecterRed.svg'
import corecterBlue from '../../img/icon/corecterBlue.svg'

import './style.css'
const CustomarSuport = () => {
    return (
        <section className="container customer-section">
            <div className="customer-img"><img src={customer} alt=""/></div>
            <div className="text-cont">
                <h3>Easier decision making for</h3>
                <h2>Customer Support</h2>
                <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                <div className="text-slice text-slice-1">
                    <img src={corecterYellow} alt=""/>
                    <p>Never worry about overpaying for your energy again. </p>
                </div>
                <div className="text-slice text-slice-2">
                    <img src={corecterRed} alt=""/>
                    <p>We will only switch you to energy companies that we trust and will treat you right </p>
                </div>
                <div className="text-slice text-slice-3">
                    <img src={corecterBlue} alt=""/>
                    <p>We track the markets daily and know where the savings are.</p>
                </div>
            </div>
            
        </section>
    )
}
export default CustomarSuport;
