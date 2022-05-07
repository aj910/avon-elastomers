const SidebarFilterCategoryItem = ({ category, categoryIds, setCategoryIds }) => {
  function setChecked(e) {
    let tempCategoryIds = [...categoryIds];
    if (e.target.checked) {
      tempCategoryIds.push(e.target.value);
    } else {
      tempCategoryIds = tempCategoryIds.filter((tempCategoryId) => tempCategoryId !== e.target.value);
    }
    setCategoryIds(tempCategoryIds);
  }
  return (
    <div className="form-group form-check customcheckbox">
      <input type="checkbox" className="form-check-input" id={category.slug} onChange={(e) => setChecked(e)} value={category.id} />
      <label className="form-check-label" htmlFor={category.slug}>
        {category.name}
        <span>({category.products_count})</span>
      </label>
    </div>
  );
};
export default SidebarFilterCategoryItem;
