import RangeFilter from "../../types/rangeFilter.type";
import SortOptions from "../../types/sortOptions.type";

type SearchFilterOptionsProps = {
  updateActiveFilter: (value: boolean | null) => void;
  updateCreatedFilter: (value: RangeFilter) => void;
  updateInStockFilter: (value: RangeFilter) => void;
  updatePriceFilter: (value: RangeFilter) => void;
  updateSoldFilter: (value: RangeFilter) => void;
  updateSortField: (value: SortOptions) => void;
  updateSortOrder: (value: "desc" | "asc" | null) => void;
};

export default SearchFilterOptionsProps;
