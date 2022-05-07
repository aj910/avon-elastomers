import { Accordion, Form } from 'react-bootstrap';

const SidebarFilterAttributeContainer = ({ attribute, attributeIds, setAttributeIds }) => {
  function setAttribute(e) {
    let tempAttributeIds = [...attributeIds];
    if (e.target.checked) {
      tempAttributeIds.push(e.target.value);
    } else {
      tempAttributeIds = tempAttributeIds.filter((tempAttributeId) => tempAttributeId !== e.target.value);
    }
    setAttributeIds(tempAttributeIds);
  }
  return (
    <Accordion.Item eventKey={attribute.id}>
      <Accordion.Header>{attribute.name}</Accordion.Header>
      <Accordion.Body>
        <Form>
          {attribute.values.map((value, index) => (
            <div className="form-group form-check customcheckbox" key={index}>
              <input type="checkbox" className="form-check-input" id={value} value={value} onChange={(e) => setAttribute(e)} />
              <label className="form-check-label" htmlFor={value}>
                {value}
              </label>
            </div>
          ))}
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SidebarFilterAttributeContainer;
