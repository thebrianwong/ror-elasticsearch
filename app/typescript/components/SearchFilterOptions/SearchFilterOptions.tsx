import SearchFilterOptionsProps from "./type";

const SearchFilterOptions = ({
  updateActiveFilter,
  updateCreatedFilter,
  updateInStockFilter,
  updatePriceFilter,
  updateSoldFilter,
  updateSortField,
  updateSortOrder,
}: SearchFilterOptionsProps) => {
  return (
    <>
      <p>Active Products</p>
      <label htmlFor="active-true">For Sale</label>
      <input
        type="radio"
        name="is_active"
        id="active-true"
        value="true"
        onChange={(e) => updateActiveFilter(true)}
      />
      <label htmlFor="active-false">Not for Sale</label>
      <input
        type="radio"
        name="is_active"
        id="active-false"
        value="false"
        onChange={(e) => updateActiveFilter(false)}
      />
    </>
  );
};

export default SearchFilterOptions;
