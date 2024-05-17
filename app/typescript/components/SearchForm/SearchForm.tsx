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
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);

  return (
    <form className="flex flex-col gap-y-1.5 items-center">
      <label htmlFor="product" className="text-3xl">
        Product:{" "}
      </label>
      <input
        className="bg-neutral-200 border-black border-2 focus:ring outline-none p-1 rounded max-w-48 placeholder:text-slate-500"
        type="search"
        name="product"
        id="product"
        placeholder="Bread"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
      <div className="flex justify-center items-center gap-x-2">
        <p className="text-2xl">Filter By</p>
        <button
					type="button"
          className="self-center bg-zinc-100 hover:bg-zinc-300 h-6 w-6 rounded-3xl"
          onClick={(e) => {
            e.preventDefault();
            setOpenFilterDrawer(!openFilterDrawer);
          }}
        >
          v
        </button>
      </div>
      {openFilterDrawer && (
        <SearchFilterOptions
          updateActiveFilter={setIsActive}
          updateCreatedFilter={setCreatedRange}
          updateInStockFilter={setInStockRange}
          updatePriceFilter={setPriceRange}
          updateSoldFilter={setSoldRange}
          updateSortField={setSortBy}
          updateSortOrder={setOrderBy}
        />
      )}
      <input
        className="bg-zinc-200 rounded border-zinc-500 border-2 py-1 px-2 focus:ring"
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
