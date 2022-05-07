import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";

import Page from "../components/Page";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [buttonText, setButtonText] = useState("Register");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText("Submitting...");
    try {
      const response = await Axios.post("/sign-up", {
        name,
        email,
        mobile_number: mobileNumber,
        gender,
        password,
        password_confirmation: confirmPassword,
      });
      const responseData = response.data;
      console.log(responseData);
      setName("");
      setEmail("");
      setMobileNumber("");
      setGender("");
      setPassword("");
      setConfirmPassword("");
      setErrors([]);
      setButtonText("Submitted!");
      navigate(`/login`);
    } catch (e) {
      setButtonDisabled(false);
      setButtonText("Register");
      if (e.response.status === 422) {
        const response = await e.response.data;
        setErrors(response.errors);
      } else {
        console.log("Error encountered");
      }
    }
  }
  return (
    <Page title="Sign Up">
      <div className="login-signup-section">
        <Container>
          <div className="heading-title-section"></div>
          <Row className="justify-content-center">
            <Col md="4">
              <div className="login-inner-block">
                <div className="heading-title-blk">
                  <h3>Register Free</h3>
                </div>
                <div className="form-block">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} />
                      <span className="text-danger">{errors.name}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email Id</Form.Label>
                      <Form.Control type="email" placeholder="Enter email Id" onChange={(e) => setEmail(e.target.value)} value={email} />
                      <span className="text-danger">{errors.email}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control type="text" placeholder="Mobile Number" onChange={(e) => setMobileNumber(e.target.value)} value={mobileNumber} />
                      <span className="text-danger">{errors.mobile_number}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Gender</Form.Label>
                      <Form.Control as="select" className="form-select" onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Form.Control>
                      <span className="text-danger">{errors.gender}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Create a Password</Form.Label>
                      <Form.Control type="password" placeholder="Create a Password" onChange={(e) => setPassword(e.target.value)} value={password} />
                      <div className="input-text">Password should not be less then minimum 8 Alpha Numeric characters</div>
                      <span className="text-danger">{errors.password}</span>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                    </Form.Group>
                    <Button variant="primary full-btn" type="submit" disabled={buttonDisabled}>
                      {buttonText}
                    </Button>
                    <div className="login-bottom-blk">
                      <p>
                        By Logging In, you agree the following <NavLink to="/terms-and-condition">Terms & Conditions</NavLink> and the <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                      </p>
                      <h6>
                        Have an account? <NavLink to="/login">Click here</NavLink>
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
export default SignUp;
