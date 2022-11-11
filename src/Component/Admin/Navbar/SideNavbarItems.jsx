import React from 'react'
import { Form } from 'react-bootstrap'
import { Stack, Button } from 'react-bootstrap'
import { ToastContainer} from 'react-toastify';
import '../../../Css/SideNavbar.css'
import { motion } from 'framer-motion';

const SideNavbarItems = ({
  formData,
  handleSubmit,
  handleChangeFormData
}) => {
  const {id,id_course, mentor, deskripsi, deskripsi_full, title, } = formData;
  return (
    <>
   <div className=''>
        <Stack gap={4} className="d-flex flex-column justify-content-start font-merri">
            <Form onSubmit={handleSubmit}>
              <Stack direction="vertical" gap={3}>
                      <Form.Group>
                          <Form.Label className='text-label'>Id</Form.Label>
                          <Form.Control 
                          required
                          value={id}
                          
                          onChange={(ev) => handleChangeFormData("id", ev.currentTarget.value)} />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label className='text-label'>Id Course</Form.Label>
                          <Form.Control 
                          required
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
                      <motion.div className='d-flex justify-content-center'
                      whileHover={{ scale: 1.02, originX:1 }}
                      whileTap={{ scale: 0.95 }}>
                      <Button className='button-submit' type="submit" >
                      <ToastContainer />
                      Submit</Button>
                      </motion.div>
                      
              </Stack>
            </Form>
          </Stack>
          </div>
    </>
  )
}

export default SideNavbarItems