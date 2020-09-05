import React from 'react';
import './info.styles.scss';

const Info = () => (
    <div className = 'info-nav-bar'>
            <div className = 'phone'>  <span className = 'days'>Monday-Friday <br/>Hours: 8am - 9pm </span></div>

              

            
            <div className = 'media'>
                    <ul className="social-icons">
                        <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                        <li><a href="" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
                        <li><a href="" className="social-icon"> <i className="fa fa-globe"></i></a></li>           
                    </ul>
            </div> 
    </div>

);
    
export default Info;
    