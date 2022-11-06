import React from 'react'
import { Spinner,Card } from 'react-bootstrap'
import '../../Css/CourseDetail.css'
import UserNavbar from '../User/Navbar/UserNavbar'

const DetailCoursePage = ({
    handleGoBack,
    courseData,
    loading
}) => {
  const renderData = () =>(
    <>
    
     <div className='course-d container w-50 d-flex flex-column justify-content-center'>
      <Card>
        <div>
        <Card.Img variant="top" src={(require ('../../Img/course-img.jpg'))} width={400} height={350} />
        <Card.Header>{courseData.miniproject_course[0].title}</Card.Header>
        </div>
        <Card.Body style={{height:'20vh'}} className='d-flex flex-column justify-content-between'>
        <div>
        {courseData.miniproject_course[0].deskripsi_full}<br/><br/>
        Tanggal : - <br/>
        Mentor : {courseData.miniproject_course[0].mentor}
        </div>
        
        <div className='p-1 d-flex flex-row justify-content-end'>
            <button className="btn btn-primary w-30" onClick={handleGoBack}>Back</button>
        </div>
        </Card.Body>
      </Card>
    </div>
    </>
   
    
        
       
    )
  return (
    <>
    <div>
    <UserNavbar/>
    </div><br/><br/><br/><br/><br/>
    <div className='d-flex justify-content-center'>
        {
          loading
          ?
          <Spinner animation='grow' variant='primary'/>
          :
          renderData()
        }
    </div>
    </>
    
  )
}

export default DetailCoursePage