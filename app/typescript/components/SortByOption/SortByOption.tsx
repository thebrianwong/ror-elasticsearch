import SortOptions from "../../types/sortOptions.type";
import SortByOptionProps from "./type";

const SortByOption = ({ updateSortField }: SortByOptionProps) => {
  return (
    <div>
      <label className="block mb-2" htmlFor="sort">
        Sort By
      </label>
      <select
        name="sort"
        id="sort"
        onChange={(e) => updateSortField(e.target.value as SortOptions)}
      >
        <option value="relevance">Relevance</option>
        <option value="name">Name</option>
        <option value="is_active">Sale Status</option>
        <option value="created">Created</option>
        <option value="in_stock">Amount In Stock</option>
        <option value="price">Price</option>
        <option value="sold">Amount Sold</option>
      </select>
    </div>
  );
};

export default SortByOption;
