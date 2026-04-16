import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, Check, Shield, Clock, Star, Car } from 'lucide-react';
import Cabs from '../components/Cabs';
import { CallbackContext } from '../components/Layout';

interface FormData {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  time: string;
  vehicle: string;
}

const CabsPage: React.FC = () => {
  const navigate = useNavigate();
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [showBookingForm, setShowBookingForm] = useState(false);
  const handleCallback = onRequestCallback;
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    vehicle: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setShowBookingForm(false);
    handleCallback();
  };

  return (
    <div className="min-h-screen bg-bg-primary text-white">
      {/* Main Content */}
      <div className="pt-24 pb-20 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Fleet Section */}
          <section className="mb-24">
            <div className="mb-16 reveal">
              <span className="section-label mb-4">// LOGISTICS</span>
              <h2 className="heading-xl text-white mb-6">
                Our <span className="text-accent italic">Elite Fleet</span>
              </h2>
              <p className="text-text-secondary max-w-xl font-mono text-sm uppercase tracking-wider leading-relaxed">
                Choose from our diverse range of premium vehicles, curated for comfort, safety, and high-performance travel through the Himalayan terrain.
              </p>
            </div>

            {/* Cabs Component */}
            <Cabs showAll />
          </section>

          {/* Popular Routes */}
          <section className="mb-32">
            <div className="mb-16 reveal">
              <span className="section-label mb-4">// NAVIGATION</span>
              <h2 className="heading-xl text-white mb-6">
                Optimized <span className="text-accent italic">Routes</span>
              </h2>
              <p className="text-text-secondary max-w-xl font-mono text-sm uppercase tracking-wider leading-relaxed">
                Explore the most popular paths curated by our local navigators with real-time transit estimations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { route: 'Srinagar Airport to City Center', distance: '15 km', duration: '30 min' },
                { route: 'Srinagar to Gulmarg', distance: '50 km', duration: '2.5 hours' },
                { route: 'Srinagar to Pahalgam', distance: '95 km', duration: '3 hours' },
                { route: 'Srinagar to Sonamarg', distance: '75 km', duration: '2.5 hours' },
                { route: 'Gulmarg to Pahalgam', distance: '145 km', duration: '5 hours' },
                { route: 'Srinagar Local Sightseeing', distance: 'Varies', duration: 'Full Day' },
              ].map((trip, index) => (
                <div key={index} className="bg-bg-tertiary p-10 border border-border group hover:border-accent transition-all duration-300">
                  <div className="font-mono text-accent text-[10px] mb-6">0{index + 1} //</div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-6 group-hover:text-accent transition-colors">{trip.route}</h3>
                  <div className="flex flex-col gap-2 mb-8">
                    <div className="flex justify-between items-center border-b border-border/50 pb-2">
                      <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest">Est. Distance</span>
                      <span className="font-mono text-[10px] text-white font-bold">{trip.distance}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-mono text-[9px] text-text-tertiary uppercase tracking-widest">Est. Duration</span>
                      <span className="font-mono text-[10px] text-white font-bold">{trip.duration}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-bg-primary border border-accent/20 text-accent font-bold py-4 uppercase text-[10px] tracking-[0.2em] transition-all hover:bg-accent hover:text-bg-primary"
                  >
                    Initiate Booking
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="border-t border-border pt-32 pb-16">
            <div className="grid lg:grid-cols-4 gap-12">
              {[
                {
                  icon: Clock,
                  title: '24/7 Service',
                  description: 'Round-the-clock availability for all your transportation needs, including late-night and early-morning trips.'
                },
                {
                  icon: Star,
                  title: 'Expert Pilots',
                  description: 'Experienced, licensed, and courteous drivers who know the best routes and local attractions.'
                },
                {
                  icon: Shield,
                  title: 'Fair Tariffs',
                  description: 'Competitive pricing with no hidden charges. We offer the best value for your money.'
                },
                {
                  icon: Check,
                  title: 'Asset Safety',
                  description: 'Regularly maintained vehicles equipped with GPS tracking and all necessary safety features.'
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col">
                  <div className="w-12 h-12 border border-accent/20 bg-accent/5 flex items-center justify-center text-accent mb-8">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-4">{feature.title}</h3>
                  <p className="text-text-tertiary font-mono text-[11px] uppercase tracking-wider leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-bg-primary/95 backdrop-blur-xl flex items-center justify-center p-4 z-[100]">
          <div className="bg-bg-secondary border border-border max-w-2xl w-full overflow-hidden shadow-2xl">
            <div className="relative p-1 bg-gradient-to-r from-accent/50 via-border to-accent/50">
              <div className="bg-bg-secondary p-8 lg:p-12">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <span className="section-label mb-2">// FORM.03</span>
                    <h3 className="heading-md text-white">Secure Fleet Booking</h3>
                  </div>
                  <button
                    onClick={() => setShowBookingForm(false)}
                    className="h-10 w-10 border border-border flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">Identification</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all"
                        placeholder="NAME / ENTITY"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">Neural Node</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all"
                        placeholder="EMAIL@DOMAIN"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">Comm Line</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all"
                        placeholder="+91 MOBILE"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">Vehicle Spec</label>
                      <select
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all appearance-none cursor-pointer"
                        required
                      >
                        <option value="" className="bg-bg-secondary">SPECIFY CLASS</option>
                        <option value="swift-dzire" className="bg-bg-secondary">SWIFT DZIRE [4 SEATER]</option>
                        <option value="innova-crysta" className="bg-bg-secondary">INNOVA CRYSTA [7 SEATER]</option>
                        <option value="mahindra-thar" className="bg-bg-secondary">MAHINDRA THAR [4X4]</option>
                        <option value="tempo-traveller" className="bg-bg-secondary">TEMPO TRAVELLER [17-26 S]</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">Origin Point</label>
                      <input
                        type="text"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleInputChange}
                        className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all"
                        placeholder="PICKUP COORDINATES"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">Destination</label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all"
                        placeholder="DROPOFF POINT"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 pb-4">
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">Deployment Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all [&::-webkit-calendar-picker-indicator]:invert"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em]">Deployment Time</label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="bg-bg-primary border border-border px-6 py-4 text-white font-mono text-xs outline-none focus:border-accent transition-all [&::-webkit-calendar-picker-indicator]:invert"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary py-5 group"
                  >
                    <span>Finalize Deployment</span>
                  </button>
                </form>

                <div className="mt-8 flex flex-col items-center">
                  <p className="font-mono text-[9px] text-text-tertiary uppercase tracking-[0.2em] mb-4">Urgent Operations</p>
                  <a
                    href="https://wa.me/917006248803"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center gap-3 w-full py-4 border border-border text-white font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-bg-primary transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Communicate via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CabsPage;
