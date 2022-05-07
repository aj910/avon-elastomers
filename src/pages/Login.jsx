import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Axios from 'axios';

import Page from '../components/Page';
import DispatchContext from '../context/DispatchContext';

const Login = () => {
  const appDispatch = useContext(DispatchContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [buttonText, setButtonText] = useState('Login');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText('Submitting...');
    try {
      const response = await Axios.post('/sign-in', {
        email,
        password,
      });
      const responseData = response.data.data;
      appDispatch({
        type: 'login',
        data: {
          token: responseData.token,
          name: responseData.user.name,
          email: responseData.user.email,
          mobileNumber: responseData.user.mobile_number,
          profileImage: responseData.user.profile_image,
          lastLogin: responseData.user.last_login,
        },
      });
      setEmail('');
      setPassword('');
      setErrors([]);
      setButtonText('Submitted!');
      appDispatch({ type: 'flashMessage', value: 'Login Successfull' });
      appDispatch({ type: 'setWishlistCount', value: responseData.wishlistCount });
      navigate(`/dashboard`);
    } catch (e) {
      setButtonDisabled(false);
      setButtonText('Login');
      if (e.response.status === 422) {
        const response = await e.response.data;
        setErrors(response.errors);
      } else {
        console.log('Error encountered');
      }
    }
  }
  return (
    <Page title="Login">
      <div className="login-signup-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-inner-block">
                <div className="heading-title-blk">
                  <Button variant="secondary full-btn" onClick={() => navigate('/LoginOTP')}>
                    Login using Mobile Number
                  </Button>
                  <div className="or-block">
                    <span>OR</span>
                  </div>
                  <h3>Login with Email</h3>
                </div>
                <div className="form-block">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email ID" onChange={(e) => setEmail(e.target.value)} />
                      <span className="text-danger">{errors.email}</span>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
                      <span className="text-danger">{errors.password}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <div className="forgot-password-blk">
                        <NavLink to="/forgot-password">Forgot Password?</NavLink>
                      </div>
                    </Form.Group>
                    <Button variant="primary full-btn" type="submit" disabled={buttonDisabled}>
                      {buttonText}
                    </Button>
                    <div className="login-bottom-blk">
                      <p>
                        By Logging In, you agree the following <NavLink to="/terms-and-condition">Terms & Conditions</NavLink> and the <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                      </p>
                      <h6>
                        Don't have an account? <NavLink to="/sign-up">Click here</NavLink>
                      </h6>
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
export default Login;
