import React from 'react';
import { MapPin, Users, Square, Landmark } from 'lucide-react';

interface StateProps {
  state: {
    name: string;
    capital: string;
    population: string;
    area: string;
    attractions: string;
    imageUrl: string;
  };
}

const StateCard: React.FC<StateProps> = ({ state }) => {
  return (
    <div className="w-full bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden flex-shrink-0">
      <div className="relative h-48">
        <img
          src={state.imageUrl}
          alt={state.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">
          {state.name}
        </h3>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-purple-200">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{state.capital}</span>
        </div>
        <div className="flex items-center gap-2 text-purple-200">
          <Users className="w-4 h-4" />
          <span className="text-sm">{state.population}</span>
        </div>
        <div className="flex items-center gap-2 text-purple-200">
          <Square className="w-4 h-4" />
          <span className="text-sm">{state.area}</span>
        </div>
        <div className="flex items-center gap-2 text-purple-200">
          <Landmark className="w-4 h-4" />
          <span className="text-sm">{state.attractions}</span>
        </div>
      </div>
    </div>
  );
};

export default StateCard;