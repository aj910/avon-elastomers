import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

import Page from '../components/Page';

const Contact = ({ websiteSetting }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState([]);
  const [buttonText, setButtonText] = useState('SEND MESSAGE');
  const [buttonDisabled, setButtonDisabled] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText('Submitting...');
    try {
      await Axios.post('/submit-contact-us', {
        name,
        email,
        phone_number: phoneNumber,
        message,
      });
      setName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
      setErrors([]);
      setButtonText('Submitted!');
    } catch (e) {
      setButtonDisabled(false);
      setButtonText('SEND MESSAGE');
      if (e.response.status === 422) {
        const response = await e.response.data;
        setErrors(response.errors);
      } else {
        console.log('Error encountered');
      }
    }
  }

  return (
    <Page title="Contact Us">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>
        <section className="inner-page-banner-section">
          <div className="container-fluid">
            <div className="inner-banner-blk">
              <iframe src={websiteSetting.map} width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy" title="map"></iframe>
            </div>
          </div>
        </section>
        <section className="about-cont-block">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>SEND YOUR COMMENTS</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="contactusform-blk">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="form-group">
                          <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required />
                          <span className="text-danger">{errors.name}</span>
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                          <span className="text-danger">{errors.email}</span>
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Control type="text" placeholder="Phone No." onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} required />
                          <span className="text-danger">{errors.phone_number}</span>
                        </Form.Group>
                        <Form.Group className="form-group">
                          <Form.Control as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)} value={message} required />
                          <span className="text-danger">{errors.message}</span>
                        </Form.Group>
                        <Button variant="black" type="submit" disabled={buttonDisabled}>
                          {buttonText}
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>CONTACT US</h4>
                  </div>
                  <div className="card-body-blk">
                    <ul className="contact-info">
                      <li>
                        <i className="bi bi-geo-alt"></i> <span>Address: {websiteSetting.address}</span>
                      </li>
                      <li>
                        <i className="bi bi-envelope"></i> <span>Email: {websiteSetting.email}</span>
                      </li>
                      <li>
                        <i className="bi bi-telephone"></i> <span>Phone: {websiteSetting.phone_number}</span>
                      </li>
                      <li>
                        <i className="bi bi-clock"></i> <span>Open Time: {websiteSetting.office_timing}</span>
                      </li>
                    </ul>
                    <ul className="contact-socialmedia">
                      <li>
                        <a href={websiteSetting.facebook_link} target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href={websiteSetting.twitter_link} target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href={websiteSetting.linkedin_link} target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href={websiteSetting.youtube_link} target="_blank" rel="noreferrer">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href={websiteSetting.whatsapp_link} target="_blank" rel="noreferrer">
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      </li>
                    </ul>
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
export default Contact;
