import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, ThumbsUp } from 'lucide-react';
const reviews = [
  {
    name: 'Rahul Sharma',
    location: 'Delhi',
    avatar: 'RS',
    rating: 5,
    text: 'Absolutely magical experience! GRB TRAVELS Tour & Travels planned our honeymoon perfectly. From the houseboat stay to the Gulmarg Gondola ride, every moment was unforgettable.',
    trip: 'Honeymoon Special',
    date: 'Mar 2025',
  },
  {
    name: 'Priya Patel',
    location: 'Mumbai',
    avatar: 'PP',
    rating: 5,
    text: 'Best family vacation ever! The team took care of everything. My kids loved the pony rides in Pahalgam and snow play in Gulmarg. Highly recommended!',
    trip: 'Kashmir Bliss',
    date: 'Jan 2025',
  },
  {
    name: 'Amit & Sneha',
    location: 'Bangalore',
    avatar: 'AS',
    rating: 5,
    text: 'The Grand J&K package was worth every penny. Leh Ladakh was a dream come true. The driver was like family by the end of the trip!',
    trip: 'Grand J&K',
    date: 'Apr 2025',
  },
  {
    name: 'Sarah Johnson',
    location: 'London',
    avatar: 'SJ',
    rating: 5,
    text: 'As a solo female traveler, I felt completely safe. The trekking experience was surreal. The campfire nights were the highlight of my India trip.',
    trip: 'Adventure Trek',
    date: 'Sep 2025',
  },
  {
    name: 'Vikram Singh',
    location: 'Jaipur',
    avatar: 'VS',
    rating: 5,
    text: 'Booked a group tour for 12 people. Tempo Traveller was excellent, driver very experienced. All hotels were exactly as promised. Will book again!',
    trip: 'Group Tour',
    date: 'Dec 2025',
  },
];

export default function ReviewsPage() {
  const [current, setCurrent] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c === 0 ? reviews.length - 1 : c - 1));

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  // Scroll to current on mobile
  useEffect(() => {
    if (scrollRef.current && !isDragging) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 280 : 450;
      scrollRef.current.scrollTo({
        left: current * cardWidth,
        behavior: 'smooth',
      });
    }
  }, [current, isDragging]);

  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const cardWidth = scrollRef.current.clientWidth < 640 ? 280 : 450;
      const newCurrent = Math.round(scrollRef.current.scrollLeft / cardWidth);
      if (newCurrent !== current && newCurrent >= 0 && newCurrent < reviews.length) {
        setCurrent(newCurrent);
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none z-0" />
      
      <main className="pt-24 pb-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center mb-16 reveal">
            <span className="section-label animate-fade-in-down">// TESTIMONIALS</span>
            <h1 className="heading-xl text-white mb-6 text-center">
              VOICES OF <span className="text-accent underline decoration-4 underline-offset-8">EXPLORERS</span>
            </h1>
            <div className="w-24 h-0.5 bg-accent/30" />
          </div>

          {/* Large Featured Review */}
          <div className="max-w-5xl mx-auto relative mb-20 animate-fade-in">
            <Quote className="absolute -top-10 -left-10 h-32 w-32 text-accent/5 pointer-events-none" />
            
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setTimeout(() => setIsDragging(false), 100)}
              className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory"
            >
              {reviews.map((review, idx) => (
                <div
                  key={review.name}
                  className={`relative flex-shrink-0 w-full sm:w-[500px] lg:w-[800px] lg:mx-auto bg-bg-tertiary border border-border p-8 lg:p-16 transition-all duration-700 snap-center rounded-[48px] overflow-hidden ${
                    idx === current ? 'border-accent/40 shadow-2xl shadow-accent/5 scale-100' : 'opacity-40 scale-95'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-10">
                    {/* Avatar & Rating */}
                    <div className="flex flex-col items-center gap-4 shrink-0">
                      <div className="w-24 h-24 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center text-4xl font-black text-accent tracking-tighter">
                        {review.avatar}
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-text-tertiary'}`} />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-6">
                      <div className="space-y-1">
                        <span className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] block">// VERIFIED TRAVELER</span>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{review.name}</h3>
                        <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest">{review.location} • {review.date}</p>
                      </div>

                      <p className="text-lg lg:text-xl text-text-secondary leading-relaxed font-medium italic">
                        &ldquo;{review.text}&rdquo;
                      </p>

                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/10 rounded-full">
                        <Sparkles className="h-3 w-3 text-accent" />
                        <span className="font-mono text-[9px] text-accent uppercase tracking-widest">{review.trip} Package</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Navigation */}
          <div className="flex flex-col items-center gap-10 reveal">
            <div className="flex items-center gap-6">
              <button
                onClick={prev}
                className="w-14 h-14 rounded-full border border-border hover:border-accent hover:text-accent transition-all flex items-center justify-center bg-bg-tertiary active:scale-95"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <div className="flex gap-3">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${
                      i === current ? 'w-12 bg-accent' : 'w-4 bg-border hover:bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-14 h-14 rounded-full border border-border hover:border-accent hover:text-accent transition-all flex items-center justify-center bg-bg-tertiary active:scale-95"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-[0.4em] animate-pulse">
              // Slide to navigate reviews
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
