import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

import '../styles/Navbar.css';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbar-parent">
      <Container className='nav-container'>
        <Navbar.Brand className='navbar-brand'>PLANTOPIA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className='navbar-link'>
                <Link className='link-to' to="/">
                    Home
                </Link>
            </Nav.Link>
            <Nav.Link className='navbar-link'>
                <Link className='link-to' to="/edit">
                    Edit Plant
                </Link>
            </Nav.Link>
            <Nav.Link className='navbar-link'>
                <Link className='link-to' to="/list">
                    Plant List
                </Link>
            </Nav.Link>
            <Nav.Link className='navbar-link'>
                <Link className='link-to' to="/post">
                    Add a Plant
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className='navbar-brand'>Account</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;