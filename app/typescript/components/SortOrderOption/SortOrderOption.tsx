import SortOrderOptionProps from "./type";

const SortOrderOption = ({ updateSortOrder }: SortOrderOptionProps) => {
  return (
    <>
      <p>Order By</p>
      <label htmlFor="order-desc">Descending</label>
      <input
        type="radio"
        name="sort-order"
        id="order-desc"
        defaultChecked={true}
        onChange={(e) => updateSortOrder("desc")}
      />
      <label htmlFor="order-asc">Ascending</label>
      <input
        type="radio"
        name="sort-order"
        id="order-asc"
        onChange={(e) => updateSortOrder("asc")}
      />
    </>
  );
};

export default SortOrderOption;
