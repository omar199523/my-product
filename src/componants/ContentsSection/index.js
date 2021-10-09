import React from 'react';
import {H2,H3,P3} from '../Typograph';
import content1 from '../../img/content1.svg';
import content2 from '../../img/content2.svg';
import content3 from '../../img/content3.svg';
import './style.css';

 const ContentsSection = () => {
    return (
        <section className="container contents-section">
            <H2 className="contents-title">Contents Strategies</H2>
            <P3 className="contents-parg">We focus on ergonomics and meeting you where you work. It's only a keystroke away. </P3>
            <div>
                <div className="col-3 contnet-col-1">
                    <img src={content1} alt=""/>
                    <P3>By <span>Wahid Ari </span>|  03 March 2019</P3>
                    <H3>Increasing Prosperity With Positive Thinking</H3>
                </div>
                <div className="col-3 contnet-col-2">
                    <img src={content2} alt=""/>
                    <P3>By <span>Wahid Ari </span>|  03 March 2019</P3>
                    <H3>Motivation Is The First Step To Success</H3>
                </div>
                <div className="col-3 contnet-col-3">
                    <img src={content3} alt=""/>
                    <P3>By <span>Wahid Ari </span>|  03 March 2019</P3>
                    <H3>Success Steps For Your Personal Or Business</H3>
                </div>
                <div className="smoll-circle">
                    <span className="contiet-circle-1"></span>
                    <span className="contiet-circle-2"></span>
                    <span className="contiet-circle-3"></span>
                </div>
            </div>

        </section>
    )
}
export default ContentsSection;
