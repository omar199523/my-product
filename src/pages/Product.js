import React from 'react'
import Header from '../componants/Header';
import MainLogo from '../componants/MainLogo';

// import Footer from '../componants/Footer';
import ServiceSection from '../componants/ServicesSection';
import DocumentSection from '../componants/DocumentSection'
import CollaborativeSection from '../componants/CollaborativeSection'
import CustomarSuport from '../componants/CustomarSuport'
import QuickSection from '../componants/QuickSection'
const Product = () => {
    return (
        <>
            <Header/>
            <MainLogo/>
            <ServiceSection/>
            <DocumentSection/>
            <CustomarSuport/>
            <CollaborativeSection/>
            <QuickSection/>
            {/* <Footer/> */}
        </>
    )
}
export default Product
