import React from 'react';
import '../StyleSheets/YourAddress.css';
const YourAddress = () => {
  return (
    <div className="info mx-auto">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-6 ">
          <h2>Your Information</h2>
          <form action="">
            <input type="text" placeholder="Full Name" />
            <br />
            <input type="text" placeholder="Email" />
            <br />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Delivery Address" />
            <input type="text" placeholder="Flat, Suit or flore" />
            <input type="text" placeholder="Phone Number" />
            <br />
            <input type="button" value="Save & Continue" />
          </form>
        </div>
        <div className="col-12 col-md-6 col-lg-6 ">
          <span>From : Blablablabla...........</span>
          <br />
          <span>Arriving in _____ min</span>
          <br />
          <span>Address : _______________</span>
          <div>Product Details</div>
          <div>
            <span>Subtotal ___ items price:</span>
            <span>Tax:</span>
            <br />
            <span>Delivery Charge:</span>
            <br />
            <span>Total:</span>
            <br />
            <input type="button" value="Place Order" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourAddress;
