import PaginationNavigationProps from "./type";

const PaginationNavigation = ({
  navigateToPage,
  searchValue,
  currentPage,
  totalPages,
}: PaginationNavigationProps) => {
  return (
    <div>
      {Array(totalPages)
        .fill(undefined)
        .map((_, index) => {
          return (
            <a
              href="/"
              key={index}
              onClick={(e) => {
                e.preventDefault();
                navigateToPage(searchValue, index + 1);
              }}
            >
              {index + 1}
            </a>
          );
        })}
    </div>
  );
};

export default PaginationNavigation;
