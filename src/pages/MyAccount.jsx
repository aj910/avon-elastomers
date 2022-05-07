import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashboardSideMenu from '../components/DashboardSideMenu';
import { NavLink } from 'react-router-dom';

import Axios from 'axios';

import Page from '../components/Page';
import StateContext from '../context/StateContext';
import DispatchContext from '../context/DispatchContext';

const MyAccount = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    const userRequest = Axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await Axios.get('/my-account', {
          headers: {
            Authorization: `Bearer ${appState.state.user.token}`,
          },
        });
        const responseData = response.data.data;
        setUser(responseData.user);
      } catch (e) {
        if (e.response.status === 401) {
          appDispatch({ type: 'logout' });
        } else {
          console.log('Error encountered');
        }
      }
    }
    fetchData();
    return () => {
      userRequest.cancel();
    };
  }, []);
  return (
    <Page title="My Account">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>My Account</li>
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
                    <h4>My Account</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="row">
                      <div className="col-md-4 col-sm-5">
                        <div className="accprofile">
                          <img src={user.profile_image ? user.profile_image : 'assets/images/nopreview.jpg'} alt="profile" />
                        </div>
                        <div className="updatepro">
                          <NavLink to="/setting" className="btn btn-primary mt-4 d-block">
                            Edit Account Info
                          </NavLink>
                        </div>
                      </div>
                      <div className="col-md-8 col-sm-7">
                        <div className="accinfo">
                          <h4>Basic Info</h4>
                          <table className="table acctable">
                            <tbody>
                              <tr>
                                <td style={{ width: '120px' }}>Name:</td>
                                <td>{user.name}</td>
                              </tr>
                              <tr>
                                <td>Email:</td>
                                <td>{user.email}</td>
                              </tr>
                              <tr>
                                <td>Mobile:</td>
                                <td>{user.mobile_number}</td>
                              </tr>
                              <tr>
                                <td>Gender:</td>
                                <td>{user.gender}</td>
                              </tr>
                              <tr>
                                <td>DOB:</td>
                                <td>{user.date_of_birth}</td>
                              </tr>
                              <tr>
                                <td>Marital Status:</td>
                                <td>{user.marital_status}</td>
                              </tr>
                              <tr>
                                <td>About me:</td>
                                <td>{user.about_me}</td>
                              </tr>
                            </tbody>
                          </table>
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
};
export default MyAccount;
