 import React from 'react'
 import { Spinner, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
 const CoursePage = ({
    courses,
    loading,
    handleDelete
 }) => {
   return (
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
                <div>Deskripsi : <br/>{course.deskripsi}</div>
                <div className='d-flex flex-row justify-content-between'>
                  <div>
                  <Link to ={`/Course/${course.id}`} key={course.id_course}>
                      <Button className='mt-3' variant="primary">Enroll now!</Button>
                  </Link>
                  </div>
                  <div>
                  <Button onClick={()=>handleDelete(course.id)}>X</Button>
                  </div>
                </div>
            </Card.Body>
          </Card>
        ))
      }
    </div>
    
   )
 }
 
 export default CoursePage