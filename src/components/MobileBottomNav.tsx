import { useState, useEffect, useContext } from 'react';
import { Home, MapPin, Package, Phone, Menu, X, Mountain, Flame, Car, Camera, MessageSquare, Building, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CallbackContext } from './Layout';

const navItems = [
  { icon: MapPin, label: 'Destination', path: '/destinations' },
  { icon: Package, label: 'Package', path: '/packages' },
  { icon: Car, label: 'Cabs', path: '/cabs' },
  { icon: MessageCircle, label: 'Whatsapp', action: true },
];

const moreItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Building, label: 'Hotels', path: '/hotels' },
  { icon: Mountain, label: 'Adventure', path: '/adventure' },
  { icon: Camera, label: 'Gallery', path: '/gallery' },
  { icon: Flame, label: 'About', path: '/about' },
  { icon: Phone, label: 'Contact', path: '/contact' },
];

export default function MobileBottomNav() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [moreOpen, setMoreOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action) {
      // Open WhatsApp directly
      window.open('https://wa.me/917006248803', '_blank');
    } else if (item.path) {
      navigate(item.path);
    }
    setMoreOpen(false);
  };

  return (
    <>
      {/* More Menu Overlay */}
      {moreOpen && (
        <div 
          className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setMoreOpen(false)}
        />
      )}

      {/* More Menu Panel */}
      <div className={`fixed bottom-20 left-4 right-4 z-[95] lg:hidden transition-all duration-300 ${moreOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <div className="glass-strong rounded-2xl p-4 shadow-2xl">
          <div className="grid grid-cols-3 gap-3">
            {moreItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  if (item.path) {
                    navigate(item.path);
                  }
                  setMoreOpen(false);
                }}
                className="flex flex-col items-center gap-2 rounded-xl p-3 transition-all tap-scale text-slate-400 hover:bg-slate-800 hover:text-white"
              >
                <item.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
    <nav className={`fixed bottom-0 left-0 right-0 z-[100] lg:hidden transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-bg-tertiary/90 backdrop-blur-xl border-t border-border safe-bottom shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-stretch justify-around px-2">
            {navItems.map((item) => {
              const isActive = !item.action && item.path === '/';
              const isWhatsapp = item.action;

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`relative flex flex-1 flex-col items-center gap-1.5 py-4 transition-all tap-scale ${
                    isWhatsapp
                      ? 'text-accent'
                      : isActive
                        ? 'text-accent'
                        : 'text-text-tertiary'
                  }`}
                >
                  {/* WhatsApp button special styling */}
                  {isWhatsapp ? (
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20 scale-150" />
                      <div className="relative flex h-8 w-8 items-center justify-center border border-accent/30 bg-accent/5">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                    </div>
                  ) : (
                    <div className={`relative transition-transform duration-200 ${isActive ? 'scale-110' : ''}`}>
                      <item.icon className="h-5 w-5" />
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 h-0.5 w-4 -translate-x-1/2 bg-accent" />
                      )}
                    </div>
                  )}
                  <span className="font-mono text-[9px] uppercase tracking-tighter">
                    {item.label}
                  </span>
                </button>
              );
            })}
            
            {/* More Button */}
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className={`relative flex flex-1 flex-col items-center gap-1.5 py-4 transition-all tap-scale ${moreOpen ? 'text-accent' : 'text-text-tertiary'}`}
            >
              <div className={`transition-transform duration-300 ${moreOpen ? 'rotate-90' : ''}`}>
                {moreOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
              <span className="font-mono text-[9px] uppercase tracking-tighter">More</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
