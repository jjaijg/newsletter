import React from 'react'
import { Row, Col, Navbar, Nav } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer my-3">
      <Row>
        <Col sm={12} md={12} lg={7} className=" d-flex align-items-center">
          <Navbar.Brand href="#home">
            <img
              src="/assets/Logo.svg"
              width="148"
              height="58"
              className="d-inline-block align-top"
              alt="Newsletters logo"
            />
          </Navbar.Brand>
          <Nav.Link href="#terms" className="footer-item mx-2">
            Terms &amp; Condition
          </Nav.Link>
          <Nav.Link href="#privacy" className="footer-item mx-2">
            Privacy Policy
          </Nav.Link>
        </Col>
        <Col
          sm={12}
          lg={5}
          className="d-flex align-items-center justify-content-lg-end"
        >
          <span className="footer-item">
            ® 2019 Company name. All rights reserved.
          </span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer