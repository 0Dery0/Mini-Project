import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import "../../../Css/TopNavbar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import SideNavbar from './SideNavbar';
import AdminMiniProfileContainer from '../../../Container/Admin/AdminMiniProfileContainer';
import { Form } from 'react-bootstrap';
import { motion } from 'framer-motion';


const TopNavbar = () => {
  return (
    <>
    <Navbar>
        <Container fluid className='navbar pt-2'>
            <Col sm={6} lg={8} className='d-flex flex-row'>
            <motion.div className='side-nav'
            whileHover={{scale: 1.1}}>
            <SideNavbar/>
            </motion.div>
            <div>
            <Form className="d-flex">
            </Form>
            </div>
            </Col>
            <Col className='d-flex flex-row justify-content-around' sm={4} lg={2}>
            </Col>
            <Col  sm={2} lg={2}>
            <Navbar.Toggle aria-controls="navbar-example"/>
                <Dropdown className="d-flex justify-content-center pe-1 pt-2">
                <motion.div
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                    <Dropdown.Toggle className='text-small' id="dropdown-autoclose-true">
                      Your Account!
                    </Dropdown.Toggle>
                </motion.div>
                      <Dropdown.Menu>
                      <AdminMiniProfileContainer/>
                      </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Container>
    </Navbar>
    {/* <div className='container-fluid'>
      <HomePage courseData={courseData}/>
    </div> */}
    </>
  )
}

export default TopNavbar