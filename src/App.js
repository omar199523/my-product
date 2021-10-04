import React from 'react';
import Header from './componants/Header';
import MainLogo from './componants/MainLogo';
import DocumentSection from './componants/DocumentSection';
import CustomarSuport from './componants/CustomarSuport';
import './App.css'
function App() {
  return (
    <div className="App">
      <Header/> 
       <MainLogo/>
      <DocumentSection/>
      <CustomarSuport/>
    </div>
  );
}

export default App;
