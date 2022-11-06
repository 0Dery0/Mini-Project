import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import UserMiniProfileContainer from '../../../Container/User/UserMiniProfileContainer';





const UserNavbar = () => {
  return (
    <>
    <Navbar>
        <Container fluid className='navbar'>
            <Col sm={6} lg={8}>
            <div>
            <Navbar.Brand className='ps-4' href='/UserHome'>
            <img
              alt=""
              src={(require('../../../Img/logo.png'))}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            SPY-ON
          </Navbar.Brand>
            </div>
            </Col>
            <Col className='d-flex flex-row justify-content-around' sm={4} lg={2}>
            <div>
                
            </div>
            <a className='text-n' href='/Help'>
                Help
            </a>
            </Col>
            <Col  sm={2} lg={2}>
            <Navbar.Toggle aria-controls="navbar-example"/>
                <Dropdown className="d-flex justify-content-center login-card pe-5">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                      Your Account!
                    </Dropdown.Toggle>
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