import SearchOptions from "../../types/searchOptions.type";

type SearchFormProps = {
  performSearch: (
    searchParam: string,
    pageNumber: number,
    searchOptions: SearchOptions
  ) => void;
};

export default SearchFormProps;
