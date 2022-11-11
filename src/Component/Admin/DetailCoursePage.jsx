import React from 'react'
import { Spinner,Card, Container } from 'react-bootstrap'
import '../../Css/CourseDetail.css'
import FooterWeb from '../FooterWeb'
import TopNavbar from './Navbar/TopNavbar'
import { motion } from 'framer-motion'

const DetailCoursePage = ({
    handleGoBack,
    courseData,
    loading
}) => {
  const renderData = () =>(
    <>
    <Container fluid>
      <div className='course-d container w-50 d-flex flex-column justify-content-center font-merri'>
        <Card>
          <div>
            <Card.Img variant="top" src={(require ('../../Img/course-img.jpg'))} width={400} height={350}></Card.Img>
            <Card.Header>{courseData.miniproject_course[0].title}</Card.Header>
          </div>
          <Card.Body style={{height:'20vh'}} className='d-flex flex-column justify-content-between'>
            <div>
            {courseData.miniproject_course[0].deskripsi_full}<br/><br/>
            Tanggal : - <br/>
            Mentor : {courseData.miniproject_course[0].mentor}
            </div>
            <motion.div className='p-1 d-flex flex-row justify-content-end'>
                <motion.Button 
                whileHover={{scale: 1.001}} 
                className="btn btn-primary w-30 text-small" onClick={handleGoBack}>
                  Back
                </motion.Button>
            </motion.div>
          </Card.Body>
        </Card>
      </div>
        <FooterWeb/>
    </Container>
    </>
    )
  return (
    <>
    <div>
    <TopNavbar/>
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