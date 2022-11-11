import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {TfiInstagram} from 'react-icons/tfi'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsDiscord} from 'react-icons/bs'

const FooterWeb = () => {
  return (
    <div className='container-fluid container-footer ps-3'>
      <div className='d-flex flex-column mt-2 justify-content-between'>
        <div className='mt-2 d-flex justify-content-center'>
        © 2022 SPY-ON
        </div>
        <div className='d-flex justify-content-end pe-3'>
        <BsDiscord className='m-1' style={{ height: '25px', width: '32px'  }} href=''/>
        <TfiInstagram className='m-1' style={{ height: '25px', width: '32px'  }} href=''/>
        <AiOutlineFacebook style={{ height: '32px', width: '39px'  }} href='https://www.facebook.com/M.Dery.D/'/>
        </div>
      </div>
      
    </div>
  )
}

export default FooterWeb