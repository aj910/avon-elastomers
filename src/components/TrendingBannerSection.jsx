import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const TrendingBannerSection = ({ homepageSetting }) => {
  return (
    <div className="container-fluid">
      <div className="new-league-block" style={{ background: `url(${homepageSetting.trending_banner ? homepageSetting.trending_banner : 'assets/images/image-9.jpg'})` }}>
        <div className="league-cont-blk">
          <h5>TRENDING</h5>
          <h3>{homepageSetting.trending_banner_title}</h3>
          {homepageSetting.trending_banner_content ? parse(homepageSetting.trending_banner_content) : ''}
          <Link className="btn btn-shop-white" to={`/category/${homepageSetting.trending_banner_category_link}`}>
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingBannerSection;
