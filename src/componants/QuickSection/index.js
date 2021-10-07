import React from 'react'
import {H2,P2} from '../Typograph'
import clintPhoto1 from '../../img/icon/clintPhoto1.svg';
import clintPhoto2 from '../../img/icon/clintPhoto2.svg';
import clintPhoto3 from '../../img/icon/clintPhoto3.svg';
import clintPhoto4 from '../../img/icon/clintPhoto4.svg';
import './style.css'
 const QuickSection = () => {
    return (
        <section className="Quick-section container">
            <H2>Quick & Easy Process</H2>
            <P2>Do you require some help for your project: Conception workshop,
            prototyping, marketing strategy, landing page, Ux/UI?</P2>
            <div className = "clints-opinions">
                <div className="col-2">
                    <div >
                        <img src={clintPhoto1} alt =""/>
                        <P2>I can take care of your pitch</P2>
                    </div>
                    <div>
                        <img src={clintPhoto2} alt =""/>
                        <P2>I can design you website</P2>
                    </div>
                </div>
                <div className="col-2">
                    
                    <div>
                        <img src={clintPhoto4} alt =""/>
                        <P2>I can prototype your app</P2>
                    </div>
                    <div>
                        <img src={clintPhoto3} alt =""/>
                        <P2>I can help marketing strategy</P2>
                    </div>
                </div>
            </div>
            <div className ="button-cont"><button>Contact our expert</button></div>
        </section >
    )
}
export default QuickSection;
