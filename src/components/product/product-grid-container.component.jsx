import { Col, Form, Row } from 'react-bootstrap';
import Loader from '../loader/Loader.component';
import ProductGridItem from './product-grid-item.component';

const ProductGridContainer = ({ isLoading, title, products, productCount, setSortBy }) => {
  function setSort(e) {
    setSortBy(e.target.value);
  }
  return (
    <div className="leftside-block">
      <div className="shopheader-blk">
        <h3>{title}</h3>
      </div>
      <div className="shopserach-grid-blk">
        <Row>
          <Col md={6}>
            <div className="gridlist-item-blk">
              <a href="#" className="gridlist-btn active">
                <i className="bi bi-grid"></i>
              </a>
              <a href="#" className="gridlist-btn">
                <i className="bi bi-list-task"></i>
              </a>
              <span>{productCount}</span>
            </div>
          </Col>
          <Col md={6}>
            <div className="sortby-block">
              <span>Sort By</span>
              <Form.Select aria-label="Default select example" onChange={(e) => setSort(e)}>
                <option value=""></option>
                <option value="1">Popularity</option>
                <option value="2">Price - Low to High</option>
                <option value="3">Price - High to Low</option>
                <option value="4">Newest First</option>
              </Form.Select>
            </div>
          </Col>
        </Row>
      </div>
      <div className="shop-product-blk">
        <Row>{isLoading ? <Loader /> : products.map((product) => <ProductGridItem image="assets/images/pro-1.png" product={product} key={product.id} />)}</Row>
      </div>
    </div>
  );
};

export default ProductGridContainer;
