import React, { useContext, useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Page from '../components/Page';
import DispatchContext from '../context/DispatchContext';

const ForgotPassword = () => {
  const appDispatch = useContext(DispatchContext);

  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await Axios.post('/forgot-password', {
        email,
      });
      appDispatch({ type: 'flashMessage', value: 'Password reset link has been sent to your email' });
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
    <Page title="Forgot Password">
      <div className="login-signup-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-inner-block">
                <div className="heading-title-blk">
                  <h4>Forgot your password?</h4>
                  <p>Don't worry! Just fill in your email and we'll send you a link to reset your password.</p>
                </div>
                <div className="form-block">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control type="email" placeholder="Enter Email ID" value={email} onChange={(e) => setEmail(e.target.value)} />
                      <span className="text-danger">{errors.email}</span>
                    </Form.Group>
                    <Button variant="primary full-btn" type="submit" onClick={handleSubmit}>
                      Reset Password
                    </Button>
                    <div className="login-bottom-blk">
                      <h5>
                        Remember password? <NavLink to="/Login">Login</NavLink>
                      </h5>
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
export default ForgotPassword;
