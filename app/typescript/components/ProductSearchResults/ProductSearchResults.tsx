import ProductSearchResultsProps from "./type";

const ProductSearchResults = ({ productsList }: ProductSearchResultsProps) => {
  return (
    <ul>
      {productsList.map((product) => {
        return (
          <li key={product.name + product.description}>
            <div>{product.name}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductSearchResults;
