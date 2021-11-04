import React from 'react'

import MainLogo from '../componants/MainLogo';
import ServiceSection from '../componants/ServicesSection';
import DocumentSection from '../componants/DocumentSection'
import CollaborativeSection from '../componants/CollaborativeSection'
import CustomarSuport from '../componants/CustomarSuport'
import QuickSection from '../componants/QuickSection'
import ContentsSection from '../componants/ContentsSection'
import JoinSection from '../componants/JoinSection'
// import PriceSection from '../componants/PriceSection';
const Product = () => {
    return (
        <>
            <MainLogo/>
            <ServiceSection/>
            <DocumentSection/>
            <CustomarSuport/>
            <CollaborativeSection/>
            <QuickSection/>
            <ContentsSection/>
            <JoinSection/>
            {/* <PriceSection/> */}
        </>
    )
}
export default Product
