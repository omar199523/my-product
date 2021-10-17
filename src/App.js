import React ,{useState} from 'react';

import {Switch , BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './componants/Header';
import Product from './pages/Product';
import Customers from './pages/Customers';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import './App.css';
import Footer from './componants/Footer';


function App() {
  const [DarckMode, setDarckMode] = useState(false);
  return (
    <div className={(!DarckMode)?"darck-mode":"App"}>
      <Router>
      
        <Header setDarckMode={setDarckMode} DarckMode={DarckMode}/>
        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/Customers" component={Customers} />
          <Route path="/Pricing" component={Pricing} />
          <Route path="/Resources" component={Resources} />
        </Switch>
        <Footer/>
      </Router>
    </div>
 
  );
}

export default App;
