import ActiveFilterOption from "../ActiveFilterOption/ActiveFilterOption";
import DateFilterOption from "../DateFilterOption/DateFilterOption";
import NumberFilterOption from "../NumberFilterOption/NumberFilterOption";
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
      <DateFilterOption
        label="Created"
        metaLabel="created"
        updateFilterValue={updateCreatedFilter}
      />
      <NumberFilterOption
        label="In Stock"
        metaLabel="in_stock"
        updateFilterValue={updateInStockFilter}
      />
      <NumberFilterOption
        label="Price Range"
        metaLabel="price"
        updateFilterValue={updatePriceFilter}
      />
      <NumberFilterOption
        label="Amount Sold"
        metaLabel="sold"
        updateFilterValue={updateSoldFilter}
      />
    </div>
  );
};

export default SearchFilterOptions;
