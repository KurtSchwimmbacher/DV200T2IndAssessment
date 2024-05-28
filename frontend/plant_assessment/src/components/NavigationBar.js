import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to="/">
                    Home
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/edit">
                    Edit Plant
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/list">
                    Plant List
                </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/post">
                    Add a Plant
                </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;