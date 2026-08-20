import { useState } from "react";
import "./ImageCarousel.css"

const ImageCarousel: React.FC<{ images: Image[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length == 0) return null;

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))
  };

  return (
    <div className="product-carousel">
      <div className="carousel-viewport">
        <img 
          src={images[currentIndex].url} 
          alt={images[currentIndex].alt} 
        />
      </div>

      {/* Only show controls if there is more than one image */}
      {images.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={prevSlide}>
            &#10094; {/* Left Arrow */}
          </button>
          <button className="carousel-button next" onClick={nextSlide}>
            &#10095; {/* Right Arrow */}
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
    </div>
  );
}

export default ImageCarousel
