import React from "react";
import { NavLink } from "react-router-dom";
import { Accordion, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "../history";

import Page from "../components/Page";

function Checkout() {
  return (
    <Page title="Checkout">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Checkout</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Checkout</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="checkoutblock">
                      <Form>
                        <div className="row">
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Name</Form.Label>
                              <Form.Control type="text" placeholder="Name" />
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Email</Form.Label>
                              <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Phone Number</Form.Label>
                              <Form.Control type="text" placeholder="Phone No." />
                            </Form.Group>
                          </div>
                          <div className="col-md-12">
                            <h4 className="formheading">Shipping Address</h4>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Select Country</Form.Label>
                              <Form.Select>
                                <option>Select Country</option>
                                <option value="India">India</option>
                                <option value="UAE">UAE</option>
                                <option value="USA">USA</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Select State</Form.Label>
                              <Form.Select>
                                <option>Select State</option>
                                <option value="India">India</option>
                                <option value="UAE">UAE</option>
                                <option value="USA">USA</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>City</Form.Label>
                              <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Address</Form.Label>
                              <Form.Control type="text" placeholder="Address" />
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Landmark</Form.Label>
                              <Form.Control type="text" placeholder="Landmark" />
                            </Form.Group>
                          </div>
                          <div className="col-md-12">
                            <h4 className="formheading">Billing Address</h4>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Select Country</Form.Label>
                              <Form.Select>
                                <option>Select Country</option>
                                <option value="India">India</option>
                                <option value="UAE">UAE</option>
                                <option value="USA">USA</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Select State</Form.Label>
                              <Form.Select>
                                <option>Select State</option>
                                <option value="India">India</option>
                                <option value="UAE">UAE</option>
                                <option value="USA">USA</option>
                              </Form.Select>
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>City</Form.Label>
                              <Form.Control type="text" placeholder="City" />
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Address</Form.Label>
                              <Form.Control type="text" placeholder="Address" />
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Landmark</Form.Label>
                              <Form.Control type="text" placeholder="Landmark" />
                            </Form.Group>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Payment</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="checkoutblock">
                      <Accordion defaultActiveKey="0" className="payment-accordion">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>
                            PayPal <img src="assets/images/paypal.png" />
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="custom-control custom-radio">
                              <input type="radio" id="payment-paypal" name="payment" className="custom-control-input" />
                              <label className="custom-control-label" for="payment-paypal">
                                Pay with Paypal
                              </label>
                            </div>
                            <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                            <Button variant="black" onClick={() => history.push("/Success")}>
                              Proceed to PayPal
                            </Button>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            Payments <img src="assets/images/payment.png" />
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="custom-control custom-radio">
                                    <input type="radio" id="payment-card" name="payment" className="custom-control-input" />
                                    <label className="custom-control-label" for="payment-card">
                                      Pay with Credit / Debit Card
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label>Enter Card Number</label>
                                  <input type="text" className="form-control" placeholder="Enter Card Number" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label>Expire Date</label>
                                  <input type="text" className="form-control" placeholder="MM/YY" />
                                </div>
                              </div>
                              <div className="col-md-3">
                                <div className="form-group">
                                  <label>Enter CVV</label>
                                  <input type="text" className="form-control" placeholder="CVV" />
                                </div>
                              </div>
                              <div className="col-md-12">
                                <div className="form-group">
                                  <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="cardinfosave" />
                                    <label className="custom-control-label" for="cardinfosave">
                                      Save payment information to my account for future purchases.
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <Button variant="black" onClick={() => history.push("/Success")}>
                              Place Order
                            </Button>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
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
export default Checkout;
