import React from 'react';

function OurFeatureSection() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="instruction-blk">
            <div className="instruc-img-blk">
              <img src="assets/images/inst-1.png" alt="" />
            </div>
            <div className="instruc-cont-blk">
              <h4>FREE SHIPPING & RETURN</h4>
              <p>
                Free shipping on orders over<br></br>$49
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="instruction-blk">
            <div className="instruc-img-blk">
              <img src="assets/images/inst-2.png" alt="" />
            </div>
            <div className="instruc-cont-blk">
              <h4>MONEY GUARANTEE</h4>
              <p>
                30 days money back<br></br>guarantee
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="instruction-blk">
            <div className="instruc-img-blk">
              <img src="assets/images/inst-3.png" alt="" />
            </div>
            <div className="instruc-cont-blk">
              <h4>ONLINE SUPPORT</h4>
              <p>
                We support online 24/24<br></br>on day
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="instruction-blk">
            <div className="instruc-img-blk">
              <img src="assets/images/inst-4.png" alt="" />
            </div>
            <div className="instruc-cont-blk">
              <h4>CUSTOMER SUPPORT</h4>
              <p>Call or email us 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurFeatureSection;
