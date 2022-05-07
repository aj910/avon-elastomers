import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import Page from '../components/Page';
import Loader from '../components/loader/Loader.component';
import FaqContainer from '../components/faq/faq-container.component';

const Faq = ({ isLoading }) => {
  return (
    <Page title="FAQ">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>FAQ</li>
            </ul>
          </div>
        </section>

        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>FREQUENTLY ASKED QUESTIONS</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="custom-accordion">{isLoading ? <Loader /> : <FaqContainer />}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
};
export default Faq;
