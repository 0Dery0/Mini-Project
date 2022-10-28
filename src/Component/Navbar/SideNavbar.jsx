import React from 'react'
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as FaIcons from "react-icons/fa";
import SideNavbarItems from './SideNavbarItems';

const SideNavbar = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <FaIcons.FaBars onClick={handleShow}/>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SideNavbarItems/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default SideNavbar

