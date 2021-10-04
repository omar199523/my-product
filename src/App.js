import React from 'react';
import './App.css';
import Header from './componants/Header';
import MainLogo from './componants/MainLogo';
import DocumentSection from './componants/DocumentSection';
import ServiceSection from './componants/ServicesSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainLogo/>
      <ServiceSection/>
      <DocumentSection/>
    </div>
  );
}

export default App;
