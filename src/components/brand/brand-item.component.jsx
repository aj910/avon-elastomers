const BrandItem = ({ brand }) => {
  return (
    <div className="item">
      <div className="brand-block">
        <img src={brand.logo} alt={brand.name} />
      </div>
    </div>
  );
};

export default BrandItem;
