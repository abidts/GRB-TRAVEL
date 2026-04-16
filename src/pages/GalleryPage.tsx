import { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const images = [
  { src: 'https://images.unsplash.com/photo-1665034640942-07c4170c2872?w=800&q=80', title: 'Kashmir Bliss', category: 'Lakes' },
  { src: 'https://images.unsplash.com/photo-1568889753852-196c487a536e?w=800&q=80', title: 'Gulmarg Gondola', category: 'Mountains' },
  { src: 'https://images.unsplash.com/photo-1656221077978-7ded95487a98?w=800&q=80', title: 'Tulip Garden', category: 'Gardens' },
  { src: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80', title: 'Houseboat on Dal Lake', category: 'Lakes' },
  { src: 'https://images.unsplash.com/photo-1694368906722-49decee647be?w=800&q=80', title: 'Pahalgam Valley', category: 'Valleys' },
  { src: 'https://images.unsplash.com/photo-1685555845405-1503f76a5462?w=800&q=80', title: 'Pangong Lake, Ladakh', category: 'Lakes' },
  { src: 'https://images.unsplash.com/photo-1629574494582-54ae9a599656?w=800&q=80', title: 'Sonmarg Meadow', category: 'Valleys' },
  { src: 'https://images.unsplash.com/photo-1642781087094-0430c9390ca3?w=800&q=80', title: 'J&K Trek', category: 'Adventure' },
  { src: 'https://images.unsplash.com/photo-1683434576805-a4f85ea47bbf?w=800&q=80', title: 'Mountain Camping', category: 'Adventure' },
  { src: 'https://images.unsplash.com/photo-1722641277067-a7fba0ad1a59?w=800&q=80', title: 'J&K Campfire', category: 'Adventure' },
  { src: 'https://images.unsplash.com/photo-1704796531503-2ebd32bbaa8c?w=800&q=80', title: 'Snowy Peaks', category: 'Mountains' },

];

const categories = ['All', 'Lakes', 'Mountains', 'Valleys', 'Adventure'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'All' ? images : images.filter((img) => img.category === filter);

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightbox === null) return;
    if (direction === 'prev') {
      setLightbox(lightbox === 0 ? filtered.length - 1 : lightbox - 1);
    } else {
      setLightbox((lightbox + 1) % filtered.length);
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
            <span className="section-label animate-fade-in-down">// VISUAL JOURNEY</span>
            <h1 className="heading-xl text-white mb-6 text-center">
              CAPTURED <span className="text-accent underline decoration-4 underline-offset-8">PARADISE</span>
            </h1>
            <div className="w-24 h-0.5 bg-accent/30" />
          </div>

          {/* Filters */}
          <div className="flex overflow-x-auto no-scrollbar gap-3 justify-center mb-16 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-mono text-[10px] uppercase tracking-[0.2em] px-8 py-3 rounded-full transition-all duration-300 border ${
                  filter === cat
                    ? 'bg-accent text-bg-primary border-accent shadow-lg shadow-accent/20'
                    : 'bg-bg-tertiary text-text-secondary border-border hover:border-accent/50 hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filtered.map((img, i) => (
              <div
                key={img.src + filter}
                className="group relative overflow-hidden bg-bg-tertiary border border-border aspect-[4/5] cursor-pointer card-hover"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Detail */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-mono text-[9px] text-accent uppercase tracking-widest block mb-1">[{img.category}]</span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tighter">{img.title}</h3>
                  </div>
                </div>
                
                {/* Visual Indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary/95 backdrop-blur-xl p-4 sm:p-12 animate-fade-in"
            onClick={() => setLightbox(null)}
          >
            {/* Close */}
            <button
              className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all z-50 hover:rotate-90"
              onClick={() => setLightbox(null)}
            >
              <X className="w-6 h-6" />
            </button>

            {/* Nav */}
            <button
              className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 text-white rounded-full hover:bg-accent hover:text-bg-primary hover:border-accent transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 text-white rounded-full hover:bg-accent hover:text-bg-primary hover:border-accent transition-all z-10"
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative max-w-5xl w-full flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
              <div className="relative group overflow-hidden border border-white/5">
                <img
                  src={filtered[lightbox].src}
                  alt={filtered[lightbox].title}
                  className="max-h-[70vh] w-auto object-contain animate-scale-in shadow-2xl"
                />
              </div>

              <div className="text-center animate-fade-in-up">
                <span className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] block mb-2">// {filtered[lightbox].category}</span>
                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">{filtered[lightbox].title}</h2>
                <div className="flex items-center gap-4 justify-center mt-6">
                  <div className="h-px w-8 bg-white/20" />
                  <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest">{lightbox + 1} / {filtered.length}</span>
                  <div className="h-px w-8 bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
