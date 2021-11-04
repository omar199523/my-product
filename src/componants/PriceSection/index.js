import React from 'react'
import {H2,P3} from '../Typograph';
import OnePrice from '../OnePrice'
 const PriceSection = () => {
    return (
        <section className="price-section">
            <H2>price Table</H2>
            <P3>We offer competitive price</P3>
            <div className="price-cont">
                <OnePrice title="Free" price="0" descreption="Only 2 Operators"/>
            </div>
        </section>
    )
}
export default PriceSection