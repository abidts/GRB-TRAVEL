import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Send, CheckCircle, Loader2, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoMark from './LogoMark';

const quickLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Tour Packages', to: '/packages' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Adventure', to: '/adventure' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

const destinations = [
  { label: 'Srinagar', to: '/destinations/srinagar' },
  { label: 'Gulmarg', to: '/destinations/gulmarg' },
  { label: 'Pahalgam', to: '/destinations/pahalgam' },
  { label: 'Sonmarg', to: '/destinations/sonmarg' },
  { label: 'Leh Ladakh', to: '/destinations/leh-ladakh' },
  { label: 'Dal Lake', to: '/destinations/dal-lake' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || subscribing) return;

    setSubscribing(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/grbtravels786@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: email,
          subject: 'New Email Subscription',
          message: `This email has subscribed to your newsletter: ${email}`,
          _subject: 'GRB TRAVELS – New Newsletter Subscriber',
          _template: 'table',
          _captcha: 'false',
          _next: 'false',
        }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 3000);
      }
    } catch (error) {
      console.error('Subscription failed:', error);
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="relative bg-bg-primary border-t border-border pt-16 pb-12 lg:pb-8 overflow-hidden">
      {/* Newsletter CTA */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative p-1 bg-gradient-to-r from-border via-accent/30 to-border">
          <div className="relative bg-bg-secondary p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center lg:text-left">
              <span className="section-label mb-2">// NEWSLETTER</span>
              <h3 className="heading-md text-white mb-2">Start Your <span className="text-accent italic">Kashmir Journey</span></h3>
              <p className="text-text-secondary font-mono text-xs uppercase tracking-wider">
                Subscribe for exclusive deals and travel tips curated by our experts.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                required
                disabled={subscribing || subscribed}
                className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all w-full sm:w-80"
              />
              <button
                type="submit"
                disabled={subscribing || subscribed}
                className="btn-primary whitespace-nowrap px-8 py-4 flex items-center justify-center gap-3"
              >
                {subscribing ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b border-border/50 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <LogoMark size={90} />
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tighter leading-tight">GRB TRAVELS</span>
                <span className="text-[9px] text-text-tertiary font-mono tracking-[0.2em] uppercase"></span>
              </div>
            </Link>
            <p className="text-text-tertiary font-mono text-[11px] uppercase tracking-wider leading-relaxed mb-4">
              Your premier travel partner for exploring Kashmir. Creating unforgettable memories since 2025.
            </p>
            <div className="flex items-center gap-6 mt-auto">
              <img src="https://res.cloudinary.com/dveg0ai0n/image/upload/v1772117700/Screenshot_2026-02-26_at_8.16.12_PM_pi0otz.png" alt="J&K Tourism" className="h-10 grayscale hover:grayscale-0 transition-all cursor-crosshair" />
              <img src="https://res.cloudinary.com/dveg0ai0n/image/upload/v1772117701/Screenshot_2026-02-26_at_8.16.48_PM_ksbx9i.png" alt="Gov Of India" className="h-10 grayscale hover:grayscale-0 transition-all cursor-crosshair" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Resources</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-mono text-[10px] text-text-secondary hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-accent group-hover:w-4 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Popular Hubs</h4>
            <ul className="grid grid-cols-1 gap-4">
              {destinations.map((dest) => (
                <li key={dest.label}>
                  <Link
                    to={dest.to}
                    className="font-mono text-[10px] text-text-secondary hover:text-white uppercase tracking-widest transition-colors flex items-center gap-3"
                  >
                    <MapPin className="h-3 w-3 text-accent/50" />
                    {dest.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <h4 className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">HQ & Social</h4>
            <div className="space-y-6 mb-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-4 w-4 text-accent shrink-0" />
                <span className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest">RIYAZAT TENG KHANYAR SRINAGAR KASHMIR,<br/>J&K 190003</span>
              </div>
              <div className="flex flex-col gap-2">
                <a href="tel:+917006248803" className="font-bold text-white hover:text-accent transition-colors">+91 70062 48803</a>
                <a href="tel:+919086476757" className="font-bold text-white hover:text-accent transition-colors">+91 90864 76757</a>
                <a href="mailto:info@grbtravels.com" className="font-mono text-[10px] text-accent uppercase tracking-widest overflow-hidden text-ellipsis italic">grbtravels786@gmail.com</a>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center text-white hover:border-accent hover:text-accent transition-all">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">
          © 2026 GRB TRAVELS. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-2">
          <p className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">POWERED BY</p>
          <a
            href="https://www.ennbi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] text-accent font-bold uppercase tracking-[0.2em] border-b border-accent/30 hover:border-accent transition-all"
          >
            Ennbi Softwares
          </a>
        </div>
      </div>
    </footer>
  );
}
