import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

import DashboardSideMenu from '../components/DashboardSideMenu';
import Page from '../components/Page';
import StateContext from '../context/StateContext';
import DispatchContext from '../context/DispatchContext';

const ChangePassword = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const [buttonText, setButtonText] = useState('Submit');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText('Submitting...');
    try {
      await Axios.post(
        '/update-password',
        {
          old_password: oldPassword,
          password,
          password_confirmation: passwordConfirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${appState.state.user.token}`,
          },
        }
      );
      setOldPassword('');
      setPassword('');
      setPasswordConfirmation('');
      setErrors([]);
      setButtonDisabled(false);
      setButtonText('Submit');
      appDispatch({ type: 'flashMessage', value: 'Password Updated' });
    } catch (e) {
      setButtonDisabled(false);
      setButtonText('Submit');
      if (e.response.status === 422) {
        const response = await e.response.data;
        setErrors(response.errors);
      } else {
        console.log('Error encountered');
      }
    }
  }

  return (
    <Page title="Change Password">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Change Password</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <DashboardSideMenu></DashboardSideMenu>
              <div className="col-md-9">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>Change Password</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="shop-product-blk">
                      <Form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Old Password</Form.Label>
                              <Form.Control type="password" placeholder="Old Password" onChange={(e) => setOldPassword(e.target.value)} />
                              <span className="text-danger">{errors.old_password}</span>
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>New Password</Form.Label>
                              <Form.Control type="password" placeholder="New Password" onChange={(e) => setPassword(e.target.value)} />
                              <span className="text-danger">{errors.password}</span>
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Form.Group className="form-group">
                              <Form.Label>Confirm Password</Form.Label>
                              <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setPasswordConfirmation(e.target.value)} />
                            </Form.Group>
                          </div>
                          <div className="col-md-4">
                            <Button variant="primary" type="submit" disabled={buttonDisabled}>
                              {buttonText}
                            </Button>
                          </div>
                        </div>
                      </Form>
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

export default ChangePassword;
