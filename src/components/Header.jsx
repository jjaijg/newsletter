import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./assets/Logo.svg"
              width="148"
              height="58"
              className="d-inline-block align-top"
              alt="Newsletters logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="newsletter-navigation" />
          <Navbar.Collapse id="newsletter-navigation">
            <Nav className="justify-content-end align-items-center" style={{width: "90%"}}>
              <Nav.Link href="#why-us">Why Us?</Nav.Link>
              <Nav.Link href="#marketing">Marketing Platform</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Item>
                <Button variant="outline-primary" size='sm'>Sign Up, it's Free</Button>
              </Nav.Item>
            </Nav>
            {/* <div className="d-flex">
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header