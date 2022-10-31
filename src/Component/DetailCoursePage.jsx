import React from 'react'
import TopNavbar from './Navbar/TopNavbar'
import { Spinner,Card, Button } from 'react-bootstrap'

const DetailCoursePage = ({
    handleGoBack,
    courseData,
    loading
}) => {
  const renderData = () =>(
    <div className="d-flex flex-column align-items-center">
        <span>Title : {courseData.miniproject_course[0].title}</span>
        <span>Mentor : {courseData.miniproject_course[0].mentor}</span>
        <span>Deskripsi : {courseData.miniproject_course[0].deskripsi_full}</span>
       
    </div>
    )
  return (
    <>
    <div>
    <TopNavbar/>
    </div>
    <div>{
          loading
          ?
          <Spinner animation='grow' variant='primary'/>
          :
          renderData()
          }
          <button className="btn btn-primary" onClick={handleGoBack}>Back</button>
    </div>
    
    </>
    
  )
}

export default DetailCoursePage