import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { Product } from "../ProductLoader/ProductLoader";
import products from "../ProductLoader/ProductLoader";
import "./GalleryGrid.css";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="product-card">
    <ImageCarousel images={product.images} />
    <div className="card-details">
      <h3>{product.name}</h3>
    </div>
  </div>
);

const GalleryGrid: React.FC = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default GalleryGrid;
