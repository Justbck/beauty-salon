import React, { Component } from 'react';
import Scheduler from './components/Scheduler';
import { Switch, Route, Redirect } from 'react-router-dom';
import MessageArea from './components/MessageArea';
import { connect } from 'react-redux';



import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Contact from './pages/contact/contact.component';
import ServicePage from './pages/servicepage/service.component';
import Toolbar from './components/Toolbar';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import YourBooking from './pages/your-booking/your-booking.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';






const data = [
 
];


class App extends React.Component {


  constructor() {
    super();

    this.state = {
      currentTimeFormatState: true,
      messages: []
  };
}

unsubscribeFromAuth = null;


componentDidMount() {

  const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth  = auth.onAuthStateChanged( async userAuth => {
    
    if(userAuth) {
      const userRef = await createUserProfileDocument(userAuth);


      userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
      });
    }
    setCurrentUser(userAuth);
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
      <Header/>
      <Switch>
      <div>
        <Route exact path = '/' component = {HomePage}/>
        <Route path = '/service' component = {ServicePage}/>
        <Route path = '/contact' component = {Contact}/>
        <Route path = '/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) : (<SignInAndSignUpPage/>)}/>
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


const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});



const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps)(App);
