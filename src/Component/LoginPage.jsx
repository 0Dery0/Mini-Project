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
            <Navbar.Brand className='ps-4'>
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            SPY-ON
          </Navbar.Brand>
            </Col>
            <Col className='d-flex flex-row justify-content-around' sm={4} lg={2}>
            <div>
                
            </div>
            <a>
                
            </a>
            </Col>
            <Col  sm={2} lg={2}>
            <Navbar.Toggle aria-controls="navbar-example"/>
                <Dropdown className="d-flex justify-content-center pe-5">
                    <Dropdown.Toggle id="dropdown-autoclose-true">
                        Login here!
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Card style={{ width: '15rem' }} className={'login-card'} border="light">
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                            <Card.Title className='font-merri mb-3'>Enter your email :</Card.Title>
                            <form autoComplete="off" onSubmit={handleLoginSubmit}>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email"
                                className="form-control"
                                id="Email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={emailInput}
                                onChange={handleEmailChange}/>
                            </FloatingLabel>
                            <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                                <Form.Control type="password"
                                autoComplete="new-password"
                                className="form-control"
                                id="Password"
                                placeholder="Password"
                                value={passwordInput}
                                onChange={handlePasswordChange}/>
                            </FloatingLabel>
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
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
            <Col md={6} lg={5}><br/><br/><br/>
                <div className='text-login'>
                Spy-on merupakan singkatan dari Sistem Pembelajaran Young Generation ialah sebuah web yang memberikan pelajaran secara online didukung 
                oleh para mentor yang professional di bidangnya masing-masing serta memiliki berbagai koneksi pengajar yang tersebar diseluruh indonesia
                membuat pengajaran dapat berlangsung secara lancar dan fleksibel.
                </div><br/><br/><br/><br/><br/>
                <a className='button-us' href="#section-us">
                    Learn More!
                </a>
            </Col>
            <Col lg={1}></Col>
            <Col>
            
            </Col>
      </Row>

      <div className='d-flex flex-column'><br/>
        <div className='text-pilihan d-flex flex-column align-items-center'>
            Program Pilihan :
        </div>
        <br/><br/>
        <div className='d-flex flex-wrap justify-content-evenly'>
        {
            loading
            ?
            <Spinner animation="border" variant='primary'/>
            :
            data?.miniproject_course.map((course) =>(
            <Card className="m-2 card-course" style={{ width: '23rem' }}>
                <Card.Header style={{height:'7vh'}} className='d-flex align-items-center'>{course.title}</Card.Header>
                <Card.Body>
                <Card.Title>{course.mentor}</Card.Title>
                    <Card.Text className='d-flex flex-column justify-content-between' style={{height:'17vh'}}>
                    <div><br/>{course.deskripsi}</div>
                    </Card.Text>
                </Card.Body>
            </Card>
            ))
        }
        </div>
        
    </div><br/><br/><br/>
    <div>
    <div className='text-pilihan d-flex flex-column align-items-center' id='section-us'>
        Why Us :
    </div><br/><br/><br/>
    <div>
        <LoginCardWhyUs/>
    </div>
    </div><br/><br/><br/>
    <div>
    <div className='text-pilihan d-flex flex-column align-items-center'>
        Testimoni Pengguna :
    </div><br/><br/><br/>
    <div>
        <LoginTestimoni/>
    </div>
    </div>
    </Container>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <FooterWeb/>
    </div>
  );
}

export default LoginPage