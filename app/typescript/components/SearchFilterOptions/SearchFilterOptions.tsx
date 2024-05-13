import ActiveFilterOption from "../ActiveFilterOption/ActiveFilterOption";
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
    <div>
      <ActiveFilterOption updateFilterValue={updateActiveFilter} />
    </div>
  );
};

export default SearchFilterOptions;
