import ProductProps from "./type";

const Product = ({ product }: ProductProps) => {
  return (
    <li>
      <div>{product.name}</div>
    </li>
  );
};

export default Product;
