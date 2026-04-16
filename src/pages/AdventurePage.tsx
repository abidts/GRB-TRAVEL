import { useContext } from 'react';
import { Mountain, Flame, Truck, Tent, Compass, Phone, Sparkles } from 'lucide-react';
import { CallbackContext } from '../components/Layout';
import WhatsAppCTA from '../components/WhatsAppCTA';

const adventures = [
  {
    icon: Mountain,
    title: 'Trekking',
    desc: 'Trek through the Great Lakes and stunning J&K Alpine meadows with expert guides.',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    difficulty: 'Moderate',
    duration: '3-7 Days',
    color: 'from-vintage-500 to-vintage-600',
  },
  {
    icon: Flame,
    title: 'Camp Fire',
    desc: 'Magical evenings under star-lit skies with bonfires, Kahwa, and local music.',
    image: 'https://images.unsplash.com/photo-1475483768296-6163e08872a1?w=800&q=80',
    difficulty: 'Easy',
    duration: '1 Night',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: Truck,
    title: 'Off Road',
    desc: 'Conquer rugged terrains of Ladakh and Zoji La pass in 4x4 vehicles.',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771576292/Jeep_Overland_h2qzjg.jpg',
    difficulty: 'Hard',
    duration: '2-5 Days',
    color: 'from-amber-500 to-orange-600',
  },
  {
    icon: Tent,
    title: 'Camping',
    desc: 'Luxury camping at Sonamarg meadows and beside pristine mountain streams.',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80',
    difficulty: 'Easy',
    duration: '1-3 Nights',
    color: 'from-vintage-400 to-blue-600',
  },
  {
    icon: Compass,
    title: 'Exploring',
    desc: 'Discover hidden waterfalls, secret valleys, and untouched villages.',
    image: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=800&q=80',
    difficulty: 'Moderate',
    duration: '1-4 Days',
    color: 'from-violet-500 to-purple-600',
  },
];

export default function AdventurePage() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});

  return (
    <div className="min-h-screen bg-bg-primary text-white">
      <main className="pt-24 pb-16 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 reveal">
            <span className="section-label mb-4">// ADRENALINE</span>
            <h1 className="heading-xl text-white mb-6">
              Primal <span className="text-accent italic">Expeditions</span>
            </h1>
            <p className="max-w-xl text-text-secondary font-mono text-sm uppercase tracking-wider leading-relaxed">
              Push your physiological boundaries through high-altitude challenges and rugged terrain navigation.
            </p>
          </div>

          {/* Adventures Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventures.map((adv) => (
              <div
                key={adv.title}
                className="group relative bg-bg-tertiary border border-border overflow-hidden transition-all duration-500 hover:border-accent card-hover"
              >
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={adv.image}
                    alt={adv.title}
                    className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute top-6 left-6 flex h-14 w-14 items-center justify-center bg-bg-primary/80 backdrop-blur-md border border-accent/20 text-accent transition-transform group-hover:scale-110 group-hover:border-accent">
                    <adv.icon className="h-6 w-6" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-8 left-8 right-8">
                    {/* Tags */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-accent px-3 py-1 font-mono text-[10px] font-bold text-bg-primary uppercase tracking-[0.2em]">
                        {adv.difficulty}
                      </span>
                      <span className="border border-border bg-black/40 backdrop-blur-md px-3 py-1 font-mono text-[10px] text-white uppercase tracking-widest">
                        {adv.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">{adv.title}</h3>
                    <p className="text-text-secondary font-mono text-xs uppercase tracking-tighter leading-relaxed line-clamp-2">{adv.desc}</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-8">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRequestCallback(`${adv.title} Adventure`);
                    }}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-3"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Inquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-24">
            <WhatsAppCTA message="Latest Adventure Activities & Offbeat Experiences" section="adventure" />
          </div>
        </div>
      </main>
    </div>
  );
}
