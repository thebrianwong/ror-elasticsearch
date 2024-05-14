import RangeFilter from "./rangeFilter.type";
import SortOptions from "./sortOptions.type";
import SortOrder from "./sortOrder.type";

type SearchOptions = {
  is_active: boolean | null;
  created: RangeFilter;
  in_stock: RangeFilter;
  price: RangeFilter;
  sold: RangeFilter;
  sort_by: SortOptions;
  order: SortOrder;
};

export default SearchOptions;
