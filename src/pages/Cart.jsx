import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import Page from "../components/Page";

function Cart() {
  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  return (
    <Page title="Cart">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Cart</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Product On Cart</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="cart-product-blk">
                      <div className="cartpro-img">
                        <img src="assets/images/product-1.jpg" />
                      </div>
                      <div className="cartpro-content">
                        <h4>Professional Pixel Camera</h4>
                        <div className="star-rate-show">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <p>$210.00</p>
                        <div className="qtyremovebtnblk">
                          <div className="plusminus-qty">
                            <div className="input-group">
                              <button onClick={decrementCount}>-</button>
                              <input type="number" step="1" max="" value={count} name="quantity" className="quantity-field" />
                              <button onClick={incrementCount}>+</button>
                            </div>
                          </div>
                          <button className="btn btn-primary">Remove</button>
                        </div>
                      </div>
                    </div>
                    <div className="cart-product-blk">
                      <div className="cartpro-img">
                        <img src="assets/images/product-1.jpg" />
                      </div>
                      <div className="cartpro-content">
                        <h4>Professional Pixel Camera</h4>
                        <div className="star-rate-show">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <p>$210.00</p>
                        <div className="qtyremovebtnblk">
                          <div className="plusminus-qty">
                            <div className="input-group">
                              <button onClick={decrementCount}>-</button>
                              <input type="number" step="1" max="" value={count} name="quantity" className="quantity-field" />
                              <button onClick={incrementCount}>+</button>
                            </div>
                          </div>
                          <button className="btn btn-primary">Remove</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Cart Review</h4>
                  </div>
                  <div className="card-body-blk">
                    <ul className="cartreview-block">
                      <li>
                        <p>Coupon Code</p>
                        <div className="coupon-code">
                          <input type="text" placeholder="Enter Code" />
                          <a href="#" className="addcode-btn">
                            apply
                          </a>
                        </div>
                      </li>
                      <li>
                        <b>MRP:</b> <span>$ 440</span>
                      </li>
                      <li>
                        <b>Pre-Discount:</b> <span>$ 20</span>
                      </li>
                      <li>
                        <b>Coupon Discount:</b> <span>$ 20</span>
                      </li>
                      <li>
                        <b>Subtotal:</b> <span>$ 400</span>
                      </li>
                      <li>
                        <b>Taxes (Incl.):</b> <span>$ 50</span>
                      </li>
                      <li>
                        <b>Total:</b> <span>$ 450</span>
                      </li>
                    </ul>
                    <NavLink to="/Checkout" className="btn btn-primary d-block">
                      Checkout
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}

export default Cart;
