import React from 'react';
import '../Header_Footer/Footer.css';
import logo from '../../Components/CompImg/f_logo.png';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="footer">
      <div className="main__container mx-auto py-3">
        <Row>
          <Col md={5} lg={6} sm={6}>
            <div className="logo">
              <img className="f_logo" src={logo} alt="" />
            </div>
          </Col>
          <Col md={4} lg={3} sm={3} className="row1Col">
            <div className="menu1" md>
              <Link to="/">About Online Food</Link>
              <br />
              <Link to="/">Read Our blogs</Link>
              <br />
              <Link to="/">Sign Up to delivery</Link>
              <br />
              <Link to="/">Add Your Restaurant</Link>
              <br />
            </div>
          </Col>

          <Col md={3} lg={3} sm={3} className="row1Col">
            <div className="menu1" md>
              <Link to="/">Get Help</Link>
              <br />
              <Link to="/">Read FAQs</Link>
              <br />
              <Link to="/">View all Cities</Link>
              <br />
              <Link to="/">Restaurants near me</Link>
              <br />
            </div>
          </Col>
        </Row>
        <Row className="py-5">
          <Col md={6} lg={6} sm={6}>
            <div className="copyRight" md>
              {' '}
              <p className="copy">copyright © Online food</p>
            </div>
          </Col>
          <Col md={6} lg={6} sm={6}>
            {' '}
            <div className="rowPolicy">
              <div className="">
                <p className="policy">
                  Privary Policy. <span className="mx-4">Terms of Use</span>{' '}
                  Pricing
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
