 import React from 'react'
 import { Spinner, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
 const UserCoursePage = ({
    courses,
    loading,

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
            <Card.Header >{course.title}</Card.Header>
            <Card.Body>
              <Card.Title>{course.mentor}</Card.Title>
                <Card.Text className='d-flex flex-column justify-content-between' style={{height:'20vh'}}>
                  <div>Deskripsi : <br/>{course.deskripsi}</div>
                  <div className='d-flex justify-content-start '>
                  <Link to ={`/UserCourse/${course.id}`} key={course.id_course}>
                        <Button className='mt-3' variant="primary">Check it Out!</Button>
                    </Link>
                  </div>
                </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </div>
    
   )
 }
 
 export default UserCoursePage