import React from 'react'
import Header from '../componants/Header';
import MainLogo from '../componants/MainLogo';
import DocumentSection from '../componants/DocumentSection'
// import Footer from '../componants/Footer';
import ServiceSection from '../componants/ServicesSection';
import CustomarSuport from '../componants/CustomarSuport'
const Product = () => {
    return (
        <>
            <Header/>
            <MainLogo/>
            <ServiceSection/>
            <DocumentSection/>
            <CustomarSuport/>
            {/* <Footer/> */}
        </>
    )
}
export default Product
