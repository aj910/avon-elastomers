import { useContext } from "react";
import { Accordion } from "react-bootstrap";
import StateContext from "../../context/StateContext";
import FaqItem from "../common/faq-item.component";

const FaqContainer = () => {
  const { faqs } = useContext(StateContext);
  return (
    <Accordion>
      {faqs.map((faq) => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </Accordion>
  );
};

export default FaqContainer;
