import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
          <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">React redux</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto"
            >
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/detail" className="nav-link"> Task detail</Link>
              <Link to="/about-us" className="nav-link"> about us</Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>  
        </>
    );
};

export default Header;