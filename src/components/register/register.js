import React, { useState } from 'react';
import './register.scss';
import ourMission from "../../img/our mission.PNG";
import logo from "../../img/logo.png";
import FormInput from '../form-input/form-input';
import CustomButton from '../../custom-button/custom-button';


const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const HandleFirstName = e => {
        setFirstName(e.target.value);
    }
    const HandleLastName = e => {
        setLastName(e.target.value);
    }
    const HandleEmail = e => {
        setEmail(e.target.value);
    }
    const HandlePassword = e => {
        setPassword(e.target.value);
    }
    const HandlePhoneNumber = e => {
        setPhoneNumber(e.target.value);
    }
    const HandleSignUp = e => {
        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            password,
            phoneNumber
        }
        console.log(user);

        // console.log(fullName, email, password, confirmPassword, referral);

        fetch('https://cors-anywhere.herokuapp.com/https://liveizy2.azurewebsites.net/api/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    phoneNumber
                })
        })
            .then(res => console.log(res.json()))
            .then(resJson => console.log(resJson))
            .catch(e => {
                console.log(e);                
            })

        // setFullName('');
        // setEmail('');
        // setPassword('');
        // setConfirmPassword('');
        // setReferral('');
    }

    return (
        <div className='container'>
            <img src={ourMission} alt="our mission" className='our-mission' />
            <section>
                <div className="img-div">
                    <img src={logo} alt="logo"/>
                </div>
                <div className='form-section'>
                    <h2>CREATE YOUR FREE ACCOUNT</h2>
                    <p>Already have an account? <u>Log in</u></p>
                    <form onSubmit={HandleSignUp}>
                        <div className="form-input-container">
                            <FormInput 
                                type='text'
                                name='firstName'
                                label='First Name'
                                value={firstName}
                                onChange={HandleFirstName}
                                required
                            />
                            <FormInput 
                                type='text'
                                name='lastName'
                                label='Last Name'
                                value={lastName}
                                onChange={HandleLastName}
                                required
                            />
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
                            <FormInput 
                                type='text'
                                name='phoneNumber'
                                label='Phone Number'
                                value={phoneNumber}
                                onChange={HandlePhoneNumber}
                                required
                            />
                        </div>
                        <CustomButton type='submit'>Create Account</CustomButton>
                    </form>
                    <p className="agreement">By signing up, you are agreeing to <u>Liveizy</u></p>
                    <p className="terms"><u>Terms & Conditions</u></p>
                </div>
            </section>
        </div>        
    )
}

export default Register;