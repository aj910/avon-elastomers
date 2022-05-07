import Axios from 'axios';
import { useContext } from 'react';
import DispatchContext from '../../context/DispatchContext';
import StateContext from '../../context/StateContext';

const AddressBlock = ({ name, address, setAddresses, setEditAddress, setShowEdit, setShowAdd }) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  async function handleDelete(id) {
    try {
      const response = await Axios.post(
        `/delete-address/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${appState.state.user.token}`,
          },
        }
      );
      const responseData = response.data.data;
      setAddresses(responseData.addresses);
      appDispatch({ type: 'flashMessage', value: 'Address Deleted' });
    } catch (e) {
      console.log('error encountered');
    }
  }

  function handleEdit(id) {
    setShowAdd(false);
    setEditAddress(id);
    setShowEdit(true);
  }
  return (
    <div className="address-block">
      <div className="address-details">
        <h5>{address.is_default === 'yes' ? <span>Default</span> : ''}</h5>
        <h4>
          <b>{name}</b> {address.phone}
        </h4>
        <p>
          {address.address}, {address.city}, {address.state}, {address.country}
        </p>
      </div>
      <div className="address-action">
        <button className="actionbtn editbtn" onClick={() => handleEdit(address.id)}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button className="actionbtn deletebtn" onClick={() => handleDelete(address.id)}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default AddressBlock;
