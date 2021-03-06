import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className='register'>
    <div className = 'sign-in-and-sign-up-page'>
        <SignIn/>
        <SignUp/>
    </div>
    </div>
);

export default SignInAndSignUpPage;