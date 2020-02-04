import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import FormPage1 from './components/login.js';
import FormPage2 from './components/registration.js'
import homepage from './components/homepage.js';


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navLinks">
          <Route path="/" component={homepage}></Route>
          {/* <Route path="resources" component={resources}></Route>
          <Route path="about" component={about}></Route>*/}
          <Route path="/registration" component={FormPage2}></Route>
          <Route path="/login" component={FormPage1}></Route>
        </div>  
      </header>
    </div>
  );
}
 
