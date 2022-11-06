import React from 'react'
import { Spinner,Card , Overlay, Tooltip, Button } from 'react-bootstrap'
import '../../Css/CourseDetail.css'
import UserNavbar from '../User/Navbar/UserNavbar'
import { useState, useRef } from 'react'

const UserDetailCoursePage = ({
    handleGoBack,
    courseData,
    loading,
    handleEnroll,
    formData,
    handleChangeFormData
}) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const renderData = () =>(
    <div className='course-d container w-50 d-flex flex-column justify-content-center'>
    <Card>
        <div>
        <Card.Img variant="top" src={(require ('../../Img/course-img.jpg'))} width={400} height={350} />
        </div>
        <Card.Header><span className='course-title'>{courseData.miniproject_course[0].title}</span><br/>
        </Card.Header>
        <Card.Body style={{height:'21vh'}} className='d-flex flex-column justify-content-between'>
        <div>
        {courseData.miniproject_course[0].deskripsi_full}<br/><br/>
        Tanggal : - <br/>
        Mentor : {courseData.miniproject_course[0].mentor}
        </div><br/>
          <div className='d-flex flex-row justify-content-between'>
            <Button ref={target} onClick={() => setShow(!show)}>
              Enroll Now!
            </Button>
              <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                  <Tooltip id="overlay-example" {...props}>
                    Comming Soon!!!
                  </Tooltip>
                )}
              </Overlay>
              <button className="btn btn-primary w-30" onClick={handleGoBack}>Back</button>
            </div>
        </Card.Body>
      </Card>
    </div>
    
        
       
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

export default UserDetailCoursePage