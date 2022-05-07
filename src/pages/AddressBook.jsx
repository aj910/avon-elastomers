import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Axios from 'axios';

import Page from '../components/Page';
import DashboardSideMenu from '../components/DashboardSideMenu';
import StateContext from '../context/StateContext';
import AddressBlock from '../components/address-block/address-block.component';
import AddAddress from '../components/address-modal/add-address.component';
import Loader from '../components/loader/Loader.component';
import EditAddress from '../components/address-modal/edit-address.component';

const AddressBook = () => {
  const appState = useContext(StateContext);
  const [addresses, setAddresses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editAddress, setEditAddress] = useState('');

  useEffect(() => {
    const addressRequest = Axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await Axios.get('/address-book', {
          headers: {
            Authorization: `Bearer ${appState.state.user.token}`,
          },
        });
        const responseData = response.data.data;
        setAddresses(responseData.addresses);
        setIsLoading(false);
      } catch (e) {
        console.log('error');
      }
    }
    fetchData();
    return () => {
      addressRequest.cancel();
    };
  }, [showAdd, showEdit]);

  function handleAdd() {
    setShowEdit(false);
    setEditAddress({});
    setShowAdd(true);
  }

  return (
    <Page title="Address Book">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Address Book</li>
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
                    <h4>Address Book</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="shop-product-blk">
                      <div className="address-book-blk">
                        <a href="#" onClick={handleAdd} className="add-address-blk">
                          <i className="fas fa-plus"></i> Add Address
                        </a>
                        {isLoading ? <Loader /> : addresses.map((address) => <AddressBlock key={address.id} name={appState.state.user.name} address={address} setAddresses={setAddresses} setEditAddress={setEditAddress} setShowEdit={setShowEdit} setShowAdd={setShowAdd} />)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AddAddress showAdd={showAdd} setShowAdd={setShowAdd} />
      <EditAddress showEdit={showEdit} setShowEdit={setShowEdit} editAddress={editAddress} />
    </Page>
  );
};

export default AddressBook;
