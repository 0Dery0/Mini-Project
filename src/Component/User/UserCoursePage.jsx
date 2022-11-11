 import React from 'react'
 import { Spinner, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
 
 const UserCoursePage = ({
    courses,
    loading,

 }) => {
   return (
    <div className='d-flex flex-row flex-wrap justify-content-center'>
        {
        loading
        ?
        <Spinner animation="border" variant='primary'/>
        :
        courses?.miniproject_course.map((course) =>(
        <motion.div
         whileHover={{scale: 1.02}}>
          <Card className="m-1 course-card-shadow font-merri" border="primary" style={{ width: '22rem' }}>
            <Card.Header className='course-title' style={{height:'8vh'}}>{course.title}</Card.Header>
            <Card.Body>
              <Card.Title>{course.mentor}</Card.Title>
                <Card.Text className='d-flex flex-column justify-content-between' style={{height:'20vh'}}>
                  <div>Deskripsi : <br/>{course.deskripsi}</div>
                  <div className='d-flex justify-content-start '>
                  <Link to ={`/UserCourse/${course.id}`} key={course.id_course}>
                        <Button className='mt-3 text-small' variant="primary">Check it Out!</Button>
                    </Link>
                  </div>
                </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
          
        ))
      }
    </div>
    
   )
 }
 
 export default UserCoursePage