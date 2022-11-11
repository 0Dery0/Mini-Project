import React from 'react'
import { Accordion } from 'react-bootstrap'
import FooterWeb from './FooterWeb'
import UserNavbar from './User/Navbar/UserNavbar'
import { motion } from "framer-motion"
import { useState } from 'react';
import {Button} from 'react-bootstrap'



const HelpPage = () => {
  return (
    <>
    <UserNavbar/><br/><br/><br/><br/><br/>
    <div className='container font-merri'>
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
        -Loading lama?<br/>
            Cek koneksi internetmu
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
        </Accordion.Body> 
    </Accordion.Item>
  </Accordion>
  </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  <div className=''>
  <FooterWeb/>
  </div>
 
  
    </>
    
  )
}

export default HelpPage