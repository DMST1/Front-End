import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navLinks">
          {/* <Route to="/" component={home}></Route>
          <Route to="resources" component={resources}></Route>
          <Route to="about" component={about}></Route>
          <Route to="register" component={register}></Route>
          <Route to="login" component={login}></Route> */}
        </div>
        <img src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
        
      </header>
    </div>
  );
}



export default App;
