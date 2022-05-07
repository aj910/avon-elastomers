import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Axios from 'axios';
import ProductStarRating from '../product-star/product-star-rating.component';
import StateContext from '../../context/StateContext';
import DispatchContext from '../../context/DispatchContext';

const ProductGridItem = ({ image, product, wishlist, setProducts }) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const removeFromWishlist = (id) => {
    async function wishlistProduct() {
      try {
        const response = await Axios.post(
          `/remove-from-wishlist/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${appState.state.user.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        const responseData = response.data.data;
        setProducts(responseData.wishlisted_products);
        appDispatch({ type: 'setWishlistCount', value: responseData.wishlistCount });
        appDispatch({ type: 'flashMessage', value: 'Product Removed' });
      } catch (e) {
        console.log('Error encountered');
      }
    }
    wishlistProduct();
  };
  return (
    <Col md={4}>
      <div className="product-block product-shoppage">
        <Link to={`/product/${product.slug}`}>
          <div className="product-img-blk">
            {product.base_discounted_price < product.base_price ? <span className="sale-blk">Sale</span> : ''}
            <img src={product.thumbnail} alt={product.name} />
          </div>
          <div className="product-cont-blk">
            <h4>{product.name}</h4>
            <ProductStarRating rating={product.rating} />
            {product.base_discounted_price < product.base_price ? <del>${product.base_price}</del> : ''}
            <p>${product.base_discounted_price}</p>
          </div>
        </Link>
        {wishlist ? (
          <span
            className="btn btn-danger"
            onClick={() => {
              removeFromWishlist(product.id);
            }}
          >
            Remove
          </span>
        ) : (
          ''
        )}
      </div>
    </Col>
  );
};

export default ProductGridItem;
