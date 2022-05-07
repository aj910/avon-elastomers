import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import Page from '../components/Page';

function SiteMap() {
  return (
    <Page title="Site Map">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Site Map</li>
            </ul>
          </div>
        </section>
        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Site Map</h4>
                  </div>
                  <div className="card-body-blk">
                    <ul>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop">Shop</NavLink>
                      </li>
                      <li>
                        <NavLink to="/new-arrivals">New Arrivals</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about-us">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/compare-products">Compare Products</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Pricing">Pricing</NavLink>
                      </li>
                      <li>
                        <NavLink to="/gallery">Gallery</NavLink>
                      </li>
                      <li>
                        <NavLink to="/team">Team</NavLink>
                      </li>
                      <li>
                        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                      </li>
                      <li>
                        <NavLink to="/terms-and-condition">Terms of Use</NavLink>
                      </li>
                      <li>
                        <NavLink to="/refund-policy">Sales and Refunds</NavLink>
                      </li>
                      <li>
                        <NavLink to="/legal">Legal</NavLink>
                      </li>
                      <li>
                        <NavLink to="/site-map">Site Map</NavLink>
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
export default SiteMap;
