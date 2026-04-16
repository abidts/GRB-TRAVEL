import { useRef } from 'react';
import { Mountain, Flame, Truck, Tent, Compass, Phone, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface Props {
  onRequestCallback: (subject?: string) => void;
}

const adventures = [
  {
    icon: Mountain,
    title: 'Trekking',
    desc: 'Trek through the Great Lakes and stunning Kashmir alpine meadows with expert guides.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    difficulty: 'Moderate',
    duration: '3-7 Days',
    color: 'from-vintage-500 to-vintage-600',
  },
  {
    icon: Flame,
    title: 'Camp Fire',
    desc: 'Magical evenings under star-lit skies with bonfires, Kahwa, and local music.',
    image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=800&q=80',
    difficulty: 'Easy',
    duration: '1 Night',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Truck,
    title: 'Off Road',
    desc: 'Conquer rugged terrains of Ladakh and Zoji La pass in 4x4 vehicles.',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771576292/Jeep_Overland_h2qzjg.jpg',
    difficulty: 'Hard',
    duration: '2-5 Days',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Tent,
    title: 'Camping',
    desc: 'Luxury camping at Sonamarg meadows and beside pristine mountain streams.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    difficulty: 'Easy',
    duration: '1-3 Nights',
    color: 'from-vintage-400 to-blue-600',
  },
  {
    icon: Compass,
    title: 'Exploring',
    desc: 'Discover hidden waterfalls, secret valleys, and untouched villages.',
    image: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=800&q=80',
    difficulty: 'Moderate',
    duration: '1-4 Days',
    color: 'from-violet-500 to-purple-600',
  },
];

export default function Adventure({ onRequestCallback }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

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
    <section id="adventure" className="relative py-24 bg-bg-secondary overflow-hidden border-b border-border">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 reveal">
          <span className="section-label animate-fade-in-down">// ADRENALINE</span>
          <h2 className="heading-lg text-white mb-6 text-center">
            Unleash Your Inner <span className="accent-highlight">Adventurer</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg text-center font-mono text-sm uppercase tracking-wider">
            Push your boundaries with thrilling outdoor experiences in the Himalayas.
          </p>
        </div>

        {/* Scroll Navigation for Large Screens */}
        <div className="hidden lg:flex items-center justify-end gap-4 mb-8">
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

        {/* Adventures Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory"
        >
          {adventures.map((adv) => (
            <div
              key={adv.title}
              className="group relative flex-shrink-0 w-[280px] sm:w-[350px] bg-bg-tertiary border border-border transition-all duration-500 hover:border-accent snap-start card-hover"
            >
              <div className="relative h-[450px] overflow-hidden">
                <img
                  src={adv.image}
                  alt={adv.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-px bg-accent" />
                    <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-[0.2em]">{adv.difficulty}</span>
                  </div>
                  
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors">{adv.title}</h3>
                  <p className="text-text-secondary font-mono text-[11px] uppercase tracking-tighter leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {adv.desc}
                  </p>
                  
                  <button
                    onClick={() => onRequestCallback(`${adv.title} Adventure`)}
                    className="flex items-center justify-center gap-3 bg-white/5 backdrop-blur-md border border-white/20 text-white font-bold py-4 uppercase text-[10px] tracking-[0.2em] transition-all hover:bg-accent hover:text-bg-primary hover:border-accent"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Inquire Now</span>
                  </button>
                </div>
                
                {/* Icon badge Top Corner */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-bg-primary border border-border flex items-center justify-center text-accent">
                  <adv.icon className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe hint */}
        <div className="mt-8 flex items-center justify-center gap-4 text-accent/50 animate-fade-in lg:hidden">
          <div className="h-px w-12 bg-accent/20" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Swipe To Explore</span>
          <div className="h-px w-12 bg-accent/20" />
        </div>
      </div>
    </section>
  );
}
