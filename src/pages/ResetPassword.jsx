import React, { useContext, useEffect, useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

import Page from '../components/Page';
import DispatchContext from '../context/DispatchContext';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
  const appDispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  const { token } = useParams('token');

  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post('/reset-password', {
        password,
        password_confirmation: passwordConfirmation,
      });
      appDispatch({ type: 'flashMessage', value: 'Password has been updated' });
      navigate('/login');
    } catch (error) {
      if (e.response.status === 422) {
        const response = await e.response.data;
        setErrors(response.errors);
      } else {
        console.log('Error encountered');
      }
    }
  }

  useEffect(() => {
    const tokenRequest = Axios.CancelToken.source();
    async function verifyToken() {
      try {
        const response = await Axios.post(`/verify-reset-token/${token}`, {}, { cancelToken: tokenRequest.token });
        const responseData = response.data.data;
        console.log(responseData);
      } catch (e) {
        appDispatch({ type: 'flashMessage', value: 'Something went wrong' });
        navigate('/login');
      }
    }
    verifyToken();
    return () => {
      tokenRequest.cancel();
    };
  }, []);
  return (
    <Page title="Reset Password">
      <div className="login-signup-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-inner-block">
                <div className="heading-title-blk">
                  <h4>Reset Password</h4>
                  <p>please reset you password</p>
                </div>
                <div className="form-block">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Create a Password</Form.Label>
                      <Form.Control type="password" placeholder="Create a Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      <div className="input-text">Password should not be less then minimum 8 Alpha Numeric characters</div>
                      <span className="text-danger">{errors.password}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary full-btn" type="submit" onClick={handleSubmit}>
                      Reset Password
                    </Button>
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

export default ResetPassword;
