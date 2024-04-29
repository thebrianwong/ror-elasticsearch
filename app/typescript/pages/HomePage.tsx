import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../types/searchResults.type";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<SearchResults | null>(
    null
  );

  const getSearchResults = async (searchParam: string) => {
    const rawResults = await fetch(
      "/api/v1/products/index?" +
        new URLSearchParams({
          search_param: searchParam,
          page: "1", // placeholder
        })
    );
    const apiResults = await rawResults.json();
    setSearchResults(apiResults);
  };

  return (
    <>
      <h1>ElasticSearch - Search for Products</h1>
      <SearchForm performSearch={getSearchResults} />
    </>
  );
};

export default HomePage;
