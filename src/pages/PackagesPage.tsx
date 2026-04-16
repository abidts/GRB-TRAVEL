import { useContext } from 'react';
import { Clock, MapPin, Users, Star, Check, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CallbackContext } from '../components/Layout';
import GetItinerary from '../components/GetItinerary';

const packages = [
  {
    name: 'Kashmir Bliss',
    duration: '4 Days / 3 Nights',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Srinagar_to_Pahalgam_-_vrvvkbjk2k23iph_%2810%29.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 245,
    tag: 'Best Seller',
    tagColor: 'from-vintage-500 to-vintage-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Shikara'],
    slug: 'jk-bliss',
  },
  {
    name: 'Honeymoon Special',
    duration: '5 Days / 4 Nights',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg'],
    groupSize: '2',
    rating: '4.9',
    reviews: 189,
    tag: 'Romantic',
    tagColor: 'from-rose-500 to-pink-600',
    includes: ['Luxury Hotel', 'All Meals', 'Houseboat', 'Gondola'],
    slug: 'honeymoon-special',
  },
  {
    name: 'Grand J&K',
    duration: '7 Days / 6 Nights',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Leh'],
    groupSize: '2-10',
    rating: '5.0',
    reviews: 312,
    tag: 'Premium',
    tagColor: 'from-amber-500 to-orange-600',
    includes: ['5-Star', 'All Meals', 'Flights', 'Guide'],
    slug: 'grand-jk',
  },
  {
    name: 'Family Fun',
    duration: '6 Days / 5 Nights',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Dal Lake'],
    groupSize: '4-8',
    rating: '4.7',
    reviews: 198,
    tag: 'Family',
    tagColor: 'from-vintage-400 to-blue-600',
    includes: ['Family Rooms', 'All Meals', 'Pony Ride', 'Shikara'],
    slug: 'family-fun',
  },
  {
    name: 'Adventure Explorer',
    duration: '8 Days / 7 Nights',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    destinations: ['Srinagar', 'Sonmarg', 'Leh', 'Pangong', 'Nubra'],
    groupSize: '2-6',
    rating: '4.9',
    reviews: 156,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Camp + Hotel', 'All Meals', '4x4 Cab', 'Trek'],
    slug: 'adventure-explorer',
  },
  {
    name: 'Budget J&K',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg'],
    groupSize: '2-4',
    rating: '4.6',
    reviews: 320,
    tag: 'Budget',
    tagColor: 'from-vintage-400 to-vintage-600',
    includes: ['Hotel', 'Breakfast', 'Cab', 'Sightseeing'],
    slug: 'budget-jk',
  },
  {
    name: 'Short & Adventure Trip',
    duration: '3 Days / 2 Nights',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80',
    destinations: ['Srinagar', 'Gulmarg', 'Tangmarg'],
    groupSize: '2-6',
    rating: '4.8',
    reviews: 164,
    tag: 'Adventure',
    tagColor: 'from-orange-500 to-red-600',
    includes: ['Hotel', 'Meal', 'Transfer', 'Sightseeing', 'Activities'],
    slug: 'short-adventure-trip',
  },
  {
    name: 'Kashmir With Katra',
    duration: '6 Nights / 7 Days',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1772188951/katra_w2iqdq.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Katra'],
    groupSize: '2-8',
    rating: '4.9',
    reviews: 178,
    tag: 'Spiritual',
    tagColor: 'from-amber-500 to-orange-600',
    includes: ['Luxury Stay', 'Private Cab', 'All Meals', 'Transfer', 'Stay', 'Sightseeing'],
    slug: 'kashmir-with-katra',
  },
  {
    name: 'Kashmir With Ladakh',
    duration: '8 Nights / 9 Days',
    image: 'https://res.cloudinary.com/dveg0ai0n/image/upload/v1771496833/3_idiots_scooter_Pangong_Lake_Leh_dwwwvp.jpg',
    destinations: ['Srinagar', 'Gulmarg', 'Leh', 'Pangong', 'Nubra'],
    groupSize: '2-6',
    rating: '4.9',
    reviews: 203,
    tag: 'Premium',
    tagColor: 'from-purple-500 to-indigo-600',
    includes: ['Camels', 'Dunes', 'All Meals', 'Transfer', 'Stay', 'Sightseeing'],
    slug: 'kashmir-with-ladakh',
  },
];

export default function PackagesPage() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});

  return (
    <div className="min-h-screen bg-bg-primary text-white">
      <main className="pt-24 pb-16 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 reveal">
            <span className="section-label mb-4">// PACKAGES</span>
            <h1 className="heading-xl text-white mb-6">
              Curated <span className="text-accent italic">Expeditions</span>
            </h1>
            <p className="max-w-xl text-text-secondary font-mono text-sm uppercase tracking-wider leading-relaxed">
              High-performance travel itineraries designed for maximum immersion and comfort.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="group relative bg-bg-tertiary border border-border transition-all duration-500 hover:border-accent card-hover"
              >
                {/* Image with Link to Details Page */}
                <Link to={`/packages/${pkg.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />

                    {/* Tag */}
                    <span className="absolute top-4 left-4 bg-accent px-3 py-1 font-mono text-[10px] font-bold text-bg-primary uppercase tracking-[0.2em]">
                      {pkg.tag}
                    </span>

                    {/* Rating */}
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-md border border-border px-2 py-1 font-mono text-xs text-accent">
                      <Star className="h-3.5 w-3.5 fill-accent text-accent" />
                      <span>{pkg.rating}</span>
                    </div>

                    {/* Package name */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-black text-white uppercase tracking-tighter">{pkg.name}</h3>
                    </div>
                  </div>
                </Link>

                {/* Details */}
                <div className="p-8 pb-4">
                  {/* Duration & Group */}
                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    <span className="flex items-center gap-2 font-mono text-[10px] text-text-tertiary uppercase tracking-widest">
                      <Clock className="h-3.5 w-3.5 text-accent" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-2 font-mono text-[10px] text-text-tertiary uppercase tracking-widest">
                      <Users className="h-3.5 w-3.5 text-accent" />
                      {pkg.groupSize} People
                    </span>
                  </div>

                  {/* Destinations */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {pkg.destinations.slice(0, 3).map((d) => (
                      <span key={d} className="flex items-center gap-1 border border-border bg-bg-primary px-3 py-1 font-mono text-[9px] text-white uppercase tracking-widest">
                        <MapPin className="h-2.5 w-2.5 text-accent" />
                        {d}
                      </span>
                    ))}
                    {pkg.destinations.length > 3 && (
                      <span className="px-3 py-1 font-mono text-[9px] text-accent uppercase tracking-widest border border-accent/20">
                        +{pkg.destinations.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Includes */}
                  <div className="mb-8 grid grid-cols-2 gap-y-3">
                    {pkg.includes.slice(0, 4).map((item) => (
                      <span key={item} className="flex items-center gap-2 font-mono text-[9px] text-text-tertiary uppercase tracking-widest">
                        <Check className="h-3 w-3 text-accent" />
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button - Opens Popup */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      onRequestCallback(`${pkg.name} Package`);
                    }}
                    className="w-full btn-primary py-4 mb-4 flex items-center justify-center gap-3"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Inquire Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Get Itinerary CTA Section */}
          <div className="mt-24">
            <GetItinerary variant="half" />
          </div>

        </div>
      </main>
    </div>
  );
}
