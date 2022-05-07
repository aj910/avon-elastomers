import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import Page from "../components/Page";

function Pricing() {
  return (
    <Page title="Pricing">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Pricing</li>
            </ul>
          </div>
        </section>
        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Pricing</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="row justify-content-center">
                      <div className="col-md-6 col-lg-4 mb-30">
                        <div className="price-item text-center">
                          <div className="price-top">
                            <h4>Personal</h4>
                            <h2 className="mb-0">
                              <sup>$</sup>99
                            </h2>
                            <span className="text-capitalize">per year</span>
                          </div>
                          <div className="price-content">
                            <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Eget erovtiu faucid</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Cras justo odio</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Morbi leo risus</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span>Porta consectetur ac</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span> Vestibulum at eros</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span>Adipisci atque beatae</span>
                              </li>
                            </ul>
                            <a href="#" className="btn btn-primary">
                              Buy now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 mb-30">
                        <div className="price-item text-center popular">
                          <div className="price-top">
                            <h4>Business</h4>
                            <h2 className="mb-0">
                              <sup>$</sup>299
                            </h2>
                            <span className="text-capitalize">per year</span>
                          </div>
                          <div className="price-content">
                            <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Eget erovtiu faucid</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Cras justo odio</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Morbi leo risus</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span>Porta consectetur ac</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span> Vestibulum at eros</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span>Adipisci atque beatae</span>
                              </li>
                            </ul>
                            <a href="#" className="btn btn-custom btn-light">
                              Buy now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 mb-30">
                        <div className="price-item text-center">
                          <div className="price-top">
                            <h4>Enterprise</h4>
                            <h2 className="mb-0">
                              <sup>$</sup>399
                            </h2>
                            <span className="text-capitalize">per year</span>
                          </div>
                          <div className="price-content">
                            <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Eget erovtiu faucid</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Cras justo odio</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-check mr-2"></i>
                                <span className="c-black">Morbi leo risus</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span>Porta consectetur ac</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span> Vestibulum at eros</span>
                              </li>
                              <li>
                                <i className="zmdi zmdi-close mr-2"></i>
                                <span>Adipisci atque beatae</span>
                              </li>
                            </ul>
                            <a href="#" className="btn btn-primary">
                              Buy now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default Pricing;
