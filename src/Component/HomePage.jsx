import React from 'react'
import { Col, Row, Stack, Form, Button } from 'react-bootstrap'
import CoursePageContainer from '../Container/CoursePageContainer'
import TopNavbar from './Navbar/TopNavbar'

const HomePage = ({
  formData,
  handleDelete,
  handleSubmit,
  handleChangeFormData
}) => {
  const {id_course, mentor, deskripsi, deskripsi_full, title, } = formData;
  return (
    <>
    <TopNavbar/>
    <div className='container-fluid m-2'>
      <Row>
      <Col sm={4} lg={6}>
      <div className='container-fluid'>
        <Stack gap={4} className="d-flex flex-column justify-content-center align-items-center">
            <h1 className='tittle'>Add Course</h1>
            <Form onSubmit={handleSubmit}>
              <Stack direction="vertical" gap={3}>
                      <Form.Group>
                          <Form.Label className='text-label'>Id Course</Form.Label>
                          <Form.Control 
                          value={id_course} 
                          onChange={(ev) => handleChangeFormData("id_course", ev.currentTarget.value)} />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label className='text-label'>Mentor</Form.Label>
                          <Form.Control
                          value={mentor}
                          onChange={(ev) => handleChangeFormData("mentor", ev.currentTarget.value)} />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label className='text-label'>Deskripsi</Form.Label>
                          <Form.Control
                          value={deskripsi} 
                          onChange={(ev) => handleChangeFormData("deskripsi", ev.currentTarget.value)}/>
                      </Form.Group>
                      <Form.Group>
                          <Form.Label className='text-label'>Deskripsi Full</Form.Label>
                          <Form.Control
                          value={deskripsi_full} 
                          onChange={(ev) => handleChangeFormData("deskripsi_full", ev.currentTarget.value)}/>
                      </Form.Group>
                      <Form.Group>
                          <Form.Label className='text-label'>Title</Form.Label>
                          <Form.Control
                          value={title}
                          onChange={(ev) => handleChangeFormData("title", ev.currentTarget.value)}/>
                      </Form.Group>
                      <Button className='button-submit' type="submit">Submit</Button>
              </Stack>
            </Form>
          </Stack>
            </div>
      </Col>
      <Col sm={6} lg={6}>
        Available Course
      <CoursePageContainer/>
      </Col>
    </Row>
    </div>
    
    
    </>
    
  )
}

export default HomePage