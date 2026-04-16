import { useState, useContext, useEffect } from 'react';
import { Star, MapPin, Wifi, Utensils, Mountain, Car, Coffee, Building, Phone } from 'lucide-react';
import { CallbackContext } from '../components/Layout';
import { getHotels } from '../services/api';
import WhatsAppCTA from '../components/WhatsAppCTA';

type Hotel = {
  name: string;
  location: string;
  image: string;
  rating: number;
  amenities: string[];
  type: string;
  desc: string;
};

export default function HotelsPage() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [filter, setFilter] = useState('All');
  const [hotels, setHotels] = useState<Hotel[]>([]);

  useEffect(() => {
    getHotels().then((data: any) => {
      const normalized = (data || []).map((hotel: any) => ({
        name: hotel.name,
        location: hotel.location,
        image: hotel.image,
        rating: typeof hotel.rating === 'string' ? parseFloat(hotel.rating) : hotel.rating,
        amenities: hotel.amenities || [],
        type: hotel.type || (hotel.price && hotel.price > 10000 ? 'Luxury' : 'Premium'),
        desc:
          hotel.desc ||
          `Enjoy a stay at ${hotel.name} with ${hotel.amenities?.slice(0, 2).join(', ') || 'modern comforts'}.`,
      }));
      setHotels(normalized);
    });
  }, []);

  const filteredHotels = hotels.filter(hotel => {
    const matchesType = filter === 'All' || hotel.type === filter;
    return matchesType;
  });

  const hotelTypes = ['All', ...new Set(hotels.map(hotel => hotel.type))];

  return (
    <div className="min-h-screen bg-bg-primary text-white relative overflow-hidden selection:bg-accent selection:text-bg-primary">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none z-0" />
      
      <main className="relative z-10 pt-24 pb-16 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 reveal">
            <span className="section-label mb-4">// HOSPITALITY</span>
            <h1 className="heading-xl text-white mb-6">
              PREMIUM <span className="text-accent italic">STAYS</span>
            </h1>
            <p className="max-w-xl text-text-secondary font-mono text-sm uppercase tracking-wider leading-relaxed">
              High-performance accommodations designed for maximum comfort and immersion in the Kashmir Valley.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 reveal">
            <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.3em] mb-4 block">Filter by Tier //</span>
            <div className="flex flex-wrap gap-3">
              {hotelTypes.map(type => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-6 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest transition-all ${
                    filter === type
                      ? 'bg-accent text-bg-primary border border-accent'
                      : 'bg-bg-tertiary text-text-secondary border border-border hover:border-accent/40'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <div
                key={hotel.name}
                className="group relative bg-bg-tertiary border border-border transition-all duration-500 hover:border-accent card-hover reveal"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary via-transparent to-transparent" />

                  {/* Rating badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-border px-2 py-1 font-mono text-[10px] text-accent">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span>{hotel.rating}</span>
                  </div>

                  {/* Type tag */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent px-3 py-1 font-mono text-[9px] font-bold text-bg-primary uppercase tracking-[0.2em]">
                      {hotel.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-accent transition-colors">
                        {hotel.name}
                      </h3>
                      <div className="flex items-center gap-2 text-text-tertiary font-mono text-[10px] uppercase tracking-widest">
                        <MapPin className="h-3.5 w-3.5 text-accent" />
                        <span>{hotel.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed mb-8 h-12 line-clamp-2">
                    {hotel.desc}
                  </p>

                  {/* Amenities */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {hotel.amenities.map(amenity => (
                      <span
                        key={amenity}
                        className="flex items-center gap-1.5 border border-border bg-bg-primary px-2.5 py-1 font-mono text-[9px] text-text-tertiary uppercase tracking-widest"
                      >
                        {amenity === 'Wifi' && <Wifi className="h-2.5 w-2.5" />}
                        {amenity === 'Restaurant' && <Utensils className="h-2.5 w-2.5" />}
                        {amenity === 'Ski Access' && <Mountain className="h-2.5 w-2.5" />}
                        {amenity === 'Car Parking' && <Car className="h-2.5 w-2.5" />}
                        {amenity === 'Coffee Shop' && <Coffee className="h-2.5 w-2.5" />}
                        {amenity === 'Luxury' && <Sparkles className="h-2.5 w-2.5" />}
                        {!['Wifi', 'Restaurant', 'Ski Access', 'Car Parking', 'Coffee Shop', 'Luxury'].includes(amenity) && <Building className="h-2.5 w-2.5" />}
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRequestCallback(`${hotel.name} Booking`);
                    }}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-3 transition-all"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Enquire Availability</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredHotels.length === 0 && (
            <div className="text-center py-24 reveal">
              <h3 className="text-xl font-mono text-text-tertiary uppercase tracking-widest">No properties match your current filters //</h3>
              <button 
                onClick={() => setFilter('All')} 
                className="mt-8 text-accent font-mono text-xs uppercase tracking-[0.3em] hover:underline"
              >
                Reset Exploration Hub
              </button>
            </div>
          )}

          {/* WhatsApp CTA */}
          <div className="mt-24 reveal">
            <WhatsAppCTA message="Latest Hotels & Best Deals" section="hotels" />
          </div>
        </div>
      </main>
    </div>
  );
}
