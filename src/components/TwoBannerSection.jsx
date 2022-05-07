import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

const TwoBannerSection = ({ homepageSetting }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="elec-cos-blk" style={{ background: `url(${homepageSetting.middle_banner_1 ? homepageSetting.middle_banner_1 : 'assets/images/image-43.jpg'})` }}>
            <div className="elctro-blk">
              <h4>{homepageSetting.middle_banner_1_title}</h4>
              {homepageSetting.middle_banner_1_content ? parse(homepageSetting.middle_banner_1_content) : ''}
              <Link to={`/category/${homepageSetting.middle_banner_1_category_link}`}>Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="elec-cos-blk" style={{ background: `url(${homepageSetting.middle_banner_2 ? homepageSetting.middle_banner_2 : 'assets/images/image-43.jpg'})` }}>
            <div className="elctro-blk cosmatic-blk">
              <h4>{homepageSetting.middle_banner_2_title}</h4>
              {homepageSetting.middle_banner_2_content ? parse(homepageSetting.middle_banner_2_content) : ''}
              <Link to={`/category/${homepageSetting.middle_banner_2_category_link}`}>Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoBannerSection;
