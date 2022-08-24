import React from 'react'
import { Image } from 'react-bootstrap';

const Card = () => {
  return (
    <div className="marketing-card my-2">
      <div className="position-relative">
        {/* image */}
        <img
          className="card-image"
          src="/newsletter/assets/Mask Group 1.png"
          alt="marketing title"
        />
        {/* overlay */}
        {/* overlay content */}
        <div className="card-overlay-content">
          <div className="d-flex align-items-center h-100">
            <Image
              roundedCircle
              className="mx-2"
              src="/newsletter/assets/Ellipse 24.png"
            />
            <div className="d-flex flex-column justify-content-center mx-2">
              <h5 className="author">John Doe</h5>
              <p className="designation">Head of Marketing</p>
            </div>
          </div>
        </div>
      </div>
      {/* card title */}
      <h4 className="card-title mt-2">Tips for a good Pitching Presentation</h4>
      {/* card description */}
      <p className="card-description">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia.
      </p>
    </div>
  );
}

export default Card