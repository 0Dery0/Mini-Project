import React from 'react'
import CoursePageContainer from '../../Container/Admin/CoursePageContainer'
import TopNavbar from './Navbar/TopNavbar'
import 'react-toastify/dist/ReactToastify.css';
import FooterWeb from '../FooterWeb';

const HomePage = () => {
  return (
    <>
    <TopNavbar/><br/><br/><br/>
     <div className='container-fluid d-flex flex-row justify-content-center align-items-center ps-5'>
        <CoursePageContainer/>
      </div><br/><br/><br/><br/><br/>
      <div className='footer-bottom'>
      <FooterWeb/>
      </div>
    </>
  )
}

export default HomePage