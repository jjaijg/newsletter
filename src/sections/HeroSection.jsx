import React from 'react'
import {Button, Row, Col} from 'react-bootstrap'
import Header from '../components/Header'

const HeroSection = () => {
  return (
    <section className="vh-lg-100 mb-4">
      <Header />
      <Row className="mt-5">
        <Col
          sm={12}
          md={6}
          className="d-flex flex-column align-items-start justify-content-center"
        >
          <h3 className="banner-title">We take care Marketing things</h3>
          <Button className='mt-3'>Pick a Plan</Button>
        </Col>
        <Col sm={12} md={6}>
          <img
            src="/newsletter/assets/Illustration.svg"
            alt="Get newsletter"
            width={"100%"}
            className="d-inline-block align-top"
          />
        </Col>
      </Row>
    </section>
  );
}

export default HeroSection