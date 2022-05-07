import React, { useContext, useState } from 'react';
import Axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

import Page from '../components/Page';
import DispatchContext from '../context/DispatchContext';

const LoginOTP = () => {
  const navigate = useNavigate();
  const appDispatch = useContext(DispatchContext);

  const [mobileNumber, setMobileNumber] = useState('');
  const [errors, setErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post('/verify-mobile-number', {
        mobile_number: mobileNumber,
      });
      appDispatch({ type: 'flashMessage', value: 'OTP send to mobile number' });
      navigate('/getOTP');
    } catch (error) {
      if (e.response.status === 422) {
        const response = await e.response.data;
        setErrors(response.errors);
      } else {
        console.log('Error encountered');
      }
    }
  }
  return (
    <Page title="Login OTP">
      <div className="login-signup-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-inner-block">
                <div className="heading-title-blk">
                  <Button variant="secondary full-btn" onClick={() => navigate('/login')}>
                    Login using Email Id
                  </Button>
                  <div className="or-block">
                    <span>OR</span>
                  </div>
                  <h3>Login with Mobile Number</h3>
                </div>
                <div className="form-block">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder="You will get OTP on this number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                      <span className="text-danger">{errors.mobile_number}</span>
                    </Form.Group>
                    <Button variant="primary full-btn" type="submit" onClick={handleSubmit}>
                      Get OTP
                    </Button>
                    <div className="login-bottom-blk">
                      <h5>
                        Login with <NavLink to="/LoginPassword">Password</NavLink>
                      </h5>
                      <p>
                        By Logging In, you agree the following <NavLink to="/terms-and-condition">Terms & Conditions</NavLink> and the <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                      </p>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Page>
  );
};
export default LoginOTP;
