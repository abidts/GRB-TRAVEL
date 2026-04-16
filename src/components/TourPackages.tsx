import { useRef, useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Users, Star, Check, Phone, ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
import { CallbackContext } from './Layout';
import PackageFlashyCTA from './PackageFlashyCTA';

const packages = [
  {
    slug: 'honeymoon-special',
    name: 'Honeymoon Special',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    groupSize: '2',
    rating: '4.9',
    reviews: 189,
    tag: 'Romantic',
    tagColor: 'from-rose-500 to-pink-600',
    includes: ['Luxury Hotel', 'All Meals', 'Houseboat', 'Gondola'],
  },
  {
    slug: 'family-fun',
    name: 'Family Fun',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'],
    groupSize: '4-8',
    rating: '4.7',
    reviews: 198,
    tag: 'Family',
    tagColor: 'from-vintage-400 to-blue-600',
    includes: ['Family Rooms', 'All Meals', 'Pony Ride', 'Shikara'],
  },
  {
    slug: 'short-adventure-trip',
    name: 'Short & Adventure Trip',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Tangmarg'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 164,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Hotel', 'Meal', 'Transfer', 'Sightseeing', 'Activities'],
  },
];

export default function TourPackages() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      
      // Calculate active card for mobile indicator
      const cardWidth = 300;
      const newActive = Math.round(scrollLeft / cardWidth);
      setActiveCard(Math.min(newActive, packages.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, []);

  return (
    <section id="packages" className="relative py-20 sm:py-32 bg-bg-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 reveal">
          <span className="section-label animate-fade-in-down">// ADVENTURES</span>
          <h2 className="heading-lg text-white mb-6 text-center">
            Handcrafted <span className="text-accent underline decoration-4 underline-offset-8">Travel Packages</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg text-center font-mono text-sm uppercase tracking-wider">
            Choose from our curated packages. Contact us for custom itineraries!
          </p>
        </div>

        {/* Horizontal Slider */}
        <div className="mt-8 sm:mt-12">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar pb-10 snap-x snap-mandatory scroll-smooth"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              flexWrap: 'nowrap' as const,
              gap: '2rem',
            }}
          >
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className="group relative flex-none w-[280px] sm:w-[380px] bg-bg-tertiary border border-border transition-all duration-500 hover:border-accent snap-start card-hover"
            >
              <Link 
                to={`/packages/${(pkg as any).slug || pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="absolute inset-0 z-10"
                aria-label={`View details for ${pkg.name} package`}
              />
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-tertiary via-bg-tertiary/20 to-transparent" />
                
                {/* Tag */}
                <div className="absolute top-4 left-4 bg-accent/90 px-3 py-1 font-mono text-[10px] font-bold text-bg-primary uppercase tracking-widest">
                  {pkg.tag}
                </div>
              </div>

              {/* Details */}
              <div className="relative p-6 pb-20">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">{pkg.name}</h3>
                
                {/* Duration & Group */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span className="flex items-center gap-2 font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                    <Clock className="h-3.5 w-3.5 text-accent" />
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-2 font-mono text-[10px] text-text-tertiary uppercase tracking-wider">
                    <Users className="h-3.5 w-3.5 text-accent" />
                    {pkg.groupSize} People
                  </span>
                </div>

                {/* Destinations */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.destinations.map((d) => (
                    <span key={d} className="font-mono text-[10px] text-text-secondary border border-border px-2 py-1 uppercase tracking-tighter">
                      {d}
                    </span>
                  ))}
                </div>

                {/* CTA Button - Fixed position at bottom */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onRequestCallback(`${pkg.name} Package`);
                  }}
                  className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-center gap-2 bg-bg-primary border border-accent/30 text-accent font-bold py-3 uppercase text-xs tracking-[0.2em] transition-all hover:bg-accent hover:text-bg-primary"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Inquire Now</span>
                </button>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Swipe hint */}
        <div className="mt-8 flex items-center justify-center gap-4 text-accent/50 animate-fade-in">
          <div className="h-px w-12 bg-accent/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Swipe To Explore</span>
          <div className="h-px w-12 bg-accent/20" />
        </div>

        {/* View All Packages */}
        <div className="mt-16 text-center reveal">
          <Link
            to="/packages"
            className="btn-outline inline-flex items-center gap-3 group"
          >
            <span>View All Packages</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Flashy Package CTA */}
        <PackageFlashyCTA className="mt-20" />
      </div>
    </section>
  );
}
