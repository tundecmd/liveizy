import React, { useState } from 'react';
import './add-property.scss';
import AddPropertyFormInput from '../add-property-form-input/add-property-form-input';
import CustomButton from '../../custom-button/custom-button';
import profilepic from '../../img/profilepic.PNG'
import coverimage from '../../img/cover-image.PNG';
import axios from 'axios';
import imageToBase64 from 'image-to-base64';


const AddProperty = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [address, setAddress] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleUploadFile = e => {
        imageToBase64("../../img/profilepic.PNG") // you can also to use url
            .then(
                (response) => {
                    console.log(response); //cGF0aC90by9maWxlLmpwZw==
                }
            )
            .catch(
                (error) => {
                    console.log(error); //Exepection error....
                }
            )
    }
       

    const fileSelectHandler = e => {
        console.log(e.target.files[0]);

        setSelectedFile(e.target.files[0])
    }

    const fileUploader = e => {
        const fd = new FormData();
        fd.append('image', selectedFile, selectedFile.name)
        axios.post('https://cors-anywhere.herokuapp.com/https://liveizy2.azurewebsites.net/api/add', fd)
            .then(res => console.log(res))
            .catch(e => console.log(e))
    }

    const handleTitle = e => {
        setTitle(e.target.value);
    }
    
    const handleAddress = e => {
        setAddress(e.target.value);
    }
    
    const handleAmount = e => {
        setAmount(e.target.value);
    }
    
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiX2lkIjoiNWYxNThhNDhiYzMwYmIwMDQ1MjUzODEwIiwiZmlyc3ROYW1lIjoia2hhbiIsImxhc3ROYW1lIjoia2hhbiIsImVtYWlsIjoia2hhbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCROOXdnQkZwOWF5VmwyYmxJcURDTERPUENvUHZCc3lySWNSMjg1SVhPSlZaQjQwQWJjWXVIZSIsIl9fdiI6MH0sImlhdCI6MTU5NTI2MzQ3Mn0.xXOg7z1QujepMkITwZQEwNWONlUCh0bfxCm7byf9pOs";

    axios.interceptors.request.use(
        config => {
            config.headers.authorization = `Bearer ${accessToken}`;
            return config;
        },
        err => {
            return Promise.reject(err);
        }
    );
   

    const HandleAddProperty = (e, newItem) => {
        e.preventDefault();

        const pty = {
            title,
            amount,
            address,
            selectedFile
        }
        //console.log(pty)
        
        
        axios('https://cors-anywhere.herokuapp.com/https://liveizy2.azurewebsites.net/api/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    title,
                    amount,
                    address,
                    selectedFile    
                })
        })
            .then(res => console.log(res))
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
        <main className='main'>
            <div className="board">
            <img src={profilepic} alt=""/>
            </div>
            <div className="section">
                <div className="frame">
                    <h1>frame</h1>
                </div>
                <div className='section-form-pty'>
                    <div className="image-pty">
                        <img src={coverimage} alt=""/>
                    </div>
                    <form onSubmit={HandleAddProperty}>
                        <AddPropertyFormInput
                            type='text'
                            label='Property Name'
                            value={title}
                            onChange={handleTitle}
                            placeholder='Enter the property name'
                            required
                        />
                        <AddPropertyFormInput
                            type='text'
                            label='Address'
                            value={address}
                            onChange={handleAddress}
                            placeholder='Enter a location'
                            required
                        />
                        <AddPropertyFormInput
                            type='text'
                            label='Amount'
                            value={amount}
                            onChange={handleAmount}
                            placeholder='Enter an amount'
                            required
                        />
                        <React.Fragment>
                            <input
                                type='file'
                                name='file'
                                onChange={fileSelectHandler}
                                label='Select File'
                            />
                            <CustomButton 
                                type='button'
                                onClick={e => fileUploader(e)}
                            >
                                Upload
                            </CustomButton>
                        </React.Fragment>
                        <CustomButton
                            type='button'
                            onClick={e => HandleAddProperty(e)}
                        >
                            Add Property
                        </CustomButton>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default AddProperty
