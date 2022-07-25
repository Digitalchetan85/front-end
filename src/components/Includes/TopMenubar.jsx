import React from "react";
import {Container, Image, Nav, Navbar} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from '../../images/logo.png';

const TopMenubar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" id="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/yellow-walls"><Image src={Logo} className="img-fluid" alt="Logo"></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/yellow-walls">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/projects/residential">Residential</Nav.Link>
              <Nav.Link as={Link} to="/projects/commercial">Commercial</Nav.Link>
              <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
              <Nav.Link as={Link} to="/careers">Careers</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopMenubar;
