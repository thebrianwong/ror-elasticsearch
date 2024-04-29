import { useState } from "react";
import SearchForm from "../components/SearchForm/SearchForm";
import ProductType from "../types/product.type";

const HomePage = () => {
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);

  return (
    <>
      <h1>ElasticSearch - Search for Products</h1>
      <SearchForm />
    </>
  );
};

export default HomePage;
