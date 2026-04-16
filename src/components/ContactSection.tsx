import { useContext } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import LocationMap from './LocationMap';
import { CallbackContext } from './Layout';

export default function ContactSection() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});

  return (
    <section id="callback" className="relative py-24 bg-bg-primary overflow-hidden border-t border-border">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div className="reveal">
            <span className="section-label animate-fade-in-down">// CONTACT</span>
            <h2 className="heading-lg text-white mb-8">
              Let's Plan Your <span className="text-accent italic">Kashmir Escape</span>
            </h2>
            
            <p className="text-text-secondary text-lg mb-12 max-w-xl">
              Our experts are ready to curate the perfect itinerary for you. Reach out via any channel or request a quick callback.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-bg-tertiary border border-border flex items-center justify-center text-accent group-hover:border-accent transition-colors duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-text-tertiary uppercase mb-1">Call Us</p>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+917006248803" className="text-xl font-bold text-white hover:text-accent transition-colors tracking-tight">
                      +91 70062 48803
                    </a>
                    <a href="tel:+919086476757" className="text-xl font-bold text-white hover:text-accent transition-colors tracking-tight">
                      +91 90864 76757
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-bg-tertiary border border-border flex items-center justify-center text-accent group-hover:border-accent transition-colors duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-text-tertiary uppercase mb-1">Email Us</p>
                  <a href="mailto:info@grbtravels.com" className="text-xl font-bold text-white hover:text-accent transition-colors tracking-tight">
                    grbtravels786@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-bg-tertiary border border-border flex items-center justify-center text-accent group-hover:border-accent transition-colors duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest text-text-tertiary uppercase mb-1">Visit Us</p>
                  <p className="text-xl font-bold text-white tracking-tight leading-tight">
                    RIYAZAT TENG KHANYAR SRINAGAR KASHMIR<br />
                    J&K-190003
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Form Button */}
            <div className="mt-12">
              <button
                onClick={() => onRequestCallback()}
                className="btn-primary flex items-center justify-center gap-3 shadow-xl shadow-accent/20"
              >
                <Send className="h-5 w-5" />
                <span>Request Call Back</span>
              </button>
            </div>
          </div>

          {/* Right Side - Location Map */}
          <div className="reveal lg:sticky lg:top-24">
            <div className="relative p-1 bg-gradient-to-br from-border to-transparent">
              <LocationMap />
              <div className="absolute top-4 right-4 bg-bg-primary/80 backdrop-blur-md border border-border px-3 py-1 font-mono text-[10px] text-accent">
                SRINAGAR HQ
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
