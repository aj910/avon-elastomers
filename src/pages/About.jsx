import React from 'react';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';

import Page from '../components/Page';
import Loader from '../components/loader/Loader.component';
import FaqContainer from '../components/faq/faq-container.component';
import TestimonialContainer from '../components/testimonial/testimonial-container.component';

const About = ({ isLoading, aboutUs }) => {
  return (
    <Page title="About Us">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>About</li>
            </ul>
          </div>
        </section>
        <section className="inner-page-banner-section">
          <div className="container-fluid">
            <div className="inner-banner-blk">
              <img src={aboutUs.image ? aboutUs.image : 'assets/images/image-45.jpg'} alt={aboutUs.title} />
            </div>
          </div>
        </section>
        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>{aboutUs.title}</h4>
                  </div>
                  {isLoading ? <Loader /> : <div className="card-body-blk">{parse(aboutUs.content)}</div>}
                </div>
              </div>
              <div className="col-md-6">
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
        <section className="testimonial-section">
          <div className="container-fluid">
            <div className="card-block">
              <div className="card-head-blk">
                <h4>TESTIMONIAL</h4>
              </div>
              <div className="card-body-blk">{isLoading ? <Loader /> : <TestimonialContainer />}</div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
};

export default About;
