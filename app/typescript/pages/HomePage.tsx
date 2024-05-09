import { useRef, useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../types/searchResults.type";
import ProductType from "../types/product.type";
import ProductSearchResults from "../components/ProductSearchResults/ProductSearchResults";
import PaginationNavigation from "../components/PaginationNavigation/PaginationNavigation";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [searchedValue, setSearchedValue] = useState<string | null>(null);
  const pageTopRef = useRef<HTMLDivElement>(null);

  const getSearchResults = async (searchParam: string, pageNumber: number) => {
    const rawResults = await fetch(
      "/api/v1/products/index?" +
        new URLSearchParams({
          search_param: searchParam,
          page: String(pageNumber),
        })
    );
    const apiResults: SearchResults = await rawResults.json();
    setSearchResults(apiResults.products);
    setCurrentPage(apiResults.currentPage);
    setTotalPages(apiResults.numOfPages);
    setSearchedValue(searchParam);
    console.log(apiResults);
  };

  return (
    <main className="min-h-screen h-full bg-gradient-to-r from-sky-200 via-cyan-100 to-sky-200">
      <div
        className="container mx-auto text-center flex flex-col items-center gap-y-8 relative"
        ref={pageTopRef}
      >
        <h1 className="text-5xl font-extrabold my-4">
          ElasticSearch - Search for Products
        </h1>
        <SearchForm performSearch={getSearchResults} />
        {totalPages === 0 && searchedValue && (
          <p>There doesn't seem to be anything related to {searchedValue}...</p>
        )}
        {searchResults.length > 0 && (
          <ProductSearchResults productsList={searchResults} />
        )}
        {searchedValue &&
          currentPage !== null &&
          totalPages !== null &&
          totalPages > 0 && (
            <PaginationNavigation
              navigateToPage={getSearchResults}
              searchValue={searchedValue}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        <BackToTopButton elementRef={pageTopRef} />
      </div>
    </main>
  );
};

export default HomePage;
