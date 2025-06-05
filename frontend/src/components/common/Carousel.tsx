import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode[];
  // CAMBIAR EL TIPO DE itemsToShow
  itemsToShow?: {
    base: number;
    sm: number;
    md: number;
    lg: number;
  };
  autoplay?: boolean;
  autoplayInterval?: number;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  // Mantener el valor por defecto como el objeto
  itemsToShow = { base: 1, sm: 2, md: 3, lg: 4 }, 
  autoplay = false,
  autoplayInterval = 5000,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const [visibleItems, setVisibleItems] = useState(itemsToShow.base);
  const carouselRef = useRef<HTMLDivElement>(null);

  const updateVisibleItems = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleItems(itemsToShow.base);
    } else if (width < 768) {
      setVisibleItems(itemsToShow.sm);
    } else if (width < 1024) {
      setVisibleItems(itemsToShow.md);
    } else {
      setVisibleItems(itemsToShow.lg);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoplay, autoplayInterval, visibleItems]);

  useEffect(() => {
    const itemWidth = carouselRef.current?.clientWidth 
      ? carouselRef.current.clientWidth / visibleItems 
      : 0;
    setTranslateValue(-currentIndex * itemWidth);
  }, [currentIndex, visibleItems]);

  const totalSlides = children.length;
  const maxIndex = Math.max(0, totalSlides - visibleItems);

  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={carouselRef} 
        className="overflow-hidden"
      >
        <div 
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${translateValue}px)` }}
        >
          {children.map((child, index) => (
            <div 
              key={index} 
              className="flex-none" 
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div className="p-2">
                {child}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-r-md hover:bg-opacity-70 transition-opacity z-10"
        onClick={prevSlide}
        aria-label="Previous"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-l-md hover:bg-opacity-70 transition-opacity z-10"
        onClick={nextSlide}
        aria-label="Next"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;