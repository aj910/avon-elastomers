import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

import Page from '../components/Page';
import TeamItem from '../components/team/team-item.component';
import Loader from '../components/loader/Loader.component';

const Team = ({ teams, isLoading }) => {
  return (
    <Page title="Team">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Team</li>
            </ul>
          </div>
        </section>
        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Team</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="team-block">
                      <div className="row">{isLoading ? <Loader /> : teams.map((team) => <TeamItem team={team} key={team.id} />)}</div>
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
};
export default Team;
