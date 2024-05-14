import SortOrderOptionProps from "./type";

const SortOrderOption = ({ updateSortOrder }: SortOrderOptionProps) => {
  return (
    <div className="flex flex-col items-center">
      <p className="mb-2">Order By</p>
      <div className="flex gap-x-2">
        <div>
          <label className="mr-1" htmlFor="order-desc">
            Descending
          </label>
          <input
            type="radio"
            name="sort-order"
            id="order-desc"
            defaultChecked={true}
            onChange={(e) => updateSortOrder("desc")}
          />
        </div>
        <div>
          <label className="mr-1" htmlFor="order-asc">
            Ascending
          </label>
          <input
            type="radio"
            name="sort-order"
            id="order-asc"
            onChange={(e) => updateSortOrder("asc")}
          />
        </div>
      </div>
    </div>
  );
};

export default SortOrderOption;
