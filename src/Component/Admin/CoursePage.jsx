 import React from 'react'
 import { Spinner, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import { motion } from 'framer-motion';

 
 const CoursePage = ({
    courses,
    loading,
    handleDelete
 }) => {
  
   return (
    <>
    
  <br/>
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
            <Card.Header className=''>
              Id : {course.id} <br/>
              Id Course : {course.id_course}<br/>
              {course.title}</Card.Header>
            <Card.Body>
              <Card.Title>{course.mentor}</Card.Title>
                <Card.Text className='d-flex flex-column justify-content-between' style={{height:'19vh'}}>
                  <div>Deskripsi : <br/>{course.deskripsi}</div>
                  <div className='d-flex flex-row justify-content-between'>
                  <Link to ={`/Course/${course.id}`} key={course.id_course}>
                      <Button variant="primary" className='text-small'>Check it!</Button>
                  </Link>
                  <motion.Button 
                  whileHover={{scale:1.001, originX: 5 }}
                  onClick={()=>handleDelete(course.id)} className='text-small x-button'>
                  <ToastContainer/>X</motion.Button>
                  </div>
                </Card.Text>
            </Card.Body>
          </Card>
          </motion.div>
        ))
      }
    </div>
    </>
    
    
   )
 }
 
 export default CoursePage