import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Page from '../components/Page';


const CompareProducts = () => {
    return (
        <Page title="Compare">
            <div className="inner-pages-wrapper">
                <section className="breadcrumb-sction">
                    <div className="container-fluid">
                        <ul className="breadcrumb-block">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>Compare</li>
                        </ul>
                    </div>
                </section>

                <section className="about-cont-block">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card-block">
                                    <div className="card-head-blk">
                                        <h4>Compare Products</h4>
                                    </div>
                                    <div className="card-body-blk">
                                        <div className="custom-accordion">Products to compare</div>
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
export default CompareProducts;
