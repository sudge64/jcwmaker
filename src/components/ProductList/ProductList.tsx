import { Product } from "../ProductLoader/ProductLoader";
import products from "../ProductLoader/ProductLoader";
import "./ProductList.css";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => (
  <div className="product-list-item">
    <div className="list-details">
      <p><b>{product.name}</b> - {product.price}.</p>
      <br/>
    </div>
  </div>
);

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
