import React from 'react';
import './sign-in.styles.scss';


import { signInWithGoogle } from '../../firebase/firebase.utils';



class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }


    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value,name} = event.target;

        this.setState({[name]: value })
    }

    




    render() {
        return (
            <div className = 'sign-in'>
                <div className='title'>
                <h2> I've already been here! </h2>
                <span>Sign in</span>
            </div>
            <form onSubmit = {this.handleSubmit}>
                <div className='group'>              
                <input name = "email"  type = "email" value = {this.state.email} onChange = {this.handleChange} required/>
                <span class="highlight"></span>
                <span class="bar"></span>
                
                <label>name</label>
                </div>
                <div className="group">
                <input name = "password" type = "password" value ={this.state.email} onChange = {this.handleChange} required />
                <span class="highlight"></span>
                <span class="bar"></span>
                
                <label>password</label>
                </div>


                <button className ='sub-button' type = "submit" value = "Submit Form">sign in</button>

                <button className = 'google-sign-in' onClick = {signInWithGoogle} >
                    {' '}
                    Sign in with Google {''}
                </button>


            </form>
            </div>
        )
    }
}


export default SignIn;
