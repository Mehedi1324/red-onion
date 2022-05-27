import React from 'react';
import '../StyleSheets/WhyUs.css';
import delivery from '../CompImg/delivery.png';
import h_delivery from '../CompImg/h_devilery.png';
import cook from '../CompImg/cook.png';
import homeDelivery from '../CompImg/home_d.png';
import del from '../CompImg/bell.png';
import bus from '../CompImg/bus.png';
import { Col, Container, Row } from 'react-bootstrap';
const WhyUs = () => {
  return (
    <div className="allCont">
      <div className="full_container ">
        <h2>Why you Choose us</h2>
        <p>
          This is the perfect place that you have been looking for all this
          years
        </p>
        <Container className="mx-auto ">
          <Row className="mx-auto ">
            <Col xs={11} md={5} lg={3} className="cart">
              <div className="cartShape">
                <img className="m_img" src={delivery} alt="" />
                <div>
                  <div className="cartInfo">
                    <h5>
                      {' '}
                      <img className="logoimg" src={bus} alt="" /> Fast Delivery
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, dolores. Voluptatibus error, suscipit vero quod
                      minima quibusdam illo nam laborum!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={11} md={5} lg={3} className="cart">
              <div className="cartShape">
                <img className="m_img" src={cook} alt="" />
                <div>
                  <div className="cartInfo">
                    <h5>
                      <img className="logoimg" src={del} alt="" /> Professional
                      Cook
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, dolores. Voluptatibus error, suscipit vero quod
                      minima quibusdam illo nam laborum!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={11} md={5} lg={3} className="cart">
              <div className="cartShape">
                <img className="m_img" src={h_delivery} alt="" />
                <div>
                  <div className="cartInfo">
                    <h5>
                      {' '}
                      <img src={homeDelivery} className="logoimg" alt="" /> Home
                      Delivery
                    </h5>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit, dolores. Voluptatibus error, suscipit vero quod
                      minima quibusdam illo nam laborum!
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default WhyUs;
