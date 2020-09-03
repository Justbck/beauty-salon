import React from 'react';
import './info.styles.scss';

const Info = () => (
    <div className = 'info-nav-bar'>
            <div className = 'phone'>Phone: xxx xxx xxx</div>

                <span className = 'days'>Days: Monday-Friday <br/>Hours: 8-22 </span>

            
            <div className = 'media'>
                    <ul className="social-icons">
                        <li><a href="" className="social-icon"> <i class="fa fa-facebook"></i></a></li>
                        <li><a href="" className="social-icon"> <i class="fa fa-instagram"></i></a></li>
                        <li><a href="" className="social-icon"> <i class="fa fa-globe"></i></a></li>           
                    </ul>
            </div> 
    </div>

);
    
export default Info;
    