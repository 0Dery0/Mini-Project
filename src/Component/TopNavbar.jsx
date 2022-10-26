import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import '../Css/TopNavbar.css'



const TopNavbar = () => {
  return (
    <Navbar>
        <Container fluid className='navbar'>
            <Col sm={6} lg={8}>
            <Navbar.Brand href="/" className='ps-4'>
            <img
              alt=""
              src="../Img/logo.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            SPY-ON
          </Navbar.Brand>
            </Col>
            <Col className='d-flex flex-row justify-content-around' sm={4} lg={2}>
            <div>
                About
            </div>
            <div>
                Help
            </div>
            </Col>
            <Col  sm={2} lg={2}>
            <Navbar.Toggle aria-controls="navbar-example"/>
            </Col>
            
        </Container>
    </Navbar>
  )
}

export default TopNavbar