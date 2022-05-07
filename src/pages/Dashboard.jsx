import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardSideMenu from '../components/DashboardSideMenu';
import { NavLink } from 'react-router-dom';

import Page from '../components/Page';
import DashboardOrderList from '../components/dashboard/dashboard-order-list.component';

const Dashboard = () => {
  return (
    <Page title="Dashboard">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Dashboard</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <DashboardSideMenu />
              <div className="col-md-9">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Dashboard</h4>
                  </div>
                  <div className="card-body-blk">
                    <h4 className="dashboardheading">Recent Order List</h4>
                    <DashboardOrderList />
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
export default Dashboard;
