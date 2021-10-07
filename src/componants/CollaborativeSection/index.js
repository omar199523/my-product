import React from 'react';

import collaborativeIcon from '../../img/collaborativeIcon.svg';
import {H2,P1,P2,P3} from '../Typograph'
import './style.css';

const CollaborativeSection = () => {
    return (
        <section className="collaborative-sectien container">
            <div className="collaborative-img"><img src={collaborativeIcon} alt=""/></div>
            <div className="collaborative-text-cont">
                <P1>Optimisation for</P1>
                <H2>Collaborative</H2>
                <P3>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </P3>
                <P2>Accessory makers</P2>
                <P3>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</P3>
                <P2>Alterationists</P2>
                <P3>If you are looking for a new way to promote your business that won’t cost you more money, </P3>
            </div>
            
        </section>
    )
}
export default CollaborativeSection;
