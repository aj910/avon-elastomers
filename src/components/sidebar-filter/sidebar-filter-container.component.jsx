import { Accordion, Form, Row, Container } from 'react-bootstrap';
import SidebarFilterAttributeContainer from './sidebar-filter-attributes-container.component';
import SidebarFilterCategoryItem from './sidebar-filter-category-item.component';

const prices = [
  {
    id: 1,
    value: '$1200'
  },
  {
    id: 2,
    value: '$1300'
  },
  {
    id: 3,
    value: '$1500'
  },
];

// console.log(prices)


const SidebarFilterContainer = ({ categories, attributes, categoryIds, setCategoryIds, priceIds, setPriceIds, attributeIds, setAttributeIds }) => {
  return (
    <div className="sidebar-block">
      <div className="side-head-blk">FILTER BY</div>
      <div className="side-accordian">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>
              <Form>
                {categories.map((category) => (
                  <SidebarFilterCategoryItem key={category.id} category={category} categoryIds={categoryIds} setCategoryIds={setCategoryIds} />
                ))}

              </Form>

            </Accordion.Body>
          </Accordion.Item>
          {attributes.map((attribute) => (
            <SidebarFilterAttributeContainer key={attribute.id} attribute={attribute} attributeIds={attributeIds} setAttributeIds={setAttributeIds} />
          ))}
          <Accordion.Item eventKey="1">
            <Accordion.Header>Price</Accordion.Header>

            <Accordion.Body>Lorem Ipsum</Accordion.Body>
            

            <Accordion.Body>
              {prices.map((price) => 
               <div className="priceval" key={price.id}>
                 {price.value}
               </div>
              )}
            
            </Accordion.Body>




          </Accordion.Item>

        </Accordion>
      </div>
    </div>
  );
};

export default SidebarFilterContainer;
