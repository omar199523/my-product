import React from 'react';
import './App.css';
import Header from './componants/Header';
import MainLogo from './componants/MainLogo';
import DocumentSection from './componants/DocumentSection'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainLogo/>
      <DocumentSection/>
    </div>
  );
}

export default App;
