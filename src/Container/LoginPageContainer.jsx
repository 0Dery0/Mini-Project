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
        admin_email: 'admin@admin.com',
        admin_password: 'admin'
    }

    if ((emailInput === hardcode.admin_email) && (passwordInput === hardcode.admin_password)) {
        navigate('/Home');
    } else {
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