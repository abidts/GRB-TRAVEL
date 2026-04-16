import { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { ChevronLeft, ChevronRight, Phone, Play, Sparkles, Send } from 'lucide-react';
import { CallbackContext } from './Layout';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1768147765107-5eef8e032a62?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Paradise on Earth',
    subtitle: 'J&K Awaits You',
    desc: 'Embark on an unforgettable journey through majestic valleys, pristine lakes, and snow-capped mountains.',
    cta: 'Plan Your Trip',
  },
  {
    image: 'https://images.unsplash.com/photo-1651509094074-e8acaeb84d8f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Gulmarg Magic',
    subtitle: 'Ski & Snow Adventures',
    desc: "Experience world-class skiing, Asia's highest gondola, and breathtaking alpine meadows.",
    cta: 'Explore Gulmarg',
  },
  {
    image: 'https://images.unsplash.com/photo-1599493867961-1bc9808137a9?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Pahalgam Beauty',
    subtitle: "Nature's Masterpiece",
    desc: 'Lush green meadows, crystal rivers, pony rides, and the gateway to Amarnath.',
    cta: 'Discover Pahalgam',
  },
  {
    image: 'https://images.unsplash.com/photo-1701957494296-a42832ab0a17?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Golden Sonmarg',
    subtitle: 'Gateway to Ladakh',
    desc: 'Golden meadows, glaciers, and landscapes that feel like paintings come to life.',
    cta: 'Visit Sonmarg',
  },
  {
    image: 'https://images.unsplash.com/photo-1566837497312-7be7830ae9b1?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Kashmir Valley',
    subtitle: 'Land of Serenity',
    desc: "Experience the tranquility of Kashmir's legendary valleys and pristine nature.",
    cta: 'Explore Kashmir',
  },
];

export default function HeroSlider() {
  const onRequestCallback = useContext(CallbackContext) || (() => {});
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [dateFocused, setDateFocused] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: '',
    phone: '',
    address: '',
    message: '',
    email: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateFocus = () => setDateFocused(true);
  const handleDateBlur = () => setDateFocused(false);

  // Country codes list (unique entries only)
  const countryCodes = [
    { code: '+91', label: '🇮🇳 IN' },
    { code: '+1', label: '🇺🇸 US' },
    { code: '+44', label: '🇬🇧 UK' },
    { code: '+61', label: '🇦🇺 AU' },
    { code: '+971', label: '🇦🇪 AE' },
    { code: '+966', label: '🇸🇦 SA' },
    { code: '+968', label: '🇴🇲 OM' },
    { code: '+974', label: '🇶🇦 QA' },
    { code: '+965', label: '🇰🇼 KW' },
    { code: '+973', label: '🇧🇭 BH' },
    { code: '+49', label: '🇩🇪 DE' },
    { code: '+33', label: '🇫🇷 FR' },
    { code: '+39', label: '🇮🇹 IT' },
    { code: '+34', label: '🇪🇸 ES' },
    { code: '+81', label: '🇯🇵 JP' },
    { code: '+86', label: '🇨🇳 CN' },
    { code: '+82', label: '🇰🇷 KR' },
    { code: '+65', label: '🇸🇬 SG' },
    { code: '+60', label: '🇲🇾 MY' },
    { code: '+66', label: '🇹🇭 TH' },
    { code: '+62', label: '🇮🇩 ID' },
    { code: '+63', label: '🇵🇭 PH' },
    { code: '+84', label: '🇻🇳 VN' },
    { code: '+92', label: '🇵🇰 PK' },
    { code: '+880', label: '🇧🇩 BD' },
    { code: '+94', label: '🇱🇰 LK' },
    { code: '+977', label: '🇳🇵 NP' },
    { code: '+975', label: '🇧🇹 BT' },
    { code: '+960', label: '🇲🇻 MV' },
    { code: '+27', label: '🇿🇦 ZA' },
    { code: '+234', label: '🇳🇬 NG' },
    { code: '+254', label: '🇰🇪 KE' },
    { code: '+20', label: '🇪🇬 EG' },
    { code: '+55', label: '🇧🇷 BR' },
    { code: '+52', label: '🇲🇽 MX' },
    { code: '+54', label: '🇦🇷 AR' },
    { code: '+56', label: '🇨🇱 CL' },
    { code: '+57', label: '🇨🇴 CO' },
    { code: '+47', label: '🇳🇴 NO' },
    { code: '+46', label: '🇸🇪 SE' },
    { code: '+45', label: '🇩🇰 DK' },
    { code: '+358', label: '🇫🇮 FI' },
    { code: '+31', label: '🇳🇱 NL' },
    { code: '+32', label: '🇧🇪 BE' },
    { code: '+41', label: '🇨🇭 CH' },
    { code: '+43', label: '🇦🇹 AT' },
    { code: '+48', label: '🇵🇱 PL' },
    { code: '+7', label: '🇷🇺 RU' },
    { code: '+380', label: '🇺🇦 UA' },
    { code: '+90', label: '🇹🇷 TR' },
    { code: '+30', label: '🇬🇷 GR' },
    { code: '+351', label: '🇵🇹 PT' },
    { code: '+420', label: '🇨🇿 CZ' },
    { code: '+36', label: '🇭🇺 HU' },
    { code: '+40', label: '🇷🇴 RO' },
    { code: '+353', label: '🇮🇪 IE' },
    { code: '+64', label: '🇳🇿 NZ' },
    { code: '+972', label: '🇮🇱 IL' },
    { code: '+98', label: '🇮🇷 IR' },
    { code: '+964', label: '🇮🇶 IQ' },
    { code: '+961', label: '🇱🇧 LB' },
    { code: '+963', label: '🇸🇾 SY' },
    { code: '+962', label: '🇯🇴 JO' },
    { code: '+212', label: '🇲🇦 MA' },
    { code: '+213', label: '🇩🇿 DZ' },
    { code: '+216', label: '🇹🇳 TN' },
    { code: '+249', label: '🇸🇩 SD' },
    { code: '+251', label: '🇪🇹 ET' },
    { code: '+256', label: '🇺🇬 UG' },
    { code: '+255', label: '🇹🇿 TZ' },
    { code: '+250', label: '🇷🇼 RW' },
  ];

  // Google Form field mappings
  const GOOGLE_FORM_FIELDS = {
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    phone: 'entry.1166974658',
    message: 'entry.839337160',
    guests: 'entry.745970777',
    address: 'entry.48943999',
    dateYear: 'entry.1065046570_year',
    dateMonth: 'entry.1065046570_month',
    dateDay: 'entry.1065046570_day',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);

    try {
      // Submit to FormSubmit for email notification
      const emailRes = await fetch('https://formsubmit.co/ajax/grbtravels786@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: countryCode + formData.phone,
          date: formData.date,
          guests: formData.guests,
          address: formData.address,
          message: formData.message,
          subject: 'New Trip Inquiry from Website',
          _subject: 'GRB TRAVELS – New Trip Inquiry',
          _template: 'table',
          _captcha: 'false',
          _next: 'false',
        }),
      });

      if (!emailRes.ok) {
        console.warn(`Email notification failed: ${emailRes.status}`);
      }

      // Submit to Google Forms
      const googleFormParams = new URLSearchParams();
      const fullPhone = `${countryCode}${formData.phone}`.replace(/\s+/g, '');

      googleFormParams.append('fvv', '1');
      googleFormParams.append('pageHistory', '0');
      googleFormParams.append('fbzx', Math.floor(Math.random() * -9e15).toString());
      googleFormParams.append('draftResponse', '[null,null,"' + Math.floor(Math.random() * 9e15).toString() + '"]');
      googleFormParams.append(GOOGLE_FORM_FIELDS.name, formData.name.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.phone, fullPhone);

      if (formData.date) {
        const dateObj = new Date(formData.date);
        googleFormParams.append(GOOGLE_FORM_FIELDS.dateYear, dateObj.getFullYear().toString());
        googleFormParams.append(GOOGLE_FORM_FIELDS.dateMonth, (dateObj.getMonth() + 1).toString());
        googleFormParams.append(GOOGLE_FORM_FIELDS.dateDay, dateObj.getDate().toString());
      }

      googleFormParams.append(GOOGLE_FORM_FIELDS.guests, formData.guests.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.email, formData.email.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.address, formData.address.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.message, formData.message.trim());

      console.log('Submitting Plan Your Trip — Phone:', fullPhone);

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLScjwudFNg5Di3hqd8iShpQjCah7oUPDFk7Xv9r0H2RNsLxraQ/formResponse', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: googleFormParams.toString(),
      });

      console.log('✅ Plan Your Trip form submitted to Google Form');

      setSubmitted(true);
      setFormData({ name: '', date: '', guests: '', phone: '', address: '', message: '', email: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitted(true);
      setFormData({ name: '', date: '', guests: '', phone: '', address: '', message: '', email: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current === 0 ? slides.length - 1 : current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) next();
    if (isRightSwipe) prev();
  };

  return (
    <section
      id="home"
      ref={sliderRef}
      className={`relative min-h-[600px] ${formOpen ? 'h-auto pb-8' : 'min-h-[calc(100svh-4rem)]'} lg:min-h-[calc(100svh-4rem)] lg:h-auto`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            i === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={`h-full w-full object-cover ${i === current ? 'img-zoom-in' : ''}`}
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950 z-11" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/40 z-11" />
        </div>
      ))}

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Hero Text */}
            <div className="max-w-2xl">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ${
                    i === current
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8 absolute pointer-events-none'
                  }`}
                >
                  {i === current && (
                    <>
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 border border-accent/30 bg-accent/5 px-4 py-2 text-xs font-mono uppercase tracking-widest text-accent backdrop-blur-sm mb-6 animate-fade-in-down">
                        <Sparkles className="h-3.5 w-3.5 fill-accent/40 text-accent" />
                        <span>{slide.subtitle}</span>
                      </div>

                      {/* Title */}
                      <h1 className="heading-xl text-white text-shadow-lg leading-[0.95] animate-fade-in-up">
                        <span className="block">{slide.title.split(' ')[0]}</span>
                        <span className="text-accent italic">{slide.title.split(' ').slice(1).join(' ')}</span>
                      </h1>

                      {/* Description */}
                      <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-text-secondary text-shadow leading-relaxed max-w-xl animate-fade-in-up delay-150">
                        {slide.desc}
                      </p>

                      {/* CTA Buttons */}
                      <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-4 animate-fade-in-up delay-300">
                        <button
                          onClick={() => onRequestCallback(slide.cta)}
                          className="btn-primary flex items-center justify-center gap-3 shadow-xl shadow-accent/20"
                        >
                          <Phone className="h-5 w-5" />
                          <span>Request Callback</span>
                        </button>
                        <a
                          href="#packages"
                          className="btn-outline flex items-center justify-center gap-3 backdrop-blur-sm"
                        >
                          <Play className="h-5 w-5 text-accent" />
                          {slide.cta}
                        </a>
                        {/* Mobile Form Toggle */}
                        <button
                          onClick={() => setFormOpen(!formOpen)}
                          className="lg:hidden flex items-center justify-center gap-2 border border-accent/20 bg-accent/5 px-6 py-4 text-sm font-mono uppercase tracking-wider text-accent backdrop-blur-sm"
                        >
                          <Send className="h-5 w-5" />
                          <span>{formOpen ? 'Close Form' : 'Plan Trip'}</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Form Section (Mobile Dropdown and Desktop Sidebar) */}
            <div className={`${formOpen ? 'block' : 'hidden md:block'} lg:block w-full max-w-md mx-auto lg:ml-auto`}>
              <div className="bg-bg-tertiary/10 backdrop-blur-xl border border-border p-4 sm:p-6 lg:p-7 animate-fade-in-up delay-300">
                <div className="mb-4">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase block mb-1">// ENQUIRY</span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">Plan Your Trip</h3>
                  <div className="w-12 h-0.5 bg-accent mt-2" />
                </div>

                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-3 border border-accent/30 bg-accent/10 flex items-center justify-center animate-pulse-glow">
                      <Send className="h-8 w-8 text-accent" />
                    </div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Message Sent</h4>
                    <p className="text-text-secondary font-mono text-[10px]">Our team will reach out to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="NAME *"
                        required
                        className="w-full px-4 py-3 bg-bg-primary/50 border border-border text-white font-mono placeholder:text-text-tertiary outline-none focus:border-accent transition text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type={dateFocused || formData.date ? 'date' : 'text'}
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          onFocus={handleDateFocus}
                          onBlur={handleDateBlur}
                          placeholder="ARRIVAL DATE *"
                          required
                          className="w-full px-4 py-3 bg-bg-primary/50 border border-border text-white font-mono placeholder:text-text-tertiary outline-none focus:border-accent transition text-xs [color-scheme:dark]"
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          placeholder="GUESTS *"
                          min="1"
                          required
                          className="w-full px-4 py-3 bg-bg-primary/50 border border-border text-white font-mono placeholder:text-text-tertiary outline-none focus:border-accent transition text-xs"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <select
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="px-2 py-3 bg-bg-primary/50 border border-border text-white font-mono text-[10px] outline-none focus:border-accent transition cursor-pointer"
                        >
                          {countryCodes.map((country) => (
                            <option key={country.code} value={country.code} className="bg-bg-primary text-white">
                              {country.label} {country.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="PHONE *"
                          pattern="[0-9]{10}"
                          required
                          className="flex-1 px-4 py-3 bg-bg-primary/50 border border-border text-white font-mono placeholder:text-text-tertiary outline-none focus:border-accent transition text-xs"
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="EMAIL ADDRESS *"
                        required
                        className="w-full px-4 py-3 bg-bg-primary/50 border border-border text-white font-mono placeholder:text-text-tertiary outline-none focus:border-accent transition text-xs"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="RESIDENTIAL CITY/ADDRESS *"
                        required
                        className="w-full px-4 py-3 bg-bg-primary/50 border border-border text-white font-mono placeholder:text-text-tertiary outline-none focus:border-accent transition text-xs"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="MESSAGE/REQUIREMENTS *"
                        rows={3}
                        required
                        className="w-full px-4 py-3 bg-bg-primary/50 border border-border text-white font-mono placeholder:text-text-tertiary outline-none focus:border-accent transition text-xs resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-light px-4 py-4 text-xs font-bold text-bg-primary uppercase tracking-[0.2em] transition-all disabled:opacity-60 disabled:cursor-not-allowed group shadow-lg shadow-accent/20"
                    >
                      {submitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin" />
                          <span>SENDING...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND ENQUIRY</span>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110 tap-scale"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110 tap-scale"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-20 sm:bottom-0 left-0 right-0 z-20 h-1 bg-white/5">
        <div
          className="h-full bg-accent transition-all duration-[6000ms] ease-linear"
          style={{ width: `${((current + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
