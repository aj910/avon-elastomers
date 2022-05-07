import React, { useContext, useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import DashboardSideMenu from '../components/DashboardSideMenu';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

import Page from '../components/Page';
import StateContext from '../context/StateContext';
import DispatchContext from '../context/DispatchContext';

const Setting = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const ref = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [errors, setErrors] = useState([]);
  const [buttonText, setButtonText] = useState('Submit');
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    const userRequest = Axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await Axios.get('/my-account', {
          headers: {
            Authorization: `Bearer ${appState.state.user.token}`,
          },
        });
        const responseData = response.data.data;
        setName(responseData.user.name);
        setEmail(responseData.user.email);
        setMobileNumber(responseData.user.mobile_number);
        setGender(responseData.user.gender);
        setMaritalStatus(responseData.user.marital_status);
        setDateOfBirth(responseData.user.date_of_birth);
        setAboutMe(responseData.user.about_me);
      } catch (e) {
        console.log('error');
      }
    }
    fetchData();
    return () => {
      userRequest.cancel();
    };
  }, []);

  function handleFile(e) {
    setProfileImage(e.target.files[0]);
  }

  function reset() {
    ref.current.value = '';
    setProfileImage('');
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    setButtonText('Submitting...');
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('mobile_number', mobileNumber);
      formData.append('gender', gender);
      formData.append('marital_status', maritalStatus);
      formData.append('date_of_birth', dateOfBirth);
      formData.append('profile_image', profileImage);
      formData.append('about_me', aboutMe);
      const response = await Axios.post('/update-my-account', formData, {
        headers: {
          Authorization: `Bearer ${appState.state.user.token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      const responseData = response.data.data;
      appDispatch({
        type: 'setUser',
        data: {
          token: appState.state.user.token,
          name: responseData.user.name,
          email: responseData.user.email,
          mobileNumber: responseData.user.mobile_number,
          lastLogin: responseData.user.last_login,
        },
      });
      setErrors([]);
      setButtonDisabled(false);
      setButtonText('Submit');
      reset();
      appDispatch({ type: 'flashMessage', value: 'Profile Updated' });
    } catch (e) {
      setButtonDisabled(false);
      setButtonText('Submit');
      if (e.response.status === 422) {
        const response = await e.response.data;
        setErrors(response.errors);
      } else {
        console.log('Error encountered');
      }
    }
  }

  return (
    <Page title="Setting">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>My Account</li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container-fluid">
            <div className="row">
              <DashboardSideMenu />
              <div className="col-md-9">
                <div className="card-block">
                  <div className="card-head-blk">
                    <h4>My Account</h4>
                  </div>
                  <div className="card-body-blk">
                    <Form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-4">
                          <Form.Group className="form-group">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} />
                            <span className="text-danger">{errors.name}</span>
                          </Form.Group>
                        </div>
                        <div className="col-md-4">
                          <Form.Group className="form-group">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                            <span className="text-danger">{errors.email}</span>
                          </Form.Group>
                        </div>
                        <div className="col-md-4">
                          <Form.Group className="form-group">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Phone No." onChange={(e) => setMobileNumber(e.target.value)} value={mobileNumber} />
                            <span className="text-danger">{errors.mobile_number}</span>
                          </Form.Group>
                        </div>
                        <div className="col-md-4">
                          <Form.Group className="form-group">
                            <Form.Label>Select Gender</Form.Label>
                            <Form.Select onChange={(e) => setGender(e.target.value)} value={gender}>
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </Form.Select>
                            <span className="text-danger">{errors.gender}</span>
                          </Form.Group>
                        </div>
                        <div className="col-md-4">
                          <Form.Group className="form-group">
                            <Form.Label>Select Marital Status</Form.Label>
                            <Form.Select onChange={(e) => setMaritalStatus(e.target.value)} value={maritalStatus}>
                              <option value="">Select Marital Status</option>
                              <option value="Married">Married</option>
                              <option value="Unmarried">Unmarried</option>
                            </Form.Select>
                            <span className="text-danger">{errors.marital_status}</span>
                          </Form.Group>
                        </div>
                        <div className="col-md-4">
                          <Form.Group className="form-group">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Date of Birth" onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} />
                            <span className="text-danger">{errors.date_of_birth}</span>
                          </Form.Group>
                        </div>
                        <div className="col-md-4">
                          <Form.Group controlId="formFile" className="form-group">
                            <Form.Label>Upload Profile Photo</Form.Label>
                            <Form.Control type="file" onChange={handleFile} ref={ref} />
                            <span className="text-danger">{errors.profile_image}</span>
                          </Form.Group>
                        </div>
                        <div className="col-md-12">
                          <Form.Group className="form-group">
                            <Form.Label>About Me</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setAboutMe(e.target.value)} value={aboutMe} />
                            <span className="text-danger">{errors.about_me}</span>
                          </Form.Group>
                        </div>
                        <div className="col-md-4">
                          <Button variant="primary" type="submit" disabled={buttonDisabled}>
                            {buttonText}
                          </Button>
                        </div>
                      </div>
                    </Form>
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
export default Setting;
