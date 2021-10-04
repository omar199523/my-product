import React from 'react'
import documentLogo from '../../img/documentLogo.svg';
import {H2,P3,P2} from '../Typograph'
import './style.css'
 const DocumentSection = () => {
    return (
        <section className="container docu-cont">
            <div className ="docu-img"><img src={documentLogo} alt=""/></div>
            <div className="docu-text">
                <P2>Effortless Validation for</P2>
                <H2>Management</H2>
                <P3>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </P3>
                <P2>Accessory makers</P2>
                <P3>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</P3>
                <P2>Alterationists</P2>
                <P3>If you are looking for a new way to promote your business that won’t cost you more money,</P3>
            </div>
        </section>
    )
}
export default DocumentSection;
