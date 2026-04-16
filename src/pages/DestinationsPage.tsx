import { useState, useRef, useEffect, useContext } from 'react';
import { MapPin, Phone, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getDestinations } from '../services/api';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { CallbackContext } from '../components/Layout';
type Destination = {
  name: string;
  tagline: string;
  image: string;
  desc: string;
  rating: number;
  highlight: string;
  slug: string;
};

export default function DestinationsPage() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getDestinations().then((data: any) => {
      const normalized = (data || []).map((dest: any) => ({
        name: dest.name,
        tagline: dest.tag || dest.name,
        image: dest.image,
        desc: dest.description || dest.desc || dest.name,
        rating: typeof dest.rating === 'string' ? parseFloat(dest.rating) : dest.rating || 0,
        highlight: dest.tag || 'Popular',
        slug: dest.name.toLowerCase().replace(/\s+/g, '-'),
      }));
      setDestinations(normalized);
    });
  }, []);

  return (
    <div className="min-h-screen bg-bg-primary text-white">
      <main className="pt-24 pb-16 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 reveal">
            <span className="section-label mb-4">// EXPLORATION</span>
            <h1 className="heading-xl text-white mb-6">
              Kashmir <span className="text-accent italic">Destinations</span>
            </h1>
            <p className="max-w-xl text-text-secondary font-mono text-sm uppercase tracking-wider leading-relaxed">
              From the serene Dal Lake to the rugged beauty of Ladakh, explore the diverse landscapes of the valley.
            </p>
          </div>

          {/* Grid */}
          <div
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((dest, index) => (
              <div
                key={dest.name}
                className="group relative bg-bg-tertiary border border-border transition-all duration-500 hover:border-accent card-hover"
              >
                {/* Image with Link to Details Page */}
                <Link to={`/destinations/${dest.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent" />

                    {/* Rating badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-border px-2 py-1 font-mono text-xs text-accent">
                      <Star className="h-3.5 w-3.5 fill-accent inline mr-1" />
                      {dest.rating}
                    </div>

                    {/* Highlight tag */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent/90 px-3 py-1 font-mono text-[10px] font-bold text-bg-primary uppercase tracking-[0.2em]">
                        {dest.highlight}
                      </span>
                    </div>

                    {/* Location & tagline */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-accent mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-mono text-[10px] uppercase tracking-widest">{dest.tagline}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{dest.name}</h3>
                    </div>
                  </div>
                </Link>

                {/* Content */}
                <div className="p-8">
                  <p className="text-text-secondary font-mono text-xs uppercase tracking-tighter leading-relaxed line-clamp-2 mb-8">{dest.desc}</p>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRequestCallback(`${dest.name} Trip`);
                    }}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-3"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Inquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-24">
          <WhatsAppCTA message="Latest Destinations & Travel Deals" section="destinations" />
        </div>
      </main>
    </div>
  );
}
