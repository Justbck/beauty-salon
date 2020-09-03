import React from 'react';
import './contact.styles.scss';

const Contact = () => (
    <div className='contact'>
    <div className = 'contact-page'>

    <div className = 'text'>
        <h2>This salon does not exist.</h2>
        <p className='sub-text'> This website was developed as Justyna Bucko's portfolio project.</p>
    </div>

    <h4 className='find-me'>Find me on: </h4>
    <div className="footer-social-icons">
    <ul className="social-icons">
        <li><a href="https://github.com/Justbck" className="social-icon"> <i class="fa fa-github"></i></a></li>
        <li><a href="http://justyna-bucko.pl/" className="social-icon"> <i class="fa fa-globe"></i></a></li>
        <li><a href="https://www.behance.net/Justbck" className="social-icon"> <i class="fa fa-behance"></i></a></li>
        <li><a href="mailto:buckojustyna@gmail.com" className="social-icon"> <i class="fa fa-envelope"></i></a></li>
        <li><a href="https://www.linkedin.com/in/justyna-bucko-51a2b5188/" className="social-icon"> <i class="fa fa-linkedin"></i></a></li>
       
    </ul>
</div>

    </div>
    </div>
);

export default Contact;