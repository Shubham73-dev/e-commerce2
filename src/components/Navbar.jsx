import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
import { useState } from "react";
// import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const [showCartBtn, setShowCartBtn] = useState(true);
  const [showCart, setShowCart] = useState(false);
  const handleShowFunc = () => {
    setShowCart(true);
  };
  const handleClose = () => {
    setShowCart(false);
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              {showCartBtn && (
                <Cart
                  value="Show Cart"
                  handleShow={handleShowFunc}
                  show={showCart}
                  handleClose={handleClose}
                />
              )}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
