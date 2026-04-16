import { Mountain, MapPin, Compass, Shield, Phone } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-bg-primary text-white py-24 sm:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full grid-bg opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-accent/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <span className="section-label mb-8">// OUR PHILOSOPHY</span>
            <h1 className="heading-xl text-white mb-8">
              Kashmir Through <br/>
              <span className="text-accent italic tracking-tight">Expert Lenses</span>
            </h1>
            <p className="text-text-secondary text-xl font-mono text-sm uppercase tracking-wider leading-relaxed mb-12">
              GRB TRAVELS Private Limited is a premier travel agency dedicated to showcasing the unparalleled beauty of Kashmir. With years of experience and a passion for our land, we provide curated travel experiences that stay with you forever.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="tel:+917006248803" className="btn-primary flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>Talk to Expert</span>
              </a>
              <div className="h-px w-20 bg-border hidden sm:block" />
            </div>
          </div>

          {/* Stat Cards - ENNBI style Grid */}
          <div className="grid grid-cols-2 gap-4 reveal">
            {[
              { icon: Mountain, label: 'Kashmir Experts', value: 'Local team' },
              { icon: MapPin, label: 'Curated Spots', value: 'Hidden gems' },
              { icon: Compass, label: 'Tailored Plans', value: 'Custom trips' },
              { icon: Shield, label: 'Trusted Service', value: 'Since 2025' },
            ].map((item) => (
              <div key={item.label} className="bg-bg-tertiary border border-border p-6 group hover:border-accent transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center border border-accent/20 bg-accent/5 text-accent mb-6 group-hover:bg-accent group-hover:text-bg-primary transition-all">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-lg font-bold text-white uppercase tracking-tighter">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature blocks */}
        <div className="mt-32 grid lg:grid-cols-3 border-t border-border">
          {[
            {
              title: 'Local Roots',
              text: 'Born in Kashmir, we share the stories, culture, and landscapes only locals know.',
            },
            {
              title: 'Curated Journeys',
              text: 'From serene houseboats to alpine adventures, every itinerary is handcrafted for you.',
            },
            {
              title: 'Memories that Stay',
              text: 'We focus on meaningful experiences so your trip lives on long after you leave.',
            },
          ].map((card, i) => (
            <div key={card.title} className={`p-10 border-b lg:border-b-0 border-border ${i !== 2 ? 'lg:border-r' : ''} group hover:bg-bg-secondary transition-colors`}>
              <div className="font-mono text-accent text-[10px] mb-4">0{i + 1} //</div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors">{card.title}</h3>
              <p className="text-text-secondary font-mono text-xs uppercase tracking-wider leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
