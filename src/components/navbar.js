import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';

function Navbar1() {
    return (
        <div>
            
            <Navbar expand="lg">
      <Navbar.Brand href="/">Vaccinator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
     
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/preventive">Prevention Measures</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/vaccine_info">Vaccine details</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

        </div>
    )
}

export default Navbar1
