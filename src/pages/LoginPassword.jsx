import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import history from "../history";

import Page from "../components/Page";

function LoginPassword() {
  return (
    <Page title="Login Password">
      <div className="login-signup-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-inner-block">
                <div className="heading-title-blk">
                  <Button variant="secondary full-btn" onClick={() => history.push("/Login")}>
                    Login using Email Id
                  </Button>
                  <div className="or-block">
                    <span>OR</span>
                  </div>
                  <h3>Login with Password</h3>
                </div>
                <div className="form-block">
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="email" placeholder="Enter Mobile Number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter your Password" />
                    </Form.Group>
                    <Button variant="primary full-btn" type="submit">
                      Login
                    </Button>
                    <div className="login-bottom-blk">
                      <h5>
                        Login with <NavLink to="/LoginOTP">OTP</NavLink>
                      </h5>
                      <p>
                        By Logging In, you agree the following <NavLink to="/Terms">Terms & Conditions</NavLink> and the <NavLink to="/Privacy">Privacy Policy</NavLink>
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
}
export default LoginPassword;
