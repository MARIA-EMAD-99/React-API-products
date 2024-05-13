import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import  React from 'react';
import { Link,Router } from 'react-router-dom';



 const Header =()=>{ 
    return(
        <>
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Demo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <Link to="/"  className="mx-3">Home</Link>
            <Link to="/about" className="mx-3">About us</Link>
            <Link to="/contact"  className="mx-3">Contact us</Link>
            <Link to="/products"  className="mx-3">products</Link>
            <Link to="/homeclass"  className="mx-3">HomeClass</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default Header
