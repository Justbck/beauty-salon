import React from 'react';
import './header.styles.scss';

import Info from '../info/info.component';



const Header = () => (
    <div className='header'>
        <Info/>
        <div id="navigation-bar">
        <nav>
          <ul>
        
            <li><a href=''>Home</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>Sign-up</a></li>
            <li><a href=''>Contact</a></li>
            <a href=''id="menu-icon"></a>
          </ul>
        </nav>
      </div>
        
    </div>
  
);

export default Header;


