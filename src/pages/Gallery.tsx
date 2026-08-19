import GalleryGrid from "../components/GalleryGrid/GalleryGrid";

const Gallery = () => {
  return (
    <div className="text-background">
      <div style={{ padding: "20px" }}>
        <h1>Gallery</h1>
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
