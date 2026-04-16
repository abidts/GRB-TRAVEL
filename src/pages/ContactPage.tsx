import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary py-24 sm:py-32 relative overflow-hidden selection:bg-accent selection:text-bg-primary">
      {/* Background Grid */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none z-0" />
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-20 reveal">
          <span className="section-label animate-fade-in-down">// GET IN TOUCH</span>
          <h1 className="heading-xl text-white mb-6 text-center">
            CONTACT <span className="text-accent underline decoration-4 underline-offset-[12px]">GRB TRAVELS</span>
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg text-center font-medium leading-relaxed">
            Have questions about your Kashmir travel plans? Our travel experts are here to help you plan the perfect trip.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24 reveal">
          {/* Phone Card */}
          <div className="bg-bg-tertiary rounded-[32px] border border-border p-10 flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-500 card-hover">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <Phone className="h-7 w-7" />
            </div>
            <h3 className="font-mono text-[10px] text-text-tertiary uppercase tracking-[0.3em] mb-4">Direct Communication</h3>
            <div className="flex flex-col gap-2">
              <a href="tel:+917006248803" className="text-2xl font-black text-white hover:text-accent transition-colors tracking-tighter">
                +91 70062 48803
              </a>
              <a href="tel:+919086476757" className="text-2xl font-black text-white hover:text-accent transition-colors tracking-tighter">
                +91 90864 76757
              </a>
            </div>
            <p className="mt-4 text-sm text-text-tertiary font-mono uppercase tracking-widest">Available 24/7</p>
          </div>

          {/* Email Card */}
          <div className="bg-bg-tertiary rounded-[32px] border border-border p-10 flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-500 card-hover">
            <div className="w-16 h-16 rounded-2xl bg-[#FFD700]/10 border border-[#FFD700]/20 flex items-center justify-center text-[#FFD700] mb-6 group-hover:scale-110 transition-transform">
              <Mail className="h-7 w-7" />
            </div>
            <h3 className="font-mono text-[10px] text-text-tertiary uppercase tracking-[0.3em] mb-4">Email Enquiry</h3>
            <a href="mailto:info@grbtravels.com" className="text-xl font-black text-white hover:text-[#FFD700] transition-colors tracking-tighter break-all">
              grbtravels786@gmail.com
            </a>
            <p className="mt-4 text-sm text-text-tertiary font-mono uppercase tracking-widest">Reply within 2 hours</p>
          </div>

          {/* Location Card */}
          <div className="bg-bg-tertiary rounded-[32px] border border-border p-10 flex flex-col items-center text-center group hover:border-accent/40 transition-all duration-500 card-hover">
            <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="font-mono text-[10px] text-text-tertiary uppercase tracking-[0.3em] mb-4">Our Headquarters</h3>
            <p className="text-xl font-black text-white tracking-tighter">
              RIYAZAT TENG KHANYAR SRINAGAR KASHMIR <br /> J&K 190003
            </p>
            <p className="mt-4 text-sm text-text-tertiary font-mono uppercase tracking-widest">Main Office</p>
          </div>
        </div>

        {/* Operational Info Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24 reveal">
          <div className="bg-bg-secondary rounded-2xl border border-border p-8 flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-accent/5 border border-white/5 flex items-center justify-center text-accent shrink-0">
              <Clock className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-2">Business Hours</h4>
              <p className="text-xl font-bold text-white tracking-tight">Mon - Sat: 9:00 AM - 6:00 PM</p>
              <p className="text-text-tertiary text-sm mt-1 uppercase font-mono tracking-widest">Sunday: Closed</p>
            </div>
          </div>

          <div className="bg-bg-secondary rounded-2xl border border-border p-8 flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-accent/5 border border-white/5 flex items-center justify-center text-accent shrink-0">
              <Phone className="h-7 w-7" />
            </div>
            <div>
              <h4 className="font-mono text-[10px] text-accent uppercase tracking-[0.2em] mb-2">Emergency Support</h4>
              <p className="text-xl font-bold text-white tracking-tight">24/7 Priority Assistance</p>
              <p className="text-text-tertiary text-sm mt-1 uppercase font-mono tracking-widest">Via WhatsApp Support</p>
            </div>
          </div>
        </div>

        {/* Social Media Link Card */}
        <div className="max-w-4xl mx-auto mb-24 reveal">
          <div className="bg-bg-tertiary rounded-[40px] border border-border p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 relative z-10">Follow Our Journey</h3>
            <p className="text-text-secondary text-sm mb-10 font-mono uppercase tracking-[0.2em] relative z-10">
              Latest packages, offers, and travel inspiration
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 relative z-10">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold transition-all hover:bg-accent hover:text-bg-primary hover:border-accent"
              >
                <Instagram className="h-5 w-5" />
                <span className="uppercase font-mono text-xs tracking-widest">Instagram</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold transition-all hover:bg-[#1877F2] hover:border-[#1877F2]"
              >
                <Facebook className="h-5 w-5" />
                <span className="uppercase font-mono text-xs tracking-widest">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Call Back Final CTA */}
        <div className="max-w-5xl mx-auto reveal">
          <div className="bg-bg-secondary rounded-[48px] border border-white/5 p-12 lg:p-20 text-center space-y-10 relative overflow-hidden shadow-2xl shadow-accent/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <span className="section-label mb-8 tracking-[0.4em]">// PRIORITY SUPPORT</span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-8 max-w-2xl mx-auto leading-tight">
                LET OUR EXPERTS <span className="text-accent italic">PLAN YOUR TRIP</span>
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-lg mb-12">
                Share your details and our travel expert will call you within 30 minutes to plan your dream Kashmir itinerary.
              </p>
              
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-callback-from-contact'))}
                className="btn-primary group relative overflow-hidden px-12 py-5"
              >
                <span className="relative z-10 group-hover:text-bg-primary transition-colors">REQUEST A CALL BACK</span>
                <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
