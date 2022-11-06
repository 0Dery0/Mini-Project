import React from 'react'
import LoginPage from '../Component/LoginPage'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';

const GetCourse = gql`
query MyQuery {
    miniproject_course(limit: 3, order_by: {id: asc}) {
      deskripsi
      mentor
      title
      id
      deskripsi_full
      id_course
    }
  }`


const LoginPageContainer = () => {
const {data, loading} = useQuery(GetCourse)
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
        admin_password: 'admin',
        user_email: 'user@user.com',
        user_password: 'user'
    }

    if ((emailInput === hardcode.admin_email) && (passwordInput === hardcode.admin_password)) {
        navigate('/Home');
    }else if ((emailInput === hardcode.user_email) && (passwordInput === hardcode.user_password)) {
        navigate('/UserHome');
    } else {
        alert('wrong email or password combination');
    }
}
  return (
    <LoginPage  emailInput={emailInput}
                passwordInput={passwordInput}
                handleEmailChange={handleEmailChange}
                handleLoginSubmit={handleLoginSubmit}
                handlePasswordChange={handlePasswordChange}
                data={data}
                loading={loading}/>
  )
}

export default LoginPageContainer