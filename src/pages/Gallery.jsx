import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import Page from '../components/Page';
import GalleryItem from '../components/gallery/gallery-item.component';
import Loader from '../components/loader/Loader.component';

const Gallery = ({ galleries, isLoading }) => {
  return (
    <Page title="Gallery">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Gallery</li>
            </ul>
          </div>
        </section>
        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Gallery</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="row">{isLoading ? <Loader /> : galleries.map((gallery) => <GalleryItem gallery={gallery} key={gallery.id} />)}</div>
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
export default Gallery;
