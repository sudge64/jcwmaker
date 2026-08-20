import { useState } from "react";
import "./ImageCarousel.css"

const ImageCarousel: React.FC<{ images: Image[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // State for Full Screen Modal
  const [isFullScreen, setIsFullScreen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openFullScreen = () => setIsFullScreen(true);
  const closeFullScreen = () => setIsFullScreen(false);

  if (!images || images.length === 0) return null;

  return (
    <div className="product-carousel">
      <div className="carousel-viewport">
        <img 
          src={images[currentIndex].url} 
          alt={images[currentIndex].alt} 
          className="carousel-image zoom-cursor"
          onClick={openFullScreen}
        />
      </div>

      {/* Carousel Controls (Hidden if only 1 image) */}
      {images.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-button next" onClick={nextSlide}>
            &#10095;
          </button>
          <div className="carousel-dots">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Full Screen Modal Overlay */}
      {isFullScreen && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <button 
            className="fullscreen-close-btn" 
            onClick={(e) => {
              e.stopPropagation(); // Prevent click from bubbling to overlay
              closeFullScreen();
            }}
            aria-label="Close full screen"
          >
            ×
          </button>
          
          <div className="fullscreen-img-wrapper">
            <img 
              src={images[currentIndex].url} 
              alt={images[currentIndex].alt} 
              className="fullscreen-img" 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel
