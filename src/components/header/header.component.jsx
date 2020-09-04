import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';


import Info from '../info/info.component';



const Header = () => (
    <div className='header'>
        <Info/>
        <div id="navigation-bar">
        <nav>
          <ul>
            <Link className='link' to ='/'><li><a>Home</a></li></Link>
            <Link className='link' to = 'service'><li><a>Services</a></li></Link>
            <Link className='link'><li><a>Sign in</a></li></Link>

            <Link className='link' to = '/contact'><li><a>Contact</a></li></Link>
            
          </ul>
        </nav>
      </div>
        
    </div>
  
);

export default Header;


