import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

import Page from '../components/Page';

import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarFilterContainer from '../components/sidebar-filter/sidebar-filter-container.component';
import ProductGridContainer from '../components/product/product-grid-container.component';
import PaginationLink from '../components/common/pagination-link.component';

const NewArrivals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [attributes, setAttributes] = useState([]);
  const [colors, setColors] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productCount, setProductCount] = useState('0 products');
  const [links, setLinks] = useState({});
  const [categoryIds, setCategoryIds] = useState([]);
  const [attributeIds, setAttributeIds] = useState([]);
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    setPageNumber(1);
  }, [categoryIds, attributeIds]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const productRequest = Axios.CancelToken.source();
    async function fetchCategoryProducts() {
      try {
        setIsLoading(true);
        const response = await Axios.post(`/new-products?page=${pageNumber}`, { categoryIds, sortBy, attributeIds }, { cancelToken: productRequest.token });
        const linkData = response.data;
        const responseData = linkData.data;
        setAttributes(responseData.attributes);
        setColors(responseData.colors);
        setProducts(responseData.products);
        setCategories(responseData.side_panel_categories);
        setProductCount(responseData.productTotal);
        setLinks(linkData.links);
        setIsLoading(false);
      } catch (e) {}
    }
    fetchCategoryProducts();
    return () => {
      productRequest.cancel();
    };
  }, [categoryIds, sortBy, attributeIds, pageNumber]);

  return (
    <Page title="New Arrivals">
      <div className="inner-pages-wrapper">
        <section className="breadcrumb-sction">
          <div className="container-fluid">
            <ul className="breadcrumb-block">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>Shop</li>
            </ul>
          </div>
        </section>
        <section className="shop-main-section">
          <Container fluid>
            <Row>
              <Col md={3}>
                <SidebarFilterContainer categories={categories} colors={colors} attributes={attributes} categoryIds={categoryIds} setCategoryIds={setCategoryIds} attributeIds={attributeIds} setAttributeIds={setAttributeIds} />
              </Col>
              <Col md={9}>
                <ProductGridContainer isLoading={isLoading} title="All Products" products={products} productCount={productCount} setSortBy={setSortBy} />
                <PaginationLink links={links} setPageNumber={setPageNumber} />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </Page>
  );
};
export default NewArrivals;
