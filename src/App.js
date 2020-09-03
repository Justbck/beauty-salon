import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Contact from './pages/contact/contact.component';
import ServicePage from './pages/servicepage/service.component';



function App() {
  return (
    <div className="app-container">
      <Header/>
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route path = '/service' component = {ServicePage}/>
        <Route path = '/contact' component = {Contact}/>
      </Switch>
    </div>
  );
}

export default App;
