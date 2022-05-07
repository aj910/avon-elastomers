import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import parse from "html-react-parser";

import Page from "../components/Page";
import Loader from "../components/loader/Loader.component";

const Terms = ({ termsAndCondition }) => {
  const { content } = termsAndCondition;
  return (
    <Page title="Terms and Condition">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </section>
        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Terms of Use</h4>
                  </div>
                  {content ? <div className="card-body-blk">{parse(content)}</div> : <Loader />}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
};
export default Terms;
