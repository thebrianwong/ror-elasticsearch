import Product from "../Product/Product";
import ProductSearchResultsProps from "./type";

const ProductSearchResults = ({ productsList }: ProductSearchResultsProps) => {
  return (
    <div className="flex flex-wrap justify-evenly gap-x-4 gap-y-8">
      {productsList.map((product) => {
        return (
          <Product key={product.name + product.description} product={product} />
        );
      })}
    </div>
  );
};

export default ProductSearchResults;
