import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import DispatchContext from '../context/DispatchContext';
import StateContext from '../context/StateContext';

import Axios from 'axios';

const DashboardSideMenu = () => {
  const appState = useContext(StateContext);
  console.log(appState);
  const appDispatch = useContext(DispatchContext);
  async function handleLogOut(e) {
    e.preventDefault();
    try {
      await Axios.get('/log-out', {
        headers: {
          Authorization: `Bearer ${appState.state.user.token}`,
        },
      });
      appDispatch({ type: 'logout' });
    } catch (error) {
      console.log('error encountered');
    }
  }
  return (
    <div className="col-md-3">
      <div className="sidebar-dashboard">
        <div className="user-details-side">
          <div className="user-img">
            <img src={appState.state.user.profileImage ? appState.state.user.profileImage : 'assets/images/candidate-1.jpg'} alt="" />
          </div>
          <div className="user-info">
            <h4>{appState.state.user.name}</h4>
            <p>
              <i className="fas fa-phone"></i> {appState.state.user.mobileNumber}
            </p>
            <p>
              <i className="far fa-envelope"></i> {appState.state.user.email}
            </p>
          </div>
        </div>
        <ul>
          <li>
            <NavLink to="/dashboard">
              <i className="fas fa-home"></i> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-account">
              <i className="fas fa-address-book"></i> My Account
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-favourite">
              <i className="fas fa-heart"></i> My Favourite
            </NavLink>
          </li>
          <li>
            <NavLink to="/change-password">
              <i className="fas fa-lock"></i> Change Password
            </NavLink>
          </li>
          <li>
            <NavLink to="/setting">
              <i className="fas fa-cogs"></i> Account Setting
            </NavLink>
          </li>
          <li>
            <NavLink to="/address-book">
              <i className="fas fa-book"></i> Address Book
            </NavLink>
          </li>
          <li>
            <button className="btn btn-danger" onClick={handleLogOut}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </li>
        </ul>
        <div className="last-login">
          <b>Last login:</b> {appState.state.user.lastLogin}
        </div>
      </div>
    </div>
  );
};
export default DashboardSideMenu;
