import { Link } from 'react-router-dom';

const DealItem = ({ deal }) => {
  return (
    <div className="col-md-4">
      <Link to={`/deal/${deal.slug}`} className="bfs-3blk-img">
        <img src={deal.banner} alt={deal.title} />
      </Link>
    </div>
  );
};

export default DealItem;
