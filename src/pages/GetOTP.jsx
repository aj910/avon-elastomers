import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Page from '../components/Page';

const GetOTP = () => {
  const [otp, setOTP] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Page title="Get OTP">
      <div className="login-signup-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-inner-block">
                <div className="heading-title-blk">
                  <h4>Please enter your verification code</h4>
                  <p>We have send a verification code to your mobile number.</p>
                </div>
                <div className="form-block">
                  <Form>
                    <Form.Group className="mb-3">
                      <div id="divOuter">
                        <div id="divInner">
                          <input id="partitioned" type="number" maxlength="4" value={otp} onChange={(e) => setOTP(e.target.value)} />
                        </div>
                      </div>
                    </Form.Group>
                    <Button variant="primary full-btn" type="submit" onClick={handleSubmit}>
                      Get OTP
                    </Button>
                    <div className="login-bottom-blk">
                      <h5>
                        Didn't Received OTP <NavLink to="#">Resend</NavLink>
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
export default GetOTP;
