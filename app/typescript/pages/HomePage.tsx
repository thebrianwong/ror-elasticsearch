import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../types/searchResults.type";
import ProductType from "../types/product.type";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState<number | null>(null);
  const [totalPages, setTotalPages] = useState<number | null>(null);

  const getSearchResults = async (searchParam: string) => {
    const rawResults = await fetch(
      "/api/v1/products/index?" +
        new URLSearchParams({
          search_param: searchParam,
          page: "1", // placeholder
        })
    );
    const apiResults: SearchResults = await rawResults.json();
    setSearchResults(apiResults.products);
    setCurrentPage(apiResults.currentPage);
    setTotalPages(apiResults.numOfPages);
  };

  return (
    <>
      <h1>ElasticSearch - Search for Products</h1>
      <SearchForm performSearch={getSearchResults} />
    </>
  );
};

export default HomePage;
