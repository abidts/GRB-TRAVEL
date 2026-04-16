import { useRef, useContext } from 'react';
import { Users, Fuel, Settings, Star, Phone, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { CallbackContext } from './Layout';

interface Props {
  showAll?: boolean;
}

const allCabs = [
  {
    name: 'Swift Dzire',
    type: 'Sedan',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496836/RedComm_-_Hire_Swift_Dzire_for_Tezpur_Kaziranga_Shillong_Cherrapunjee_Swift_Dzire_On_Rent_at_Low_Price_u4ryau.jpg',
    seats: '4',
    fuel: 'Petrol',
    transmission: 'Manual',
    rating: '4.7',
    best: 'City Tours',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Chevrolet Tavera',
    type: 'MUV',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771522558/Upgraded_Chevrolet_Tavera_will_be_manufactured_at_Halol_Facility_yqgkwv.jpg',
    seats: '7',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.6',
    best: 'Family Trips',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Toyota Etios',
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80',
    seats: '4',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.7',
    best: 'City & Highway',
    color: 'from-sky-500 to-blue-600',
  },
  {
    name: 'Toyota Camry',
    type: 'Premium Sedan',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771522294/toyota-camry_pb3ph6.jpg',
    seats: '4',
    fuel: 'Petrol/Hybrid',
    transmission: 'Manual',
    rating: '4.8',
    best: 'Business Travel',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'Toyota Innova',
    type: 'MUV',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/__3_o9yb7c.jpg',
    seats: '7',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.9',
    best: 'Family Tours',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Innova Crysta',
    type: 'MUV',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/__3_o9yb7c.jpg',
    seats: '7',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.9',
    best: 'Premium Family',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Tempo Traveller (17)',
    type: 'Mini Bus',
    image: 'https://images.unsplash.com/photo-1715340614342-899407bed6dd?w=900&q=80&auto=format&fit=crop',
    seats: '17',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.6',
    best: 'Group Tours',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Tempo Traveller (20)',
    type: 'Mini Bus',
    image: 'https://images.unsplash.com/photo-1715340614342-899407bed6dd?w=900&q=80&auto=format&fit=crop',
    seats: '20',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.6',
    best: 'Group Tours',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Tempo Traveller (26)',
    type: 'Mini Bus',
    image: 'https://images.unsplash.com/photo-1715340614342-899407bed6dd?w=900&q=80&auto=format&fit=crop',
    seats: '26',
    fuel: 'Diesel',
    transmission: 'Manual',
    rating: '4.6',
    best: 'Large Groups',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Mahindra Thar',
    type: '4x4 SUV',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/_Thar_Transformed__Rugged_Elegance_with_Urban_Vibes__klyzyh.jpg',
    seats: '4',
    fuel: 'Diesel',
    transmission: '4WD',
    rating: '4.8',
    best: 'Off-Road',
    color: 'from-orange-500 to-red-600',
  },
];

const homeCabs = allCabs.filter((cab) =>
  ['Mahindra Thar', 'Toyota Etios', 'Toyota Innova', 'Tempo Traveller (17)'].includes(cab.name)
);

export default function Cabs({ showAll = false }: Props) {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const scrollRef = useRef<HTMLDivElement>(null);
  const cabs = showAll ? allCabs : homeCabs;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 240 : 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="cabs" className="relative py-20 sm:py-32 bg-bg-secondary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 reveal">
          <span className="section-label animate-fade-in-down">// MOBILITY</span>
          <h2 className="heading-lg text-white mb-6 text-center">
            Premium <span className="accent-highlight">Rental Cabs</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg text-center font-mono text-sm uppercase tracking-wider">
            Comfortable vehicles with experienced local drivers for a seamless journey.
          </p>
        </div>

        {/* Cabs Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cabs.map((cab) => (
            <div
              key={cab.name}
              className="group relative bg-bg-tertiary border border-border transition-all duration-500 hover:border-accent card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cab.image}
                  alt={cab.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary to-transparent" />
                
                {/* Type badge */}
                <span className="absolute top-4 left-4 bg-accent/90 px-3 py-1 font-mono text-[10px] font-bold text-bg-primary uppercase tracking-widest">
                  {cab.type}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{cab.name}</h3>
                  <div className="flex items-center gap-1 text-accent">
                    <Star className="h-3 w-3 fill-accent" />
                    <span className="font-mono text-xs">{cab.rating}</span>
                  </div>
                </div>
                
                <p className="font-mono text-[10px] text-accent uppercase tracking-wider mb-6">Best for: {cab.best}</p>

                {/* Specs Grid */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="flex flex-col items-center border border-border py-2 px-1">
                    <Users className="h-4 w-4 text-text-tertiary mb-1" />
                    <span className="font-mono text-[10px] text-text-secondary">{cab.seats}</span>
                  </div>
                  <div className="flex flex-col items-center border border-border py-2 px-1">
                    <Fuel className="h-4 w-4 text-text-tertiary mb-1" />
                    <span className="font-mono text-[10px] text-text-secondary">PETROL</span>
                  </div>
                  <div className="flex flex-col items-center border border-border py-2 px-1">
                    <Settings className="h-4 w-4 text-text-tertiary mb-1" />
                    <span className="font-mono text-[10px] text-text-secondary">MT</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onRequestCallback(`${cab.name} Cab Rental`)}
                  className="w-full flex items-center justify-center gap-3 bg-bg-primary border border-accent/30 text-accent font-bold py-3 uppercase text-xs tracking-[0.2em] transition-all hover:bg-accent hover:text-bg-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Request Callback</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
