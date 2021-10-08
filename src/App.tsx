import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './app/Pages/Home';
import { Navbar } from './app/components/navbar';
import { About } from './app/Pages/About';
import { Car } from './app/Pages/Car';
import { Contact } from './app/Pages/Contact';
import { AccountBox } from './app/components/accountBox';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path='/Signin' exact component={AccountBox} />
        
        <div>
          <Navbar/>
          <Route path='/' exact component={Home} />
          <Route path='/Home' exact component={Home} />
          <Route path='/AboutUs' exact component={About} />
          <Route path='/Cars' exact component={Car} />
          <Route path='/ContactUs' exact component={Contact} />
          
        </div>
        
        
      </Switch>
    </Router>
    
  );
}

export default App;
