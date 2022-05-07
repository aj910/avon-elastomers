import { Accordion } from "react-bootstrap";

import parse from "html-react-parser";

const FaqItem = ({ faq }) => {
  return (
    <Accordion.Item eventKey={faq.id}>
      <Accordion.Header>{faq.question}</Accordion.Header>
      <Accordion.Body>{parse(faq.answer)}</Accordion.Body>
    </Accordion.Item>
  );
};

export default FaqItem;
