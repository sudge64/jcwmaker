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
);

const products: Product[] = [
  {
    id: "1",
    name: "Belt",
    price: 99.99,
    images: ["belt_front"].map((name, index) => ({
      id: `${name}-${index}`,
      url: imageMap[name] || '/placeholder.jpg',
      alt: name
    }))
  },
  {
    id: "2",
    name: "Bible Cover",
    price: 199.99,
    images: ["Bible_cover_front", "Bible_cover_back"].map((name, index) => ({
      id: `${name}-${index}`,
      url: imageMap[name] || '/placeholder.jpg',
      alt: name
    }))
  },
  {
    id: "3",
    name: "Dop Bag",
    price: 99.99,
    images: ["dop_bag_front"].map((name, index) => ({
      id: `${name}-${index}`,
      url: imageMap[name] || '/placeholder.jpg',
      alt: name
    }))
  },
  {
    id: "4",
    name: "Tooled Belt",
    price: 99.99,
    images: ["tooled_belt_front"].map((name, index) => ({
      id: `${name}-${index}`,
      url: imageMap[name] || '/placeholder.jpg',
      alt: name
    }))
  },
  {
    id: "5",
    name: "Custom Tooled Belt",
    price: 99.99,
    images: ["tooled_belt_custom_front"].map((name, index) => ({
      id: `${name}-${index}`,
      url: imageMap[name] || '/placeholder.jpg',
      alt: name
    }))
  },
  {
    id: "6",
    name: "Custom Graduation Cap",
    price: 99.99,
    images: ["tooled_grad_cap_front"].map((name, index) => ({
      id: `${name}-${index}`,
      url: imageMap[name] || '/placeholder.jpg',
      alt: name
    }))
  },
];

const ProductImages: React.FC<{ images: Image[] }> = ({ images }) => (
  <div className="product-images">
    {images.map((img) => (
      <img key={img.id} src={img.url} alt={img.alt} />
    ))}
  </div>
);

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="product-card">
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <ProductImages images={product.images} />
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
