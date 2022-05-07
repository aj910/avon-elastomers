import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Page from "../components/Page";

function Success() {
  return (
    <Page title="Success">
      <div className="login-signup-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <div className="successfull">
                <img src="assets/images/successful-icon.png" alt="" />
                <h3>successfull</h3>
                <p>Your order has been placed successfully!</p>
                <p>Please check your email for more details. For any question and further information, please contact our customer support.</p>
                <div className="ordersuccess-detail">
                  <p>
                    <b>Order Id:</b> #RES98789
                  </p>
                  <p>
                    <b>Order Amount:</b> $ 430
                  </p>
                  <NavLink to="/" className="btn btn-primary">
                    Back to Home
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Page>
  );
}
export default Success;
