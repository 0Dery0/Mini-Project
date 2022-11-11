import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import UserMiniProfileContainer from '../../../Container/User/UserMiniProfileContainer';
import '../../../Css/UserNavbar.css'
import { motion } from 'framer-motion';





const UserNavbar = () => {
  return (
    <>
    <Navbar>
        <Container fluid className='navbar'>
            <Col sm={6} lg={8}>
            <div>
            <Navbar.Brand className='ps-4 d-flex flex-row' href='/UserHome'>
            <motion.Img
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
              alt=""
              src={(require('../../../Img/logo.png'))}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            SPY-ON
          </Navbar.Brand>
            </div>
            </Col>
            <Col className='d-flex flex-row justify-content-around' sm={4} lg={2}>
            <div>
            </div>
            <motion.a 
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.9}}
            className='text-n pt-2' href='/Help'>
                Help
            </motion.a>
            </Col>
            <Col  sm={2} lg={2}>
            <Navbar.Toggle aria-controls="navbar-example"/>
                <Dropdown className="d-flex justify-content-center pe-1 pt-2">
                  <motion.div
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}>
                    <Dropdown.Toggle className='text-small' id="dropdown-autoclose-true">
                      Your Account!
                    </Dropdown.Toggle>
                    </motion.div>
                      <Dropdown.Menu>
                        <UserMiniProfileContainer/>
                      </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Container>
    </Navbar>
    </>
  )
}

export default UserNavbar