import React from 'react'
import '../Css/LoginPage.css';
import logo from '../Img/logo.jpg'
import loginImg from '../Img/Free Vector _ Webinar concept illustration.jpg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



const LoginPage = ({
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
            <Navbar.Brand href="/" className='ps-4'>
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
                    Login here!
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    <Card border="primary" style={{ width: '14rem' }}>
                        <Card.Header>Login</Card.Header>
                        <Card.Body>
                        <Card.Title>Enter your email :</Card.Title>
                        <form autoComplete="off" onSubmit={handleLoginSubmit}>
                            <div className="form-group mb-3">
                                <input
                                type="email"
                                className="form-control"
                                id="Email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={emailInput}
                                onChange={handleEmailChange}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <input
                                type="password"
                                autoComplete="new-password"
                                className="form-control"
                                id="Password"
                                placeholder="Password"
                                value={passwordInput}
                                onChange={handlePasswordChange}
                                />
                            </div>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" required>
                                <Form.Check type="checkbox" label="Check me out!" />
                            </Form.Group>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                        </Card.Body>
                    </Card>   
                    </Dropdown.Menu>
                </Dropdown>
            </Col>
            
        </Container>
    </Navbar><br/><br/><br/><br/><br/>
    <Container fluid className='ps-5'>
        <Row>
            <Col md={6} lg={5}>
                <div>
                Spy-on merupakan singkatan dari Sistem Pembelajaran Young Generation ialah sebuah web yang memberikan pelajaran secara online didukung 
                oleh para mentor yang professional di bidangnya masing-masing serta memiliki berbagai koneksi pengajar yang tersebar diseluruh indonesia
                membuat pengajaran dapat berlangsung secara lancar dan fleksibel.
                </div>
                   <br/><br/><br/><br/>
                <div className='d-flex'>
                    <Card style={{ width: '20rem' }}>
                        <Card.Header></Card.Header>
                        <Card.Body>
                        <Card.Title>Enter your email :</Card.Title>
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
                            <Form.Group className="mb-3" controlId="formBasicCheckbox" required>
                                <Form.Check type="checkbox" label="Check me out!" />
                            </Form.Group>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                        </Card.Body>
                    </Card>   
                </div>
                
            </Col>
            <Col lg={1}></Col>
            <Col>
            <img src={loginImg} className="loginImg pe-4" alt=''/>
            </Col>
      </Row>
    </Container>
    
    
    </div>
  );
}

export default LoginPage