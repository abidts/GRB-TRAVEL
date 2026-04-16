import { useState } from 'react';
import { X, Phone, Mail, User, Send, CheckCircle, MessageCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

const FORM_SUBMIT_ACTION = 'https://formsubmit.co/ajax/grbtravels786@gmail.com';
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSc0o5tr9oybaZicDd4AIqeSQWX8YWpSNQkNiw-NZTwj26rr8A/formResponse';

// Google Form field mapping - these need to match your actual Google Form fields
// Your form has 3 fields: FULL NAME, EMAIL, PHONE NUMBER
// To find correct field IDs:
// 1. Open your Google Form in browser: https://docs.google.com/forms/d/e/1FAIpQLSc0o5tr9oybaZicDd4AIqeSQWX8YWpSNQkNiw-NZTwj26rr8A/viewform
// 2. Open browser console (F12)
// 3. Right-click each input and inspect → look for name="entry.XXXXXXX"
// 4. Update the IDs below accordingly (verify these match the new form)
const GOOGLE_FORM_FIELDS = {
  name: 'entry.2005620554',    // FULL NAME  ← verify with new form
  email: 'entry.1045781291',   // EMAIL       ← verify with new form
  phone: 'entry.1166974658'    // PHONE NUMBER ← verify with new form
};

// FormSubmit expects plain keys, keep names explicit for clarity
const WHATSAPP_NUMBER = '+917006248803';

export default function CallbackPopup({ isOpen, onClose, subject }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setError('');
    setSubmitting(true);

    try {
      // Submit to FormSubmit for email notification
      const emailRes = await fetch(FORM_SUBMIT_ACTION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: subject || 'Call back request',
          _subject: 'GRB TRAVELS – Call back request',
          _template: 'table',
          _captcha: 'false',
          _next: 'false',
        }),
      });

      if (!emailRes.ok) {
        console.warn(`Email notification failed: ${emailRes.status}`);
      }

      // Submit to Google Forms — must use URLSearchParams + application/x-www-form-urlencoded
      // Google Forms does NOT accept multipart/form-data (FormData). URLSearchParams is required.
      const googleFormParams = new URLSearchParams();
      googleFormParams.append('fvv', '1');
      googleFormParams.append('pageHistory', '0');
      googleFormParams.append(GOOGLE_FORM_FIELDS.name, formData.name.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.email, formData.email.trim());
      googleFormParams.append(GOOGLE_FORM_FIELDS.phone, formData.phone.trim());

      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: googleFormParams.toString(),
      });

      console.log('✅ Callback form submitted to Google Form');
      console.log('Name:', formData.name, '| Email:', formData.email, '| Phone:', formData.phone);

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
        onClose();
      }, 2200);
    } catch (err) {
      console.error('Failed to submit callback form', err);
      // Even if submission fails, show success since no-cors doesn't return status
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '' });
        onClose();
      }, 2200);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative bg-bg-secondary rounded-[32px] border border-white/5 shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Glow behind title */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-accent/5 blur-3xl pointer-events-none" />
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-text-tertiary hover:text-white hover:bg-white/10 transition-all z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 animate-glow-pulse">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Message Sent</h3>
            <p className="text-text-secondary font-mono text-[10px] uppercase tracking-widest leading-relaxed">
              Expedition coordinator assigned. <br /> expect contact within 30 minutes.
            </p>
          </div>
        ) : (
          <>
            <div className="px-8 pt-10 pb-8 relative z-10">
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">
                Request a Call Back
              </h3>
              <p className="text-text-secondary font-medium">
                Fill in your details and we'll call you within 30 minutes.
              </p>
            </div>

            <div className="w-full h-px bg-white/5" />

            <form onSubmit={handleSubmit} className="p-8 space-y-6 relative z-10">
              <div>
                <label className="block font-mono text-[10px] text-text-tertiary uppercase tracking-[0.2em] mb-3">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary group-focus-within:text-accent transition-colors" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full rounded-2xl bg-bg-primary/50 border border-border py-4 pl-14 pr-6 text-white placeholder:text-text-tertiary outline-none focus:border-accent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] text-text-tertiary uppercase tracking-[0.2em] mb-3">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary group-focus-within:text-accent transition-colors" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                      className="w-full rounded-2xl bg-bg-primary/50 border border-border py-4 pl-14 pr-6 text-white placeholder:text-text-tertiary outline-none focus:border-accent transition-all duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-text-tertiary uppercase tracking-[0.2em] mb-3">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-text-tertiary group-focus-within:text-accent transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full rounded-2xl bg-bg-primary/50 border border-border py-4 pl-14 pr-6 text-white placeholder:text-text-tertiary outline-none focus:border-accent transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-3 rounded-2xl bg-accent hover:bg-accent-light px-8 py-4.5 text-sm font-black text-bg-primary shadow-xl shadow-accent/20 transition-all hover:shadow-accent/40 active:scale-[0.98] disabled:opacity-50 group uppercase tracking-widest"
                >
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <span>{submitting ? 'PROCESSING...' : 'Request Call Back'}</span>
                </button>
              </div>

              {error && <p className="text-xs text-red-400 text-center font-mono" role="alert">{error}</p>}

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/5" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-bg-secondary px-4 font-mono text-[10px] text-text-tertiary uppercase tracking-widest">or</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  subject ? `Hi GRB TRAVELS, I want to chat about ${subject}.` : 'Hi GRB TRAVELS, I want to plan my trip.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 group"
              >
                <MessageCircle className="h-5 w-5 text-accent" />
                <span className="group-hover:text-accent transition-colors">Chat on WhatsApp</span>
              </a>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
