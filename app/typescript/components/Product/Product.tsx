import ProductProps from "./type";

const Product = ({ product }: ProductProps) => {
  return (
    <li>
      <div>
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="font-thin italic">{product.created.toString()}</p>
        <p>{product.in_stock}</p>
        <p>{product.is_active.toString()}</p>
        <p>{product.price}</p>
        <p>{product.sold}</p>
        <p>{product.description}</p>
      </div>
    </li>
  );
};

export default Product;
