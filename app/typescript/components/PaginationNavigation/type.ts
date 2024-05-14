import SearchOptions from "../../types/searchOptions.type";

type PaginationNavigationProps = {
  navigateToPage: (
    searchParam: string,
    pageNumber: number,
    searchOptions: SearchOptions
  ) => void;
  searchValue: string;
  currentPage: number;
  totalPages: number;
  searchOptions: SearchOptions;
};

export default PaginationNavigationProps;
