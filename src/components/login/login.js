import React, { useState } from 'react';
import './login.scss';
import live2 from "../../img/l2.png";
import logo2 from "../../img/logo2.PNG";
import FormInput from '../form-input/form-input';
import CustomButton from '../../custom-button/custom-button';
import axios from 'axios';
import { useEffect } from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleEmail = e => {
        setEmail(e.target.value);
    }
    const HandlePassword = e => {
        setPassword(e.target.value);
    }
    
    useEffect(() => {
        
    })
    const HandleSignIn = e => {
        e.preventDefault();

        const user = {
            email,
            password
        }
        console.log(user);
        
        fetch('https://cors-anywhere.herokuapp.com/https://liveizy2.azurewebsites.net/api/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
              })
            })
            .then(res => console.log(res.json()))
            .then(resJson => console.log(resJson))
            .catch(e => console.log(e))
        
    }

    return (
        <div className='container'>
            <img src={live2} alt="our mission" className='our-mission' />
            <section>
                <div className="img-div">
                    <img src={logo2} alt="logo"/>
                </div>
                <div className='form-section'>
                    <h2>LOGIN</h2>
                    <form onSubmit={HandleSignIn}>
                        <div className="form-input-container">
                            <FormInput 
                                type='email'
                                name='email'
                                label='Email Address'
                                value={email}
                                onChange={HandleEmail}
                                required
                            />
                            <FormInput 
                                type='password'
                                name='password'
                                label='Create Password'
                                value={password}
                                onChange={HandlePassword}
                                required
                            />
                        </div>
                        <CustomButton type='submit'>Login</CustomButton>
                    </form>
                    <p className="agreement">Need a Liveizy account?, <u>create an account</u></p>
                    <p className="terms"><u>Terms & Conditions</u></p>
                </div>
            </section>
        </div>        
    )
}

export default Login;