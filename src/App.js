import React, { Component } from 'react';
import Scheduler from './components/Scheduler';
import { Switch, Route } from 'react-router-dom';
import MessageArea from './components/MessageArea';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Contact from './pages/contact/contact.component';
import ServicePage from './pages/servicepage/service.component';
import Toolbar from './components/Toolbar';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import YourBooking from './pages/your-booking/your-booking.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const data = [
  { start_date:'2020-06-10 6:00', end_date:'2020-06-10 8:00', text:'Booked', id: 1 },
  { start_date:'2020-06-13 10:00', end_date:'2020-06-13 18:00', text:'Booked', id: 2 }
];


class App extends React.Component {


  constructor() {
    super();

    this.state = {
      currentTimeFormatState: true,
      messages: [],
      currentUser:null
  };
}

unsubscribeFromAuth = null;


componentDidMount() {

  this.unsubscribeFromAuth  = auth.onAuthStateChanged( async userAuth => {
    
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);


      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });
        console.log(this.state)
      });
    }
    this.setState({ currentUser: userAuth })



  });
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  
addMessage(message) {
    const maxLogLength = 5;
    const newMessage = { message };
    const messages = [
        newMessage,
        ...this.state.messages
    ];

    if (messages.length > maxLogLength) {
        messages.length = maxLogLength;
    }
    this.setState({ messages });
}

logDataUpdate = (action, ev, id) => {
    const text = ev && ev.text ? ` (${ev.text})` : '';
    const message = `event ${action}: ${id} ${text}`;
    this.addMessage(message);
}

  render() {
  

  const { currentTimeFormatState, messages } = this.state;
  return (

    <div className="app-container">
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
      <div>
        <Route exact path = '/' component = {HomePage}/>
        <Route path = '/service' component = {ServicePage}/>
        <Route path = '/contact' component = {Contact}/>
        <Route path = '/signin' component ={SignInAndSignUpPage}/>
        <Route path = '/your-booking' component = {YourBooking}/>

        <Route path = '/book'>
        <div>
                <div className="tool-bar">
                    <Toolbar
                        timeFormatState={currentTimeFormatState}
                        onTimeFormatStateChange={this.handleTimeFormatStateChange}
                    />
                </div>
                <div className='scheduler-container'>
                    <Scheduler
                        events={data}
                        timeFormatState={currentTimeFormatState}
                        onDataUpdated={this.logDataUpdate}
                    />
                </div>
                <MessageArea
                    messages = {messages}
                />
            </div>
          
        </Route>

      </div>

      </Switch>
    </div>
  );
}
}

export default App;
