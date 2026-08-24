import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { Product } from "../ProductLoader/ProductLoader";
import products from "../ProductLoader/ProductLoader";
import "./GalleryGrid.css";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="product-card">
    <ImageCarousel images={product.images} title={product.name} />
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
