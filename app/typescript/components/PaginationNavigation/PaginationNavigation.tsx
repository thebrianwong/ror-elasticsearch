import PaginationNavigationProps from "./type";

const PaginationNavigation = ({
  navigateToPage,
  searchValue,
  currentPage,
  totalPages,
}: PaginationNavigationProps) => {
  return (
    <nav className="flex mb-4">
      {currentPage > 1 && (
        <a
          className="mx-2 text-blue-500 hover:text-blue-800"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigateToPage(searchValue, currentPage - 1);
          }}
        >
          {"<"}
        </a>
      )}
      {Array(totalPages)
        .fill(undefined)
        .map((_, index) => {
          if (currentPage === index + 1) {
            return (
              <span className="mx-2 font-bold" key={index}>
                {index + 1}
              </span>
            );
          } else {
            return (
              <a
                className="mx-2 text-blue-500 underline hover:text-blue-800"
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
          }
        })}
      {currentPage < totalPages && (
        <a
          className="mx-2 text-blue-500 hover:text-blue-800"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigateToPage(searchValue, currentPage + 1);
          }}
        >
          {">"}
        </a>
      )}
    </nav>
  );
};

export default PaginationNavigation;
