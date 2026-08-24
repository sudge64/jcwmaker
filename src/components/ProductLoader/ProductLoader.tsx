import productData from "../../assets/products/product_list.json"

export interface Image {
  id: string;
  url: string;
  alt: string;
}

export interface Product {
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

export default products;
