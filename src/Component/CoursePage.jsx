 import React from 'react'
 import { Spinner, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
 const CoursePage = ({
    courses,
    loading
 }) => {
   return (
    <div>
        {
        loading
        ?
        <Spinner animation="border" variant='primary'/>
        :
        courses?.miniproject_course.map((course) =>(
          <Card className="mb-3" border="primary" style={{ width: '27rem' }}>
            <Card.Header >{course.title}</Card.Header>
            <Card.Body>
              <Card.Title>{course.mentor}</Card.Title>
                <div>Deskripsi : <br/>{course.deskripsi}</div>
                <Link to ={`/Course/${course.id_course}`} key={course.id}>
                    <Button className='mt-3' variant="primary">Enroll now!</Button>
                </Link>  
            </Card.Body>
          </Card>
        ))
      }
    </div>
    
   )
 }
 
 export default CoursePage