import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';

interface Props {
  onRequestCallback: () => void;
}

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Packages', href: '/packages' },
  { label: 'Cabs', href: '/cabs' },
  { label: 'Hotels', href: '/hotels' },
  { label: 'Adventure', href: '/adventure' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar({ onRequestCallback }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}>
        <div className="max-w-[1600px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 active:scale-95 transition-transform group">
              <LogoMark size={72} />
              <div className="flex flex-col group-hover:translate-x-1 transition-transform">
                <span className="text-xl font-black text-white tracking-tighter leading-tight group-hover:text-accent transition-colors">GRB TRAVELS</span>
                <span className="text-[9px] text-text-tertiary font-mono tracking-[0.2em] uppercase transition-colors group-hover:text-accent/60"> </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="font-mono text-[11px] uppercase tracking-widest text-text-secondary hover:text-accent transition-all relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-6">
              <button
                onClick={onRequestCallback}
                className="hidden lg:flex items-center gap-3 bg-bg-tertiary border border-accent/30 text-accent px-6 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-accent hover:text-bg-primary transition-all active:translate-y-0"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse group-hover:bg-bg-primary" />
                <span>Contact</span>
              </button>
              
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden flex h-10 w-10 items-center justify-center text-white p-2 border border-border bg-bg-tertiary"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`fixed inset-0 z-[45] lg:hidden transition-all duration-500 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Backdrop / Content Container */}
        <div className="absolute inset-0 bg-bg-primary flex flex-col pt-32 pb-12 px-8 overflow-hidden">
          {/* Background Grid for Mobile Menu */}
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          
          {/* Nav Links */}
          <div className="relative flex-1 flex flex-col space-y-2 overflow-y-auto no-scrollbar">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex flex-col py-4 border-b border-border/50"
              >
                <span className="font-mono text-[9px] text-accent uppercase tracking-widest mb-1">0{i + 1}</span>
                <span className="text-3xl font-black text-white uppercase tracking-tighter group-active:text-accent transition-colors">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="relative pt-8 space-y-6">
            <div className="flex flex-col space-y-1">
              <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest">Support Line</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+917006248803" className="text-xl font-bold text-white tracking-tight">+91 70062 48803</a>
                <a href="tel:+919086476757" className="text-xl font-bold text-white tracking-tight">+91 90864 76757</a>
              </div>
            </div>
            
            <button
              onClick={() => {
                setMenuOpen(false);
                onRequestCallback();
              }}
              className="w-full flex items-center justify-center gap-4 bg-accent text-bg-primary px-6 py-5 font-bold uppercase text-sm tracking-[0.2em] shadow-xl shadow-accent/20"
            >
              <Phone className="h-4 w-4" />
              <span>Enquire Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
