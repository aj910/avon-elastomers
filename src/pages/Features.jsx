import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Container, Row, Col, Accordion } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Page from "../components/Page";

function Features() {
  return (
    <Page title="Feature">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Features</li>
            </ul>
          </div>
        </section>
        <section className="shop-main-section">
          <Container fluid>
            <Row>
              <Col md={3}>
                <div className="sidebar-block">
                  <div className="side-head-blk">SOHP BY</div>
                  <div className="side-accordian">
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Category</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Smartphone" />
                              <label className="form-check-label" htmlFor="Smartphone">
                                Smartphone <span>(3)</span>
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Furniture" />
                              <label className="form-check-label" htmlFor="Furniture">
                                Furniture <span>(3)</span>
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Fasion & Clothes" />
                              <label className="form-check-label" htmlFor="Fasion & Clothes">
                                Fasion & Clothes <span>(3)</span>
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Helth" />
                              <label className="form-check-label" htmlFor="Helth">
                                Helth <span>(3)</span>
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Shoes" />
                              <label className="form-check-label" htmlFor="Shoes">
                                Shoes <span>(3)</span>
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Beauty" />
                              <label className="form-check-label" htmlFor="Beauty">
                                Beauty <span>(3)</span>
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Sports" />
                              <label className="form-check-label" htmlFor="Sports">
                                Sports <span>(3)</span>
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Electronics" />
                              <label className="form-check-label" htmlFor="Electronics">
                                Electronics <span>(3)</span>
                              </label>
                            </div>
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Price</Accordion.Header>
                        <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Size</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="XS" />
                              <label className="form-check-label" htmlFor="XS">
                                XS
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="M" />
                              <label className="form-check-label" htmlFor="M">
                                M
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="L" />
                              <label className="form-check-label" htmlFor="L">
                                L
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="XL" />
                              <label className="form-check-label" htmlFor="XL">
                                XL
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="XXL" />
                              <label className="form-check-label" htmlFor="XXL">
                                XXL
                              </label>
                            </div>
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Colour</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Black" />
                              <label className="form-check-label" htmlFor="Black">
                                Black
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Green" />
                              <label className="form-check-label" htmlFor="Green">
                                Green
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="White" />
                              <label className="form-check-label" htmlFor="White">
                                White
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Blue" />
                              <label className="form-check-label" htmlFor="Blue">
                                Blue
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Red" />
                              <label className="form-check-label" htmlFor="Red">
                                Red
                              </label>
                            </div>
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Brand</Accordion.Header>
                        <Accordion.Body>
                          <Form>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Next" />
                              <label className="form-check-label" htmlFor="Next">
                                Next
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="River Island" />
                              <label className="form-check-label" htmlFor="River Island">
                                River Island
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Geox" />
                              <label className="form-check-label" htmlFor="Geox">
                                Geox
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="New Balance" />
                              <label className="form-check-label" htmlFor="New Balance">
                                New Balance
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="UGG" />
                              <label className="form-check-label" htmlFor="UGG">
                                UGG
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="F&F" />
                              <label className="form-check-label" htmlFor="F&F">
                                F&F
                              </label>
                            </div>
                            <div className="form-group form-check customcheckbox">
                              <input type="checkbox" className="form-check-input" id="Nike" />
                              <label className="form-check-label" htmlFor="Nike">
                                Nike
                              </label>
                            </div>
                          </Form>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </div>
              </Col>
              <Col md={9}>
                <div className="leftside-block">
                  <div className="shopheader-blk">
                    <h3>Features Products</h3>
                  </div>
                  <div className="shopserach-grid-blk">
                    <Row>
                      <Col md={6}>
                        <div className="gridlist-item-blk">
                          <a href="#" className="gridlist-btn active">
                            <i className="bi bi-grid"></i>
                          </a>
                          <a href="#" className="gridlist-btn">
                            <i className="bi bi-list-task"></i>
                          </a>
                          <span>Items 1-6 of 9</span>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="sortby-block">
                          <span>Sort By</span>
                          <Form.Select aria-label="Default select example">
                            <option></option>
                            <option value="1">Popularity</option>
                            <option value="2">Price - Low to High</option>
                            <option value="3">Price - High to Low</option>
                            <option value="4">Newest First</option>
                          </Form.Select>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="shop-product-blk">
                    <Row>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-1.png" />
                              {/* <span className="sale-blk">Sale</span> */}
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-2.png" />
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-3.png" />
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-2.png" />
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-3.png" />
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-1.png" />
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-3.png" />
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-2.png" />
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="product-block product-shoppage">
                          <NavLink to="/ProductDetails">
                            <div className="product-img-blk">
                              <img src="assets/images/pro-1.png" />
                            </div>
                            <div className="product-cont-blk">
                              <h4>Professional Pixel Camera</h4>
                              <div className="star-rate-show">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                              </div>
                              <p>$210.00</p>
                            </div>
                          </NavLink>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Page>
  );
}
export default Features;
