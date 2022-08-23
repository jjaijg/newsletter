import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Card from '../components/Card';

const MarketingSection = () => {
  return (
    <section className="marketing my-3">
      <div className="d-flex align-items-center">
        <span className="line"></span>
        <span className="blog mx-1">BLOG</span>
      </div>
      <h3 className="marketing-title mt-1">Explore Marketing Tips</h3>
      {/* <div className='d-flex mt-4 justify-content-between'>
        <Card />
        <Card />
        <Card />
      </div> */}
      <Row className="g-3 mt-4">
        <Col sm={12} lg={4} className="d-flex justify-content-center">
          <Card />
        </Col>
        <Col sm={12} lg={4} className="d-flex justify-content-center">
          <Card />
        </Col>
        <Col sm={12} lg={4} className="d-flex justify-content-center">
          <Card />
        </Col>
      </Row>
    </section>
  );
}

export default MarketingSection