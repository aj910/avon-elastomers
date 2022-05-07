import { useContext, useEffect, useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Axios from 'axios';
import StateContext from '../../context/StateContext';
import DispatchContext from '../../context/DispatchContext';

const EditAddress = ({ showEdit, setShowEdit, editAddress }) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const { countries } = appState;

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const [isDefault, setIsDefault] = useState('');
  const [errors, setErrors] = useState([]);
  const [buttonText, setButtonText] = useState('Submit');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  async function handleSubmit(e) {
    e.preventDefault();
    setButtonDisabled(true);
    try {
      setErrors([]);
      const response = await Axios.post(
        `/update-address/${editAddress}`,
        {
          address,
          city,
          state,
          country,
          pincode,
          phone,
          isDefault,
        },
        {
          headers: {
            Authorization: `Bearer ${appState.state.user.token}`,
          },
        }
      );
      const responseData = response.data.data;
      console.log(responseData);
      // setAddresses([...addresses, responseData.address]);
      setErrors([]);
      setButtonDisabled(false);
      setButtonText('Submit');
      appDispatch({ type: 'flashMessage', value: 'Address Update' });
      setShowEdit(false);
    } catch (error) {
      setButtonDisabled(false);
      setButtonText('Submit');
      if (error.response.status === 422) {
        const response = await error.response.data;
        setErrors(response.errors);
      } else {
        console.log('Error encountered');
      }
    }
  }

  useEffect(() => {
    const addressRequest = Axios.CancelToken.source();
    async function fetchData() {
      try {
        setButtonDisabled(true);
        const response = await Axios.get(`/edit-address/${editAddress}`, {
          headers: {
            Authorization: `Bearer ${appState.state.user.token}`,
          },
        });
        const responseData = response.data.data.address;
        console.log(responseData);
        setAddress(responseData.address);
        setCity(responseData.city);
        setState(responseData.state);
        setCountry(responseData.country);
        setPincode(responseData.postal_code);
        setPhone(responseData.phone);
        setIsDefault(responseData.is_default);
        setButtonDisabled(false);
      } catch (e) {
        console.log('error');
      }
    }
    fetchData();
    return () => {
      addressRequest.cancel();
    };
  }, [editAddress]);

  return (
    <Modal className="address-model-block" show={showEdit} animation={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Address</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="row">
            <div className="col-md-4">
              <Form.Group className="form-group">
                <Form.Label>Address (Area or Street)</Form.Label>
                <Form.Control type="text" placeholder="Address (Area or Street)" onChange={(e) => setAddress(e.target.value)} value={address} />
                <span className="text-danger">{errors.address}</span>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="form-group">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" onChange={(e) => setCity(e.target.value)} value={city} />
                <span className="text-danger">{errors.city}</span>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="form-group">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" placeholder="State" onChange={(e) => setState(e.target.value)} value={state} />
                <span className="text-danger">{errors.state}</span>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="form-group">
                <Form.Label>Select Country</Form.Label>
                <Form.Select onChange={(e) => setCountry(e.target.value)} value={country}>
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </Form.Select>
                <span className="text-danger">{errors.country}</span>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="form-group">
                <Form.Label>Pincode</Form.Label>
                <Form.Control type="text" placeholder="Pincode" onChange={(e) => setPincode(e.target.value)} value={pincode} />
                <span className="text-danger">{errors.pincode}</span>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="form-group">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Contact Number" onChange={(e) => setPhone(e.target.value)} value={phone} />
                <span className="text-danger">{errors.phone}</span>
              </Form.Group>
            </div>
            <div className="col-md-4">
              <Form.Group className="form-group">
                <Form.Label>Set as Default</Form.Label>
                <Form.Select onChange={(e) => setIsDefault(e.target.value)} value={isDefault}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </Form.Select>
                <span className="text-danger">{errors.isDefault}</span>
              </Form.Group>
            </div>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit" disabled={buttonDisabled} onClick={handleSubmit}>
          Save Address
        </Button>
        <Button variant="secondary" onClick={() => setShowEdit(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAddress;
