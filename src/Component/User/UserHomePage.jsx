import React from 'react'
import UserCoursePageContainer from '../../Container/User/UserCoursePageContainer'
import FooterWeb from '../FooterWeb'
import UserNavbar from './Navbar/UserNavbar'

const UserHomePage = () => {
  return (
    <>
    <UserNavbar/>
    <br/><br/><br/>
    <div className='container-fluid d-flex flex-row justify-content-center align-items-center ps-5'>
        <UserCoursePageContainer/>
    </div><br/><br/><br/><br/><br/>
    <div className='footer-bottom'>
      <FooterWeb/>
    </div>
    </>
    
  )
}

export default UserHomePage