import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import Page from "../components/Page";

function TrackOrder() {
  return (
    <Page title="Track Order">
      <section className="breadcrumb-sction">
        <div className="container-fluid">
          <ul className="breadcrumb-block">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>Track Order</li>
          </ul>
        </div>
      </section>
      <div className="trackorder-section">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <div className="trackorderblk">
                <p>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                <Form>
                  <div className="row justify-content-center">
                    <div className="col-md-4">
                      <Form.Group className="form-group">
                        <Form.Label>Order ID</Form.Label>
                        <Form.Control type="text" placeholder="Order ID" />
                      </Form.Group>
                    </div>
                    <div className="col-md-12">
                      <Button variant="primary" type="submit">
                        Update Profile
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Page>
  );
}
export default TrackOrder;
