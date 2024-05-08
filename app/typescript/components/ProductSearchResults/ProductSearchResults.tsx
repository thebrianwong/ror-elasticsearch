import Product from "../Product/Product";
import ProductSearchResultsProps from "./type";

const ProductSearchResults = ({ productsList }: ProductSearchResultsProps) => {
  return (
    <ul>
      {productsList.map((product) => {
        return (
          <Product key={product.name + product.description} product={product} />
        );
      })}
    </ul>
  );
};

export default ProductSearchResults;
