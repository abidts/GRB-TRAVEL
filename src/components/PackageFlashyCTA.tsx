import { MessageCircle, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface Props {
  className?: string;
}

const WHATSAPP_NUMBER = '917006248803';

export default function PackageFlashyCTA({ className = '' }: Props) {
  const whatsappMessage = encodeURIComponent(
    "Hi GRB TRAVELS, I'm interested in your latest customized Kashmir tour packages. Please share more details."
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className={`relative mt-6 sm:mt-20 reveal ${className}`}>
      <div className="relative overflow-hidden bg-[#0a1019] rounded-[40px] border border-white/5 p-8 md:p-16 lg:p-20 shadow-2xl">
        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Limited Edition Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 shadow-[0_0_20px_rgba(77,182,172,0.15)]">
              <Zap className="w-4 h-4 text-accent fill-accent/20" />
              <span className="text-[10px] md:text-xs font-mono font-bold text-accent tracking-[0.2em] uppercase">
                Limited Edition Offer
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter">
                Latest & <span className="text-accent italic">Customized</span>
                <br />
                Tour Packages
              </h2>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-xl font-medium">
              Experience the soul of Kashmir with itineraries tailored specifically to your dreams. 
              From hidden gems to luxury retreats, we craft it all.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#FFD700]" />
                <span className="text-[#FFD700] font-mono text-xs uppercase tracking-widest font-bold">Instant Customization</span>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Button */}
          <div className="flex flex-col items-center lg:items-end space-y-6">
            {/* Get Itinerary Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-sky-400 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-accent to-sky-500 text-bg-primary font-black text-lg uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Get Itinerary</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            {/* Online Status */}
            <p className="text-text-tertiary text-xs italic font-medium tracking-wide">
              Expert travel consultants online now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
