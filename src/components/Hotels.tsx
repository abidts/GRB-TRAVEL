import { useContext } from 'react';
import { Star, MapPin, Wifi, Utensils, Mountain, Car, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CallbackContext } from './Layout';

const featuredHotels = [
  {
    name: 'The LaLiT Grand Palace Srinagar',
    location: 'Srinagar',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771580269/Hotel_The_Lalit_Grand_Palace_Srinagar_Kashmir_g5mulq.jpg',
    rating: 4.9,
    amenities: ['Wifi', 'Restaurant', 'Spa', 'Pool'],
    type: 'Luxury',
  },
  {
    name: 'The Khyber Himalayan Resort & Spa',
    location: 'Gulmarg',
    image: 'https://images.unsplash.com/photo-1486944670663-e0a2ea5018eb?auto=format&fit=crop&w=800&q=80',
    rating: 4.9,
    amenities: ['Ski Access', 'Restaurant', 'Spa', 'Bar'],
    type: 'Luxury',
  },
  {
    name: 'Radisson Collection Hotel & Spa, Riverfront Srinagar',
    location: 'Srinagar',
    image: 'https://images.unsplash.com/photo-1758448756167-88dc934c58e4?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    amenities: ['Wifi', 'Restaurant', 'Spa', 'River View'],
    type: 'Luxury',
  },
];

export default function Hotels({ showViewAll = true }: { showViewAll?: boolean }) {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case 'Wifi':
        return <Wifi className="h-3 w-3" />;
      case 'Restaurant':
        return <Utensils className="h-3 w-3" />;
      case 'Ski Access':
        return <Mountain className="h-3 w-3" />;
      case 'Car Parking':
        return <Car className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredHotels.map((hotel) => (
          <div
            key={hotel.name}
            className="group relative bg-bg-tertiary border border-border transition-all duration-300 hover:border-accent card-hover"
          >
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary via-bg-tertiary/20 to-transparent" />

              {/* Rating badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 backdrop-blur-md border border-border px-2 py-1">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <span className="font-mono text-xs text-white">{hotel.rating}</span>
              </div>

              {/* Type tag */}
              <div className="absolute top-4 left-4 bg-accent/90 px-3 py-1 font-mono text-[10px] font-bold text-bg-primary uppercase tracking-widest">
                {hotel.type}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2 group-hover:text-accent transition-colors">{hotel.name}</h3>
              <div className="flex items-center gap-2 text-text-tertiary mb-6">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="font-mono text-[10px] uppercase tracking-wider">{hotel.location}</span>
              </div>

              {/* Amenities */}
              <div className="flex flex-wrap gap-2 mb-8">
                {hotel.amenities.map(amenity => (
                  <span
                    key={amenity}
                    className="flex items-center gap-2 border border-border px-3 py-1 font-mono text-[9px] text-text-secondary uppercase tracking-tighter"
                  >
                    {getAmenityIcon(amenity)}
                    {amenity}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onRequestCallback()}
                className="w-full flex items-center justify-center gap-3 bg-bg-primary border border-accent/30 text-accent font-bold py-3 uppercase text-xs tracking-[0.2em] transition-all hover:bg-accent hover:text-bg-primary"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link - only show if showViewAll is true */}
      {showViewAll && (
        <div className="mt-12 text-center">
          <Link
            to="/hotels"
            className="btn-primary inline-flex items-center gap-3 transition-all"
          >
            <span>Explore All Stays</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
