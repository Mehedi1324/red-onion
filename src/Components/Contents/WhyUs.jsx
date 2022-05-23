import React from 'react';
import '../StyleSheets/WhyUs.css';
import delivery from '../CompImg/delivery.png';
import h_delivery from '../CompImg/h_devilery.png';
import cook from '../CompImg/cook.png';
const WhyUs = () => {
  return (
    <div className="allCont">
      <div className="full_container ">
        <h2>Why you Choose us</h2>
        <p>
          This is the perfect place that you have been looking for all this
          years
        </p>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <img className="m_img" src={delivery} alt="" />
            <div>
              <img src="" alt="" />
              <div>
                <h5>Fast Delivery</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, dolores. Voluptatibus error, suscipit vero quod
                  minima quibusdam illo nam laborum!
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <img className="m_img" src={cook} alt="" />
            <div>
              <img src="" alt="" />
              <div>
                <h5>Professional Cook</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, dolores. Voluptatibus error, suscipit vero quod
                  minima quibusdam illo nam laborum!
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mx-auto">
            <img className="m_img" src={h_delivery} alt="" />
            <div>
              <img src="" alt="" />
              <div>
                <h5>Home Delivery</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit, dolores. Voluptatibus error, suscipit vero quod
                  minima quibusdam illo nam laborum!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
