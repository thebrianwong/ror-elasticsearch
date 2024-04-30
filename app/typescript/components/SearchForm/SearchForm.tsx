import { useState } from "react";
import SearchFormProps from "./type";

const SearchForm = ({ performSearch }: SearchFormProps) => {
  const [searchValue, setSearchValue] = useState("");

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
      <input
        className="bg-zinc-200 rounded border-zinc-500 border-2 focus:ring"
        type="submit"
        value="Search"
        onClick={(e) => {
          e.preventDefault();
          performSearch(searchValue, 1);
        }}
      />
    </form>
  );
};

export default SearchForm;
