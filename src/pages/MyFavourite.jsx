import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';
import DashboardSideMenu from '../components/DashboardSideMenu';
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

import Page from '../components/Page';
import ProductGridItem from '../components/product/product-grid-item.component';
import StateContext from '../context/StateContext';
import DispatchContext from '../context/DispatchContext';

const MyFavourite = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const userRequest = Axios.CancelToken.source();
    async function fetchData() {
      try {
        const response = await Axios.get('/wishlist', {
          headers: {
            Authorization: `Bearer ${appState.state.user.token}`,
          },
        });
        const responseData = response.data.data;
        setProducts(responseData.wishlisted_products);
      } catch (e) {
        if (e.response.status === 401) {
          appDispatch({ type: 'logout' });
        } else {
          console.log('Error encountered');
        }
      }
    }
    fetchData();
    return () => {
      userRequest.cancel();
    };
  }, []);
  return (
    <Page title="My Favourite">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>My Favourite</li>
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
                    <h4>My Favourite</h4>
                  </div>
                  <div className="card-body-blk">
                    <div className="shop-product-blk">
                      <Row>
                        {products.map((product) => (
                          <ProductGridItem key={product.id} product={product} wishlist={true} setProducts={setProducts} />
                        ))}
                      </Row>
                    </div>
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
export default MyFavourite;
