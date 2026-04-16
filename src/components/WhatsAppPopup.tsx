import { MessageCircle, X } from 'lucide-react';

const WHATSAPP_NUMBER = '917006248803';

interface WhatsAppPopupProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export default function WhatsAppPopup({ isOpen, onClose, message }: WhatsAppPopupProps) {
  if (!isOpen) return null;

  const openWhatsApp = () => {
    const whatsappMessage = message || 'Hi! I\'m interested in Kashmir tour packages. Please share more details.';
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-hidden" onClick={onClose}>
      <div 
        className="bg-bg-tertiary rounded-[32px] border border-white/5 max-w-md w-full p-8 shadow-2xl animate-scale-in relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-black text-white text-xl uppercase tracking-tighter">Direct Support</h3>
              <p className="font-mono text-[10px] text-accent uppercase tracking-widest mt-1">Chat on WhatsApp</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all hover:rotate-90"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message Preview */}
        <div className="bg-bg-primary/50 border border-border rounded-2xl p-6 mb-8 relative z-10">
          <p className="font-mono text-[10px] text-text-tertiary uppercase tracking-widest mb-3">Your message:</p>
          <p className="text-sm text-text-secondary leading-relaxed italic">
            "{message || 'Hi! I\'m interested in Kashmir tour packages. Please share more details.'}"
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={openWhatsApp}
          className="btn-primary w-full flex items-center justify-center gap-3 py-4 group relative z-10 overflow-hidden"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="font-bold uppercase tracking-widest text-sm">Open WhatsApp</span>
        </button>

        {/* Trust Badge */}
        <p className="font-mono text-[9px] text-center text-text-tertiary uppercase tracking-[0.2em] mt-6 relative z-10">
          // Instant response from our travel experts
        </p>
      </div>
    </div>
  );
}
