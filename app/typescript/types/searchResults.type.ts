import ProductType from "./product.type";

type SearchResults = {
  currentPage: number;
  numOfPages: number;
  products: ProductType[];
};

export default SearchResults;
