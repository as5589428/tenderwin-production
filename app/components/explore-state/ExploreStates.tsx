import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import StateCard from './StateCards';
// import './index.css';
// import '../../styles/global.css'; 
const states = [
  {
    name: 'Maharashtra',
    capital: 'Mumbai',
    population: '90K Tenders',
    area: '307,713 km²',
    attractions: 'Gateway of India',
    imageUrl: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f',
  },
  {
    name: 'Madhya Pradesh',
    capital: 'Bhopal',
    population: '70K Tenders',
    area: '308,252 km²',
    attractions: 'Khajuraho Temples',
    imageUrl: 'https://holxo-web-s3.s3.amazonaws.com/media/blogs/coverimages/post_cvimg_1588840398_4414854__Sanchi_Stupa.jpg',
  },
  {
    name: 'Chhattisgarh',
    capital: 'Raipur',
    population: '56K Tenders',
    area: '135,191 km²',
    attractions: 'Chitrakote Falls',
    imageUrl: 'https://mediaim.expedia.com/destination/1/94b5d0a96720188ea177d717e6a60e45.jpg',
  },
  {
    name: 'Andhra Pradesh',
    capital: 'Amaravati',
    population: '49.5M',
    area: '89K Tenders²',
    attractions: 'Tirupati Temple',
    imageUrl: 'https://shop.youtellme.ai/cdn/shop/products/Buddhastatue1_Vijaywada_DJI_0150Edited.jpg?v=1674038538',
  },
  {
    name: 'Tamil Nadu',
    capital: 'Chennai',
    population: '88k Tenders',
    area: '130,058 km²',
    attractions: 'Meenakshi Temple',
    imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220',
  },
  {
    name: 'Telangana',
    capital: 'Hyderabad',
    population: '40K Tenders',
    area: '112,077 km²',
    attractions: 'Charminar',
    imageUrl: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/07/Hyderabad-feature.jpg',
  },
  {
    name: 'Tripura',
    capital: 'Agartala',
    population: '34K Tenders',
    area: '10,486 km²',
    attractions: 'Ujjayanta Palace',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Tripura_State_Museum_Agartala_Tripura_India.jpg',
  },
  {
    name: 'Uttar Pradesh',
    capital: 'Lucknow',
    population: "46K Tenders",
    area: '243,290 km²',
    attractions: 'Taj Mahal',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
  },
  {
    name: 'Uttarakhand',
    capital: 'Dehradun',
    population: '60K Tenders',
    area: '53,483 km²',
    attractions: 'Valley of Flowers',
    imageUrl: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23',
  },
  {
    name: 'West Bengal',
    capital: 'Kolkata',
    population: '12K Tenders',
    area: '88,752 km²',
    attractions: 'Victoria Memorial',
    imageUrl: 'https://images.unsplash.com/photo-1558431382-27e303142255',
  },
];

const ExploreStates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;
  const maxIndex = states.length - itemsPerView;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-rose-300 text-center mb-2">
          Discover Tenders By States
        </h1>
      
        <p className="text-lg text-center text-purple-200/80 mb-12">
          Explore the rich diversity and cultural heritage
        </p>
        
        <div className="relative">
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all z-10
              ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="overflow-hidden mx-4">
            <div 
              className="flex gap-6 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {states.map((state) => (
                <div key={state.name} className="w-[calc(25%-18px)] flex-shrink-0">
                  <StateCard state={state} />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className={`absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white transition-all z-10
              ${currentIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/20'}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all ${
                currentIndex === index 
                  ? 'w-8 bg-white' 
                  : 'w-2 bg-white/30'
              } h-2 rounded-full`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreStates;