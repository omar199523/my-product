import React from 'react'

import MainLogo from '../componants/MainLogo';
// import Footer from '../componants/Footer';
import ServiceSection from '../componants/ServicesSection';
import DocumentSection from '../componants/DocumentSection'
import CollaborativeSection from '../componants/CollaborativeSection'
import CustomarSuport from '../componants/CustomarSuport'
import QuickSection from '../componants/QuickSection'
import ContentsSection from '../componants/ContentsSection'
import JoinSection from '../componants/JoinSection'
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
            {/* <Footer/> */}
        </>
    )
}
export default Product
