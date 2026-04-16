import { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { getDestinations } from '../services/api';

interface Props {
  onRequestCallback: (subject?: string) => void;
}

type Destination = {
  name: string;
  tagline: string;
  image: string;
  desc: string;
  rating: number;
  highlight: string;
};

export default function Destinations({ onRequestCallback }: Props) {
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
      }));
      setDestinations(normalized);
    });
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 260 : 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="destinations" className="relative py-24 bg-bg-primary overflow-hidden border-b border-border">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16 reveal">
          <span className="section-label animate-fade-in-down">// EXPLORATION</span>
          <h2 className="heading-lg text-white mb-6">
            Enchanting <span className="accent-highlight italic">Kashmir</span>
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full gap-8">
            <p className="text-text-secondary max-w-xl text-lg font-mono text-sm uppercase tracking-wider">
              Discover the hidden gems and iconic landscapes of the paradise on earth.
            </p>
            
            {/* Scroll Navigation */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => scroll('left')}
                className="btn-icon group"
              >
                <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="btn-icon group"
              >
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* destinations Slider/Grid */}
        <div 
          ref={scrollRef}
          className="mt-8 flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto lg:overflow-visible no-scrollbar pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory lg:snap-none"
        >
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-auto bg-bg-tertiary border border-border transition-all duration-500 hover:border-accent snap-start card-hover"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary to-transparent" />
                
                {/* Rating badge */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-border px-2 py-1 font-mono text-xs text-accent">
                  <Star className="h-3.5 w-3.5 fill-accent inline mr-1" />
                  {dest.rating}
                </div>
                
                {/* Highlight tag */}
                <div className="absolute top-4 left-4 bg-accent/90 px-3 py-1 font-mono text-[10px] font-bold text-bg-primary uppercase tracking-widest">
                  {dest.highlight}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2 text-accent">
                  <MapPin className="h-4 w-4" />
                  <span className="font-mono text-[10px] uppercase tracking-widest">{dest.tagline}</span>
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors">{dest.name}</h3>
                <p className="text-text-secondary font-mono text-xs uppercase tracking-tighter leading-relaxed mb-8 line-clamp-3">{dest.desc}</p>
                
                <button
                  onClick={() => onRequestCallback(`${dest.name} Trip`)}
                  className="w-full flex items-center justify-center gap-3 bg-bg-primary border border-accent/30 text-accent font-bold py-4 uppercase text-xs tracking-[0.2em] transition-all hover:bg-accent hover:text-bg-primary"
                >
                  <Phone className="h-4 w-4" />
                  <span>Enquire Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
