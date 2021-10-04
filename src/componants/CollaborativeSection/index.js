import React from 'react';

import collaborativeIcon from '../../img/collaborativeIcon.svg'
import './style.css';

const CollaborativeSection = () => {
    return (
        <section className="collaborative-sectien container">
            <div className="text-cont">
                <h3>Optimisation for</h3>
                <h2>Collaborative</h2>
                <p>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                <h4>Accessory makers</h4>
                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                <h4>Alterationists</h4>
                <p>If you are looking for a new way to promote your business that won’t cost you more money, </p>
            </div>
            <div className="collaborative-img"><img src={collaborativeIcon} alt=""/></div>
        </section>
    )
}
export default CollaborativeSection;
