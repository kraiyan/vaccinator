import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
function Navbar1() {
    return (
        <div>
            
            <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">Vaccinator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link as={Link} to="/preventive">Prevention Measures</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link as={Link} to ="/vaccine_info">Vaccine details</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link as={Link} to ="/corona_tracker">Covid Tracker</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

        </div>
    )
}

export default Navbar1
