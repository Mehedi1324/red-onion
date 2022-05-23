import React from 'react';
import '../Header_Footer/Footer.css';
import logo from '../../Components/CompImg/f_logo.png';
const Footer = () => {
  return (
    <div className="footer">
      <div className="main__container mx-auto py-3">
        <div className="row pb-5">
          <div className="col-12 col-md-6 col-lg-6" md>
            <img className="f_logo" src={logo} alt="" />
          </div>
          <div className="col-6 col-md-3 col-lg-3" md>
            <ul>
              <li>About Online Food</li>
              <li>Read Our blogs</li>
              <li>Sign Up to delivery</li>
              <li>Add Your Restaurant</li>
            </ul>
          </div>
          <div className="col-6 col-md-3 col-lg-3" md>
            <ul>
              <li>Get Help</li>
              <li>Read FAQs</li>
              <li>View all Cities</li>
              <li>Restaurants near me</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-6 col-md-6 col-lg-6" md>
            {' '}
            <p>copyright @copyright Online food</p>
          </div>
          <div className="col-6 col-md-6 col-lg-6" md>
            <p className="policy">
              Privary Policy. <span className="mx-4">Terms of Use</span> Pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
