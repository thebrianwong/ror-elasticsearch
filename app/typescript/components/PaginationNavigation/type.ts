type PaginationNavigationProps = {
  navigateToPage: (searchParam: string, pageNumber: number) => void;
  searchValue: string;
  currentPage: number;
  totalPages: number;
};

export default PaginationNavigationProps;
