import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from './../assets/logo.svg';
import  '../styles/menudrawer.css'

const MenuDrawer = ({ ismenuOpen, setIsMenuOpen }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Offcanvas
          show={ismenuOpen}
          onHide={() => setIsMenuOpen(false)} // close handler
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          className="menu-drawer-container"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={logo} alt="Logo" style={{ height: "40px", width: "70%" }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#action1" className="menu-title">Home</Nav.Link>
              <Nav.Link href="#action2" className="menu-title">Link</Nav.Link>
              <NavDropdown title="Assortiment" id="offcanvasNavbarDropdown" className="menu-title">
                <NavDropdown.Item href="#action3" className="sub-menu-title">Kunstplanten</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className="sub-menu-title">Kunstbloemen</NavDropdown.Item>
                <NavDropdown.Item href="#action5" className="sub-menu-title">Kunstbomen</NavDropdown.Item>
                <NavDropdown.Item href="#action6" className="sub-menu-title">Kunsthaag</NavDropdown.Item>
                <NavDropdown.Item href="#action7" className="sub-menu-title">Kunst Hangplanten</NavDropdown.Item>
                <NavDropdown.Item href="#action8" className="sub-menu-title">Kunstboeketten</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* <Form className="d-flex mt-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MenuDrawer;

