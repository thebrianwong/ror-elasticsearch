import { useRef, useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../types/searchResults.type";
import ProductType from "../types/product.type";
import ProductSearchResults from "../components/ProductSearchResults/ProductSearchResults";
import PaginationNavigation from "../components/PaginationNavigation/PaginationNavigation";
import BackToTopButton from "../components/BackToTopButton/BackToTopButton";
import SearchOptions from "../types/searchOptions.type";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [searchedValue, setSearchedValue] = useState<string | null>(null);
  const [currentSearchOptions, setCurrentSearchOptions] =
    useState<SearchOptions | null>(null);
  const pageTopRef = useRef<HTMLDivElement>(null);

  const buildURLSearchParams = (
    searchParam: string,
    pageNumber: number,
    searchOptions: SearchOptions
  ) => {
    const params = new URLSearchParams({
      search_value: searchParam,
      page: String(pageNumber),
    });

    if (searchOptions.is_active !== null) {
      params.append("is_active", String(searchOptions.is_active));
    }
    if (searchOptions.created.from !== null) {
      params.append("created_from", String(searchOptions.created.from));
    }
    if (searchOptions.created.to !== null) {
      params.append("created_to", String(searchOptions.created.to));
    }
    if (searchOptions.in_stock.from !== null) {
      params.append("in_stock_from", String(searchOptions.in_stock.from));
    }
    if (searchOptions.in_stock.to !== null) {
      params.append("in_stock_to", String(searchOptions.in_stock.to));
    }
    if (searchOptions.price.from !== null) {
      params.append("price_from", String(searchOptions.price.from));
    }
    if (searchOptions.price.to !== null) {
      params.append("price_to", String(searchOptions.price.to));
    }
    if (searchOptions.sold.from !== null) {
      params.append("sold_from", String(searchOptions.sold.from));
    }
    if (searchOptions.sold.to !== null) {
      params.append("sold_to", String(searchOptions.sold.to));
    }
    if (searchOptions.sort_by !== "relevance") {
      params.append("sort_by", searchOptions.sort_by);
    }
    if (searchOptions.order === "asc") {
      params.append("order", "asc");
    }
    return params;
  };

  const getSearchResults = async (
    searchParam: string,
    pageNumber: number,
    searchOptions: SearchOptions
  ) => {
    const params = buildURLSearchParams(searchParam, pageNumber, searchOptions);
    const rawResults = await fetch(`/api/v1/products/index?${params}`);
    const apiResults: SearchResults = await rawResults.json();
    setSearchResults(apiResults.products);
    setCurrentPage(apiResults.currentPage);
    setTotalPages(apiResults.numOfPages);
    setSearchedValue(searchParam);
    setCurrentSearchOptions(searchOptions);
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
          currentSearchOptions &&
          currentPage !== null &&
          totalPages !== null &&
          totalPages > 0 && (
            <PaginationNavigation
              navigateToPage={getSearchResults}
              searchValue={searchedValue}
              currentPage={currentPage}
              totalPages={totalPages}
              searchOptions={currentSearchOptions}
            />
          )}
        <BackToTopButton elementRef={pageTopRef} />
      </div>
    </main>
  );
};

export default HomePage;
