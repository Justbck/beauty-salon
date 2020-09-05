import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import Info from '../info/info.component';



const Header = ({ currentUser }) => (
    <div className='header'>
        <Info/>
      
        <div className='links'>
            <Link className='link' to ='/'>Home</Link>
            <Link className='link' to = '/service'>Services</Link>
            <Link className='link' to = '/contact'>Contact</Link>
            {
              currentUser ? (
             
              <div className= 'link' onClick={() => auth.signOut()}>
               Sign out  
              </div>
              ) : (
              <Link className='link' to ='/signin'>
                Sign in
              </Link>
              
            )}

          </div>
          
      
        
    </div>
  
);


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})



export default connect(mapStateToProps)(Header);


