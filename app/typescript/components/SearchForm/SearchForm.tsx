import { useState } from "react";
import SearchFormParams from "./type";

const SearchForm = ({ performSearch }: SearchFormParams) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form>
      <label htmlFor="product">Product: </label>
      <input
        type="search"
        name="product"
        id="product"
        value={searchValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchValue(e.target.value)
        }
      />
      <input
        type="submit"
        value="Search"
        onClick={(e) => {
          e.preventDefault();
          performSearch(searchValue);
        }}
      />
    </form>
  );
};

export default SearchForm;
