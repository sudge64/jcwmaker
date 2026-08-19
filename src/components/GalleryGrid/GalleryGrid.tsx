import "./GalleryGrid.css"
import logo from '../../assets/logo.png';

/*const HeroSection = () => {
  return (
      <div className="hero-section">
        <div className="hero-logo">
          <img src={logo} />
        </div>
      </div>
  );
};*/

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

interface ProductImagesProps {
  images: Image[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((img) => (
        <img
          key={img.id}
          src={img.url}
          alt={img.alt}
          className="w-full h-32 object-cover rounded-md"
        />
      ))}
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <ProductImages images={product.images} />
    </div>
  );
};

const products: Product[] = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    images: [
      { id: "1a", url: "https://via.placeholder.com/150", alt: "Front" },
      { id: "1b", url: "https://via.placeholder.com/150", alt: "Side" },
      { id: "1c", url: "https://via.placeholder.com/150", alt: "Back" },
    ],
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 199.99,
    images: [
      { id: "2a", url: "https://via.placeholder.com/150", alt: "Face" },
      { id: "2b", url: "https://via.placeholder.com/150", alt: "Band" },
    ],
  },
];

const GalleryGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default GalleryGrid;
