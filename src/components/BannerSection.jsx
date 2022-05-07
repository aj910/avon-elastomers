import React from 'react';

const BannerSection = ({ banner }) => {
  return (
    <div className="container-fluid">
      <img src={banner ? banner : 'assets/images/banner-1.jpg'} alt="banner" />
    </div>
  );
};

export default BannerSection;
