import React from 'react'
import documentLogo from '../../img/documentLogo.svg'
import './style.css'
 const DocumentSection = () => {
    return (
        <section className="container docu-cont">
            <div className ="docu-img"><img src={documentLogo}/></div>
            <div className="docu-text">
                <h4>Effortless Validation for</h4>
                <h2>Management</h2>
                <p>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                <h3>Accessory makers</h3>
                <p>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                <h3>Alterationists</h3>
                <p>If you are looking for a new way to promote your business that won’t cost you more money,</p>
            </div>
        </section>
    )
}
export default DocumentSection;
