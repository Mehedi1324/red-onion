import React from 'react';

const DeliveryInfo = () => {
  return (
    <div className="deliveryInfo">
      <div className="row">
        <div className="col-12 col-md-7 col-lg-7">
          There is a map will be placed in this side
        </div>
        <div className="col-12 col-md-5 col-lg-5">
          <div>
            logo
            <div>
              <span>Your Location : Address</span>
              <br />
              <span>Shop Address : Address</span>
            </div>
            <h5>Delivery Time</h5>
            <p>Estimate Delivery Time</p>
            <div>
              <span>logo</span>
              <span>
                <h5>Hamim</h5>
                <p>Your Raider</p>
              </span>
            </div>
            <input type="button" value="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
