import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import Axios from 'axios';

import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

import Page from '../components/Page';
import Loader from '../components/loader/Loader.component';
import ProductStarRating from '../components/product-star/product-star-rating.component';
import ProductCarouselContainer from '../components/product-carousel/product-carousel-container.component';
import ProductListVertical from '../components/product/product-list-vertical.component';
import StateContext from '../context/StateContext';
import ProductDetailCarousel from '../components/product-detail/image-carouser.component';
import DispatchContext from '../context/DispatchContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import DealPotraitItem from '../components/deal/deal-potrait-item.component';

const ProductDetails = () => {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  const { recentlyViewedProducts, setRecenltyViewedProducts, setProductSuggestions, flashDealPotrait } = useContext(StateContext);
  const { slug } = useParams('slug');
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProduct] = useState([]);
  const [topSellingProducts, setTopSellingProducts] = useState([]);

  useEffect(() => {
    const categoryIds = recentlyViewedProducts.map((recentlyViewedProduct) => {
      return recentlyViewedProduct.category_id;
    });
    const productRequest = Axios.CancelToken.source();
    async function fetchProductDetail() {
      try {
        setIsLoading(true);
        const response = await Axios.post(`/product/${slug}`, { categoryIds }, { cancelToken: productRequest.token });
        const linkData = response.data;
        const responseData = linkData.data;
        setProduct(responseData.product);
        setReviews(responseData.product_reviews);
        setRelatedProduct(responseData.related_products);
        setTopSellingProducts(responseData.top_selling_products);
        setRecenltyViewedProducts(addRecentViewedProduct(recentlyViewedProducts, responseData.product));
        setProductSuggestions(responseData.suggestion_products);
        setIsLoading(false);
      } catch (e) {}
    }
    fetchProductDetail();
    return () => {
      productRequest.cancel();
    };
  }, []);

  let [count, setCount] = useState(0);

  const addRecentViewedProduct = (recentlyViewedProducts, productToAdd) => {
    const existingProduct = recentlyViewedProducts.find((recentlyViewedProduct) => recentlyViewedProduct.id === productToAdd.id);
    if (!existingProduct) {
      return [productToAdd, ...recentlyViewedProducts];
    } else {
      return recentlyViewedProducts;
    }
  };

  const addToWishlist = (id) => {
    async function wishlistProduct() {
      try {
        const response = await Axios.post(
          `/add-to-wishlist/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${appState.state.user.token}`,
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        const responseData = response.data.data;
        appDispatch({ type: 'setWishlistCount', value: responseData.wishlistCount });
        appDispatch({ type: 'flashMessage', value: 'Product wishlisted' });
      } catch (e) {
        if (e.response.status === 401) {
          appDispatch({ type: 'flashMessage', value: 'Login to wishlist product' });
        } else {
          console.log('Error encountered');
        }
      }
    }
    wishlistProduct();
  };

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }

  return (
    <Page title="Product Detail">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Product</li>
            </ul>
          </div>
        </section>
        <section className="shop-main-section">
          <Container fluid>
            <Row>
              <Col md={9}>
                <div className="product-details-main-block">
                  <div className="card-block">
                    <div className="card-body-blk">
                      <Row>
                        <Col md={5}>
                          <div className="product-imgslider">{isLoading ? <Loader /> : <ProductDetailCarousel photos={product.photos} name={product.name} />}</div>
                        </Col>
                        <Col md={7}>
                          <div className="product-details-cont">
                            <h3>{isLoading ? '...' : product.name}</h3>
                            {isLoading || product.reviews_count === 0 ? <h5>Be the first to review this product </h5> : <ProductStarRating rating={product.rating} />}

                            <div className="proprice-blk">${product.base_discounted_price}</div>
                            <h4>
                              <span className="stock-blk in-stock">In stock</span>{' '}
                              <span className="sku-blk">
                                <b>SKU</b> {product.slug}
                              </span>
                            </h4>
                            <p>{product.short_description}</p>
                            <div className="qty-cart-fav-block">
                              <div className="qty-plsminus-blk">
                                <span>QTY</span>
                                <div className="plusminus-qty">
                                  <div className="input-group">
                                    <button onClick={decrementCount}>-</button>
                                    <input type="number" step="1" max="" value={count} name="quantity" className="quantity-field" disabled />
                                    <button onClick={incrementCount}>+</button>
                                  </div>
                                </div>
                              </div>
                              <button className="btn btn-primary">Add to Cart</button>
                              <span className="btn btn-black span-link" onClick={() => addToWishlist(product.id)}>
                                <i className="bi bi-heart"></i>
                              </span>
                              <span className="btn btn-black span-link">
                                <i className="bi bi-shuffle"></i>
                              </span>
                            </div>
                            <div className="share-product">
                              <span>Share this</span>
                              <ul className="socialshare-blk">
                                <li>
                                  <a href="#">
                                    <i className="fab fa-facebook-f"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-twitter"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-youtube"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-whatsapp"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <DealPotraitItem deal={flashDealPotrait} />
              </Col>
            </Row>
            <Row>
              <Col md={9}>
                <div className="productsdetails-tab">
                  <div className="card-block">
                    <div className="card-body-blk">
                      <Tabs defaultActiveKey="details" transition={false} id="noanim-tab-example">
                        <Tab eventKey="details" title="Details">
                          {isLoading ? '' : parse(product.description)}
                        </Tab>
                        <Tab eventKey="info" title="More Information">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu justo dui. Etiam finibus diam a fringilla sodales. Nunc feugiat, ligula quis feugiat commodo, libero eros vestibulum risus, eu egestas dolor augue at ex. Etiam at neque nisi. Nunc tristique lorem ut nisl sagittis posuere. Integer posuere metus eu dolor iaculis pretium. Cras accumsan nulla vitae gravida vulputate. Proin mollis auctor sagittis. Etiam ante diam, semper efficitur laoreet sit amet, luctus quis nisl. Integer pretium metus sit amet faucibus euismod. Aenean et finibus sapien, eget tempor dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sagittis velit vestibulum orci sagittis interdum. Mauris rhoncus tempus ex, non aliquam orci facilisis nec. Etiam volutpat vestibulum convallis. Proin et tempor mauris. Maecenas ullamcorper tempor pretium. Donec non nibh tempor, venenatis enim maximus, tristique massa. Proin odio tellus, iaculis at sapien sit amet, ullamcorper tincidunt purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet fringilla nunc. Nulla sit amet sapien risus. Sed consequat imperdiet tristique. Suspendisse quis rutrum mauris. In id nibh molestie, venenatis mi in, tristique metus. Maecenas pharetra, nulla luctus eleifend viverra, velit arcu commodo est, nec dapibus lacus nisi eu nisi. Maecenas interdum vitae turpis non dictum. Quisque consequat velit vitae lorem semper, at bibendum odio finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed dictum augue, eget ullamcorper enim. Nullam vel enim purus. Donec quis eleifend est. Sed efficitur mollis hendrerit. Phasellus dapibus mattis laoreet. Aenean facilisis libero non purus pellentesque consequat. Nam et porta justo, sed accumsan lorem. Praesent ac libero sit amet est aliquet euismod sed non felis. Sed leo ante, efficitur vel suscipit sed, mattis in ipsum. Vivamus pharetra venenatis risus, auctor hendrerit mauris auctor sit amet. Integer iaculis lorem a dictum vulputate. Duis sodales leo sed tristique sagittis. Nulla posuere mauris scelerisque, porttitor mi viverra, consequat enim. Suspendisse iaculis eros eu tortor eleifend, quis scelerisque mi placerat. Cras sit amet massa eget quam varius pharetra ac eu lorem. Sed bibendum ultrices efficitur.</p>
                        </Tab>
                        <Tab eventKey="review" title="Reviews">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu justo dui. Etiam finibus diam a fringilla sodales. Nunc feugiat, ligula quis feugiat commodo, libero eros vestibulum risus, eu egestas dolor augue at ex. Etiam at neque nisi. Nunc tristique lorem ut nisl sagittis posuere. Integer posuere metus eu dolor iaculis pretium. Cras accumsan nulla vitae gravida vulputate. Proin mollis auctor sagittis. Etiam ante diam, semper efficitur laoreet sit amet, luctus quis nisl. Integer pretium metus sit amet faucibus euismod. Aenean et finibus sapien, eget tempor dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sagittis velit vestibulum orci sagittis interdum. Mauris rhoncus tempus ex, non aliquam orci facilisis nec. Etiam volutpat vestibulum convallis. Proin et tempor mauris. Maecenas ullamcorper tempor pretium. Donec non nibh tempor, venenatis enim maximus, tristique massa. Proin odio tellus, iaculis at sapien sit amet, ullamcorper tincidunt purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet fringilla nunc. Nulla sit amet sapien risus. Sed consequat imperdiet tristique. Suspendisse quis rutrum mauris. In id nibh molestie, venenatis mi in, tristique metus. Maecenas pharetra, nulla luctus eleifend viverra, velit arcu commodo est, nec dapibus lacus nisi eu nisi. Maecenas interdum vitae turpis non dictum. Quisque consequat velit vitae lorem semper, at bibendum odio finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed dictum augue, eget ullamcorper enim. Nullam vel enim purus. Donec quis eleifend est. Sed efficitur mollis hendrerit. Phasellus dapibus mattis laoreet. Aenean facilisis libero non purus pellentesque consequat. Nam et porta justo, sed accumsan lorem. Praesent ac libero sit amet est aliquet euismod sed non felis. Sed leo ante, efficitur vel suscipit sed, mattis in ipsum. Vivamus pharetra venenatis risus, auctor hendrerit mauris auctor sit amet. Integer iaculis lorem a dictum vulputate. Duis sodales leo sed tristique sagittis. Nulla posuere mauris scelerisque, porttitor mi viverra, consequat enim. Suspendisse iaculis eros eu tortor eleifend, quis scelerisque mi placerat. Cras sit amet massa eget quam varius pharetra ac eu lorem. Sed bibendum ultrices efficitur.</p>
                        </Tab>
                        <Tab eventKey="other" title="Custom Tabs">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu justo dui. Etiam finibus diam a fringilla sodales. Nunc feugiat, ligula quis feugiat commodo, libero eros vestibulum risus, eu egestas dolor augue at ex. Etiam at neque nisi. Nunc tristique lorem ut nisl sagittis posuere. Integer posuere metus eu dolor iaculis pretium. Cras accumsan nulla vitae gravida vulputate. Proin mollis auctor sagittis. Etiam ante diam, semper efficitur laoreet sit amet, luctus quis nisl. Integer pretium metus sit amet faucibus euismod. Aenean et finibus sapien, eget tempor dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla sagittis velit vestibulum orci sagittis interdum. Mauris rhoncus tempus ex, non aliquam orci facilisis nec. Etiam volutpat vestibulum convallis. Proin et tempor mauris. Maecenas ullamcorper tempor pretium. Donec non nibh tempor, venenatis enim maximus, tristique massa. Proin odio tellus, iaculis at sapien sit amet, ullamcorper tincidunt purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet fringilla nunc. Nulla sit amet sapien risus. Sed consequat imperdiet tristique. Suspendisse quis rutrum mauris. In id nibh molestie, venenatis mi in, tristique metus. Maecenas pharetra, nulla luctus eleifend viverra, velit arcu commodo est, nec dapibus lacus nisi eu nisi. Maecenas interdum vitae turpis non dictum. Quisque consequat velit vitae lorem semper, at bibendum odio finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer sed dictum augue, eget ullamcorper enim. Nullam vel enim purus. Donec quis eleifend est. Sed efficitur mollis hendrerit. Phasellus dapibus mattis laoreet. Aenean facilisis libero non purus pellentesque consequat. Nam et porta justo, sed accumsan lorem. Praesent ac libero sit amet est aliquet euismod sed non felis. Sed leo ante, efficitur vel suscipit sed, mattis in ipsum. Vivamus pharetra venenatis risus, auctor hendrerit mauris auctor sit amet. Integer iaculis lorem a dictum vulputate. Duis sodales leo sed tristique sagittis. Nulla posuere mauris scelerisque, porttitor mi viverra, consequat enim. Suspendisse iaculis eros eu tortor eleifend, quis scelerisque mi placerat. Cras sit amet massa eget quam varius pharetra ac eu lorem. Sed bibendum ultrices efficitur.</p>
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </div>
                <div className="recent-product-block">
                  <div className="card-block">
                    <div className="card-head-blk">
                      <h4>Related Products</h4>
                    </div>
                    <div className="card-body-blk">{isLoading ? <Loader /> : <ProductCarouselContainer products={relatedProducts} />}</div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="side-features-blk">
                  <div className="card-block">
                    <div className="card-head-blk">
                      <h4>BESTSELLERS</h4>
                    </div>
                    <div className="card-body-blk">
                      <ul className="bestsellers-blk">{isLoading ? <Loader /> : topSellingProducts.map((topSellingProduct) => <ProductListVertical product={topSellingProduct} />)}</ul>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Page>
  );
};

export default ProductDetails;
