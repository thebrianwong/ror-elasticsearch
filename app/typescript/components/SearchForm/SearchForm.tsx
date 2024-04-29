import { useState } from "react";

const SearchForm = () => {
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
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchForm;
