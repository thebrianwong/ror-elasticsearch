import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../types/searchResults.type";
import ProductType from "../types/product.type";
import ProductSearchResults from "../components/ProductSearchResults/ProductSearchResults";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [previousSearch, setPreviousSearch] = useState<string | null>(null);

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
    setPreviousSearch(searchParam);
  };

  return (
    <>
      <h1>ElasticSearch - Search for Products</h1>
      <SearchForm performSearch={getSearchResults} />
      {totalPages === 0 && previousSearch && (
        <p>There doesn't seem to be anything related to {previousSearch}...</p>
      )}
      {searchResults.length > 0 && (
        <ProductSearchResults productsList={searchResults} />
      )}
    </>
  );
};

export default HomePage;
