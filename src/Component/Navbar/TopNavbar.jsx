import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import "../../Css/TopNavbar.css"
import Dropdown from 'react-bootstrap/Dropdown';
import SideNavbar from './SideNavbar';
import MiniProfileContainer from '../../Container/MiniProfileContainer';



const TopNavbar = () => {
  return (
    <>
    <Navbar>
        <Container fluid className='navbar'>
            <Col sm={6} lg={8}>
            <div>
            <SideNavbar/>
            </div>
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
                <Dropdown className="d-flex justify-content-center login-card pe-5">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                      Your Account!
                    </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <MiniProfileContainer/>
                      </Dropdown.Menu>
                </Dropdown>
            </Col>
        </Container>
    </Navbar>
    </>
  )
}

export default TopNavbar