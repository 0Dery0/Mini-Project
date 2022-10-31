import React from 'react'
import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as FaIcons from "react-icons/fa";
import NavbarAddCourseContainer from '../../Container/NavbarAddCourseContainer';
import NavbarEditCourseContainer from '../../Container/NavbarEditCourseContainer';
import '../../Css/SideNavbar.css'

const SideNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <FaIcons.FaBars onClick={handleShow}/>

      <Offcanvas className='sideNav' show={show} onHide={handleClose} scroll={true} backdrop={true}>
        <Offcanvas.Header className='sideNav-header container-fluid'>
          <Offcanvas.Title >Spy-On</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Add Course</Accordion.Header>
            <Accordion.Body>
              Enter your new course :
              <NavbarAddCourseContainer/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Edit Course</Accordion.Header>
            <Accordion.Body>
              Edit your course :
              <NavbarEditCourseContainer/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SideNavbar

