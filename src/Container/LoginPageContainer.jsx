import React from 'react'
import LoginPage from '../Component/LoginPage'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPageContainer = () => {
    const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

const navigate = useNavigate();

const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcode = {
        email: 'admin@admin.com',
        password: 'admin'
    }

    if ((emailInput === hardcode.email) && (passwordInput === hardcode.password)) {
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        navigate('/Home');
    } else {
        //bad combination
        alert('wrong email or password combination');
    }
}
  return (
    <LoginPage  emailInput={emailInput}
                passwordInput={passwordInput}
                handleEmailChange={handleEmailChange}
                handleLoginSubmit={handleLoginSubmit}
                handlePasswordChange={handlePasswordChange}/>
  )
}

export default LoginPageContainer