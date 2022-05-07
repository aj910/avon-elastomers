const GalleryItem = ({ gallery }) => {
  return (
    <div className="col-md-3" key={gallery.id}>
      <div className="gallery-block">
        <a href={gallery.image} data-lightbox="example-set">
          <img src={gallery.image} alt={gallery.name} />
        </a>
      </div>
    </div>
  );
};

export default GalleryItem;
