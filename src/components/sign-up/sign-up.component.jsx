import React from 'react';
import './sign-up.styles.scss';


import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor() {
        super();


        this.state = {
            displayName: '',
            email:'',
            password:'',
            confirmPassword:''
        };
    }


    handleSubmit =  async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);

        }

    };

    handleChange = event => {
        const {name,value} = event.target;
        this.setState({[name]: value});
    };




    render() {

        const { displayName, email, password, confirmPassword} = this.state;


        return (
            <div className = "sign-up">
            <div className = 'title'>
                <h2>I do not have an account</h2>
                    <span>Sign up with your email and password</span>
                    </div>
                
                <form className = 'sign-up-form' onSubmit = {this.handleSubmit}>
                    <div className='group'>
                    <input 
                        type = 'text'
                        name = 'displayName'
                        value = {displayName} 
                        onChange = {this.handleChange} 
                        label = 'Display Name'
                        required
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Name</label>
                    </div>
                    

                    <div className='group'>
                    <input 
                        type = 'email'
                        name = 'email'
                        value = {email} 
                        onChange = {this.handleChange} 
                        label = 'Email'
                        required
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Email</label>
                    </div>
                  

                    <div className='group'>
                    <input 
                        type = 'password'
                        name = 'password'
                        value = {password} 
                        onChange = {this.handleChange} 
                        label = 'Password'
                        required
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Password</label>
                    </div>
                    
                    <div className='group'>
                    <input 
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword} 
                        onChange = {this.handleChange} 
                        label = 'Confirm Password'
                        required
                    />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Confirm Password</label>
                    </div>
                   

                    <button className ='sub-button' type= 'submit'> sign up </button>
                   




                
                </form>

            
            </div>

        )
    }
    
}

export default SignUp;

