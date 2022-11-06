 import React from 'react'
 import { Spinner, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';

 
 const CoursePage = ({
    courses,
    loading,
    handleDelete
 }) => {
  
   return (
    <>
    
  <br/>
  <div className='d-flex flex-row flex-wrap'>
        {
        loading
        ?
        <Spinner animation="border" variant='primary'/>
        :
        courses?.miniproject_course.map((course) =>(
          <Card className="m-1" border="primary" style={{ width: '27rem' }}>
            <Card.Header >
              Id : {course.id} <br/>
              Id Course : {course.id_course}<br/>
              {course.title}</Card.Header>
            <Card.Body>
              <Card.Title>{course.mentor}</Card.Title>
                <Card.Text className='d-flex flex-column justify-content-between' style={{height:'20vh'}}>
                  <div>Deskripsi : <br/>{course.deskripsi}</div>
                  <div className='d-flex flex-row justify-content-between'>
                  <Link to ={`/Course/${course.id}`} key={course.id_course}>
                      <Button variant="primary">Check it!</Button>
                  </Link>
                  <Button 
                  onClick={()=>handleDelete(course.id)}>
                  <ToastContainer />X</Button>
                  </div>
                </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </div>
    </>
    
    
   )
 }
 
 export default CoursePage