import React from 'react'
import {H3,P2,P3} from '../Typograph'
const OnePrice = ({title,price,descreption}) => {
    return (
        <div className="one-price">
            <H3>{title}</H3>
            <P3>Brief price description</P3>
            <div>
            <h2 className="price">{price}</h2>
            <P3><span>$</span> Per / month</P3>
            </div>
            <P2>{descreption}</P2>
            <P2>Notifications</P2>
            <P2>Landing Pages</P2>
            <button>Order New</button>
        </div>
    )
}
export default OnePrice;
