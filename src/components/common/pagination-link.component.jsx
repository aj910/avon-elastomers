import Pagination from 'react-bootstrap/Pagination';
const PaginationLink = ({ links, setPageNumber }) => {
  const getPagination = () => {
    let paginationLinks = [];
    let active = links.current_page;
    let disabled = links.current_page;
    for (let index = 1; index <= links.last_page; index++) {
      paginationLinks.push(
        <Pagination.Item key={index} active={index === active} disabled={index === disabled} onClick={() => setPageNumber(index)}>
          {index}
        </Pagination.Item>
      );
    }
    return paginationLinks;
  };
  return <Pagination>{getPagination()}</Pagination>;
};
export default PaginationLink;
