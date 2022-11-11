import React from 'react'
import '../Css/FooterWeb.css'
import '../Css/LoginPage.css';
import '../Css/CardCourse.css'
import logo from '../Img/logo.png'
import Container from 'react-bootstrap/Container';
import { Spinner, Form, Col,Row, Card, Navbar, FloatingLabel, Dropdown } from 'react-bootstrap';
import FooterWeb from './FooterWeb';
import LoginCardWhyUs from './LoginCardWhyUs';
import LoginTestimoni from './LoginTestimoni';
import { motion } from "framer-motion";


const LoginPage = ({
    data,
    loading,
    emailInput,
    passwordInput,
    handleEmailChange,
    handleLoginSubmit,
    handlePasswordChange,
}) => {

  return (
    <div>
    <Navbar>
        <Container fluid className='navbar'>
            <Col sm={6} lg={8}>
            <div>
                <Navbar.Brand className='ps-4'  href='/'>
                    <motion.Img
                    whileHover={{scale: 1.3, originX: 0}}
                    alt="logo"
                    src={logo}
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
            </Col>
            <Col  sm={2} lg={2}>
            <Navbar.Toggle aria-controls="navbar-example"/>
                <Dropdown className="d-flex justify-content-center pe-1 pt-2">
                    <motion.div
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.9}}>
                    <Dropdown.Toggle className='text-small' id="dropdown-autoclose-true">
                        Login here!
                    </Dropdown.Toggle>
                    </motion.div>
                    <Dropdown.Menu>
                    <Card style={{ width: '13rem' }} className='login-card' border="light">
                        <Card.Body>
                            <Card.Title className='font-merri mb-3'>Enter your email :</Card.Title>
                            <form autoComplete="off" onSubmit={handleLoginSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email"
                                className="form-control block-input"
                                id="Email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={emailInput}
                                onChange={handleEmailChange}/>
                            </FloatingLabel>
                            <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                                <Form.Control type="password"
                                autoComplete="new-password"
                                className="form-control block-input"
                                id="Password"
                                placeholder="Password"
                                value={passwordInput}
                                onChange={handlePasswordChange}/>
                            </FloatingLabel>
                            <motion.div
                            whileHover={{ scale: 1.1, originX: 0, }}
                            whileTap={{ scale: 0.9 }}
                            >
                            <button type="submit" className="btn btn-primary text-small login-card-button">
                                Login
                            </button>
                            </motion.div>
                            
                        </form>
                        </Card.Body>
                    </Card>   
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            
        </Container>
    </Navbar><br/><br/><br/>
    <Container fluid className=''>
        <Row className='bg-login'>
            <Col md={6} lg={5}>
                <div className='text-login'>
                Spy-on merupakan singkatan dari Sistem Pembelajaran Young Generation ialah sebuah web yang memberikan pelajaran secara online didukung 
                oleh para mentor yang professional di bidangnya masing-masing serta memiliki berbagai koneksi pengajar yang tersebar diseluruh indonesia
                membuat pengajaran dapat berlangsung secara lancar dan fleksibel.
                </div>
                <motion.button
                    className='button-us'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    ><a href='#section-us' className='text-n'>Learn More! </a>
                     
                    </motion.button>
                
            </Col>
            <Col lg={1}></Col>
            <Col>
            
            </Col>
      </Row>
      <div className='d-flex flex-column'>
        <div className='text-pilihan d-flex flex-column align-items-center'>
            Program Pilihan :
        </div>
        <div className='d-flex flex-wrap justify-content-evenly'>
        
        {
            loading
            ?
            <Spinner animation="border" variant='primary'/>
            :
            data?.miniproject_course.map((course) =>(
            <motion.div
            whileHover={{ scale: 1.1 }}
            >
            <Card className="m-2 course-card-shadow" style={{ width: '19rem' }}>
                <Card.Header className='d-flex align-items-center course-card-header'>{course.title}</Card.Header>
                <Card.Body>
                <Card.Title className='course-card-title'>{course.mentor}</Card.Title>
                    <Card.Text className='d-flex flex-column justify-content-between course-card-text'>
                    <div>{course.deskripsi}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
            </motion.div>
            
            ))
        }
        </div>
        </div>
            <div>
                <div className='text-pilihan d-flex flex-column align-items-center' id='section-us'>
                    Why Us :
                </div>
                <div>
                    <LoginCardWhyUs/>
                </div>
            </div>
        <div>
        <div className='text-pilihan d-flex flex-column align-items-center'>
            Testimoni Pengguna :
        </div>
        <div>
            <LoginTestimoni/>
        </div>
    </div>
        </Container>
        <FooterWeb/>
    </div>
    
  );
}

export default LoginPage