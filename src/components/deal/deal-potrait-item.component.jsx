import { Link } from 'react-router-dom';

const DealPotraitItem = ({ deal }) => {
  return (
    <div className="bfs-offer-img" style={{ background: `url(${deal.banner})` }}>
      <div className="bfs-cont-blk">
        <h5>{deal.title}</h5>
        <h3>
          UP TO <span>30% Off</span>
        </h3>
        <h4>EVERYYHING</h4>
        <Link to={`/deal/${deal.slug}`} className="btn btn-shop-white">
          Shop Now
        </Link>
      </div>
    </div>
  );
};
export default DealPotraitItem;
