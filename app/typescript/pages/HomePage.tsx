import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../types/searchResults.type";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<SearchResults | null>(
    null
  );

  const getSearchResults = (searchParam: string) => {};

  return (
    <>
      <h1>ElasticSearch - Search for Products</h1>
      <SearchForm />
    </>
  );
};

export default HomePage;
