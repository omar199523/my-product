import React from 'react';
import customer from '../../img/customer.svg';
import corecterYellow from '../../img/icon/corecterYellow.svg'
import corecterRed from '../../img/icon/corecterRed.svg'
import corecterBlue from '../../img/icon/corecterBlue.svg';
import {H2,P2, P3} from '../Typograph'

import './style.css'
const CustomarSuport = () => {
    return (
        <section className="container customer-section">
            <div className="customer-img"><img src={customer} alt=""/></div>

            <div className="customer-text-cont">
            <div className="text-cont">

                <P2>Easier decision making for</P2>
                <H2>Customer Support</H2>
                <P3>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </P3>
                <div className="text-slice text-slice-1">
                    <img src={corecterYellow} alt=""/>
                    <P3>Never worry about overpaying for your energy again. </P3>
                </div>
                <div className="text-slice text-slice-2">
                    <img src={corecterRed} alt=""/>
                    <P3>We will only switch you to energy companies that we trust and will treat you right </P3>
                </div>
                <div className="text-slice text-slice-3">
                    <img src={corecterBlue} alt=""/>
                    <P3>We track the markets daily and know where the savings are.</P3>
                </div>
            </div>
            
        </section>
    )
}
export default CustomarSuport;
