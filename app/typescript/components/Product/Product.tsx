import ProductProps from "./type";

const Product = ({ product }: ProductProps) => {
  return (
    <div className="max-w-80 border-solid border-zinc-400 border-2 rounded-lg p-4 bg-amber-200 grid grid-cols-3">
      <div className="text-left divide-y divide-gray-900">
        <div className="my-2">
          <h2 className="text-lg font-semibold leading-none">{product.name}</h2>
          <p className="font-thin italic">{product.created.toString()}</p>
        </div>
        <div>
          <p>In Stock: {product.in_stock}</p>
          <p>{product.is_active ? "For Sale" : "Not for Sale"}</p>
          <p>Price: ${product.price}</p>
          <p>Sold: {product.sold}</p>
        </div>
      </div>
      <p className="col-span-2 text-xl max-h-48 overflow-auto text-left">
        {product.description}
      </p>
    </div>
  );
};

export default Product;
