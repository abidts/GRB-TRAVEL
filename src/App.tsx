import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroSlider from './components/HeroSlider';
import Cabs from './components/Cabs';
import Hotels from './components/Hotels';
import ContactSection from './components/ContactSection';
import ScrollToTop from './components/ScrollToTop';
import MobileBottomNav from './components/MobileBottomNav';
import TourPackages from './components/TourPackages';

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg-primary font-primary overflow-x-hidden selection:bg-accent selection:text-bg-primary">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none z-0" />
      
      <HeroSlider />

      <section className="py-20 sm:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 reveal">
            <span className="section-label animate-fade-in-down">// ADVENTURES</span>
            <h2 className="heading-lg text-white mb-6 text-center">
              Our Popular <span className="text-accent underline decoration-4 underline-offset-8">Tour Packages</span>
            </h2>
            <div className="w-24 h-0.5 bg-accent/30" />
          </div>
          <TourPackages />
        </div>
      </section>

      <div className="divider mx-auto w-4/5 opacity-50" />

      <section className="py-20 sm:py-32 relative z-10 bg-bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 reveal">
            <span className="section-label animate-fade-in-down">// MOBILITY</span>
            <h2 className="heading-lg text-white mb-6 text-center">
              Car Rentals & <span className="accent-highlight">Cabs</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg text-center font-mono text-sm uppercase tracking-wider">
              Comfortable and reliable transportation for all your travel needs in Kashmir
            </p>
          </div>
          <Cabs />
          <div className="mt-12 text-center reveal">
            <Link
              to="/cabs"
              className="btn-outline inline-flex items-center gap-3 group"
            >
              <span>View All Cabs</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <div className="divider mx-auto w-4/5 opacity-50" />

      <section className="py-20 sm:py-32 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-16 reveal">
            <span className="section-label animate-fade-in-down">// HOSPITALITY</span>
            <h2 className="heading-lg text-white mb-6 text-center">
              Premium <span className="text-accent italic">Hotels & Stays</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto text-lg text-center">
              Luxury hotels, houseboats, and resorts for an unforgettable Kashmir experience
            </p>
          </div>
          <Hotels showViewAll={false} />
          <div className="mt-12 text-center reveal">
            <Link
              to="/hotels"
              className="btn-primary inline-flex items-center gap-3 transition-all"
            >
              <span>Explore Stays</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* Desktop only */}
      <ScrollToTop />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}
