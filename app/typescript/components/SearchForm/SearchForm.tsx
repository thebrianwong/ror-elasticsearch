import { useState } from "react";
import SearchFormProps from "./type";
import RangeFilter from "../../types/rangeFilter.type";
import SortOptions from "../../types/sortOptions.type";
import SearchFilterOptions from "../SearchFilterOptions/SearchFilterOptions";
import SortOrder from "../../types/sortOrder.type";
import SearchOptions from "../../types/searchOptions.type";

const SearchForm = ({ performSearch }: SearchFormProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [isActive, setIsActive] = useState<boolean | null>(null);
  const [createdRange, setCreatedRange] = useState<RangeFilter>({
    from: null,
    to: null,
  });
  const [inStockRange, setInStockRange] = useState<RangeFilter>({
    from: null,
    to: null,
  });
  const [priceRange, setPriceRange] = useState<RangeFilter>({
    from: null,
    to: null,
  });
  const [soldRange, setSoldRange] = useState<RangeFilter>({
    from: null,
    to: null,
  });
  const [sortBy, setSortBy] = useState<SortOptions>("relevance");
  const [orderBy, setOrderBy] = useState<SortOrder>("desc");

  return (
    <form className="flex flex-col gap-y-1.5 max-w-48">
      <label htmlFor="product" className="text-3xl">
        Product:{" "}
      </label>
      <input
        className="bg-neutral-200 border-black border-2 focus:ring outline-none p-1 rounded"
        type="search"
        name="product"
        id="product"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
      <SearchFilterOptions
        updateActiveFilter={setIsActive}
        updateCreatedFilter={setCreatedRange}
        updateInStockFilter={setInStockRange}
        updatePriceFilter={setPriceRange}
        updateSoldFilter={setSoldRange}
        updateSortField={setSortBy}
        updateSortOrder={setOrderBy}
      />
      <input
        className="bg-zinc-200 rounded border-zinc-500 border-2 focus:ring"
        type="submit"
        value="Search"
        onClick={(e) => {
          e.preventDefault();
          const searchOptions: SearchOptions = {
            is_active: isActive,
            created: createdRange,
            in_stock: inStockRange,
            price: priceRange,
            sold: soldRange,
            sort_by: sortBy,
            order: orderBy,
          };
          performSearch(searchValue, 1, searchOptions);
        }}
      />
    </form>
  );
};

export default SearchForm;
