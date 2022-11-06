import React from 'react'
import { Accordion } from 'react-bootstrap'

import UserNavbar from './User/Navbar/UserNavbar'

const HelpPage = () => {
  return (
    <>
    <UserNavbar/><br/><br/><br/><br/><br/>
    <div className='container'>
    <Accordion defaultActiveKey={['0']} alwaysOpen>
    <Accordion.Item eventKey="0">
      <Accordion.Header>Pertanyaan biasa:</Accordion.Header>
        <Accordion.Body>
            -Stuck pada page?<br/>
            Refresh page tersebut
        </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item eventKey="1">
      <Accordion.Header>Pertanyaan biasa:</Accordion.Header>
        <Accordion.Body>
        -Stuck pada page?<br/>
            Refresh page tersebut
        </Accordion.Body> 
    </Accordion.Item>
  </Accordion>
  </div>
    </>
    
  )
}

export default HelpPage