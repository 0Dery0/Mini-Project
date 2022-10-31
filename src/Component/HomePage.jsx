import React from 'react'
import CoursePageContainer from '../Container/CoursePageContainer'
import TopNavbar from './Navbar/TopNavbar'

const HomePage = () => {
  return (
    <>
    <TopNavbar/>
    <br/><br/><br/>
    <div className='container-fluid d-flex flex-row justify-content-center'>
      <CoursePageContainer/>
    </div>  
    </>
    
  )
}

export default HomePage