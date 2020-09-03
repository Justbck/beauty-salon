import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';


const ServicePage = () => (
  <div>
    <h1>services</h1>
  </div>
);



function App() {
  return (
    <div className="app-container">
      <Header/>
      <Route exact path = '/' component = {HomePage}/>
      <Route path = '/services' component = {ServicePage}/>
    </div>
  );
}

export default App;
