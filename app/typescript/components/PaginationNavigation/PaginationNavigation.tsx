import PaginationNavigationProps from "./type";

const PaginationNavigation = ({
  navigateToPage,
  searchValue,
  currentPage,
  totalPages,
  searchOptions,
}: PaginationNavigationProps) => {
  const NUM_OF_PAGE_INDICATORS = 5;
  const NUM_OF_NAV_LINKS_ON_EACH_SIDE = 2;

  return (
    <nav className="flex mb-4">
      {currentPage > 1 && (
        <>
          <a
            className="mx-1.5 text-blue-500 hover:text-blue-800"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage(searchValue, 1, searchOptions);
            }}
          >
            {"<<"}
          </a>
          <a
            className="mx-1.5 text-blue-500 hover:text-blue-800"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage(searchValue, currentPage - 1, searchOptions);
            }}
          >
            {"<"}
          </a>
        </>
      )}
      {currentPage - NUM_OF_NAV_LINKS_ON_EACH_SIDE > 1 && (
        <a
          className="mx-1.5 text-blue-500 hover:text-blue-800"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage - NUM_OF_PAGE_INDICATORS >= 1) {
              navigateToPage(
                searchValue,
                currentPage - NUM_OF_PAGE_INDICATORS,
                searchOptions
              );
            } else {
              navigateToPage(searchValue, 1, searchOptions);
            }
          }}
        >
          ...
        </a>
      )}
      {[
        currentPage - 2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage + 2,
      ].map((pageNum) => {
        if (pageNum >= 1 && pageNum <= totalPages) {
          if (currentPage === pageNum) {
            return (
              <span className="mx-1.5 font-bold" key={pageNum}>
                {pageNum}
              </span>
            );
          } else {
            return (
              <a
                className="mx-1.5 text-blue-500 underline hover:text-blue-800"
                href="/"
                key={pageNum}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPage(searchValue, pageNum, searchOptions);
                }}
              >
                {pageNum}
              </a>
            );
          }
        }
      })}
      {currentPage + NUM_OF_NAV_LINKS_ON_EACH_SIDE < totalPages && (
        <a
          className="mx-1.5 text-blue-500 hover:text-blue-800"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (currentPage + NUM_OF_PAGE_INDICATORS <= totalPages) {
              navigateToPage(
                searchValue,
                currentPage + NUM_OF_PAGE_INDICATORS,
                searchOptions
              );
            } else {
              navigateToPage(searchValue, totalPages, searchOptions);
            }
          }}
        >
          ...
        </a>
      )}
      {currentPage < totalPages && (
        <>
          <a
            className="mx-1.5 text-blue-500 hover:text-blue-800"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage(searchValue, currentPage + 1, searchOptions);
            }}
          >
            {">"}
          </a>
          <a
            className="mx-1.5 text-blue-500 hover:text-blue-800"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToPage(searchValue, totalPages, searchOptions);
            }}
          >
            {">>"}
          </a>
        </>
      )}
    </nav>
  );
};

export default PaginationNavigation;
