import { Link } from "react-router-dom";
import productData from "./product_list.json"
import "./GalleryGrid.css"

interface Image {
  id: string;
  url: string;
  alt: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  images: Image[];
}

const productImages = import.meta.glob("../../assets/products/*.{jpeg, jpg, png, webp, heic}", {
    eager: true,
    query: '?url',
    import: 'default'
});

const imageMap = Object.fromEntries(
    Object.entries(productImages).map(([path, url]) => {
    const filename = path.split('/').pop()?.replace(/\.(jpeg|jpg|png|webp)$/, '') || '';
    return [filename, url]; 
  })
) as Record<string, string>;

const products: Product[] = productData.map((item: any) => ({
  id: item.id,
  name: item.name,
  price: item.price,
  images: item.images.map((name: string, index: number) => ({
    id: `${item.id}-${name}-${index}`,
    url: imageMap[name] || '/placeholder.jpg',
    alt: name
  })).filter((img: Image) => img.url !== '/placeholder.jpg')
}));

const ProductImages: React.FC<{ images: Image[] }> = ({ images }) => (
  <div className="product-images">
    {images.map((img) => (
      <img key={img.id} src={img.url} alt={img.alt} />
    ))}
  </div>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="product-card">
    <ProductImages images={product.images} />
    <h3>{product.name}</h3>
    <p>Starting at ${product.price}</p>
    <Link to="/contact" className="contact-button">
      Contact Me
    </Link>
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
