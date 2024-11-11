// components/ui/Carousel.tsx
import React, { useState } from 'react';

export const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = React.Children.count(children);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg shadow-lg bg-gray-800">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div className="flex-shrink-0 w-full" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
      <CarouselPrevious onClick={previous} />
      <CarouselNext onClick={next} />
    </div>
  );
};

export const CarouselContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

export const CarouselItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="flex justify-center items-center h-full">{children}</div>;
};

export const CarouselNext: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
    >
      &#10095; {/* Right Arrow */}
    </button>
  );
};

export const CarouselPrevious: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full"
    >
      &#10094; {/* Left Arrow */}
    </button>
  );
};
