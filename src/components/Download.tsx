import { useState } from 'react';
import { Download as DownloadIcon, Apple, X, MessageCircle } from 'lucide-react';

function LicensePopup({ onClose }: { onClose: () => void }) {
  const handleWhatsApp = () => {
    const phoneNumber = '919217758442';
    const message = 'Hi, I just downloaded Zyqora and need help with my license key!';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-gradient-to-b from-gray-900 to-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-white/10">
              <DownloadIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Download Started!</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-6 space-y-5">
          <ul className="space-y-3">
            {[
              { step: '1', color: 'from-cyan-500 to-blue-500', text: 'Install Zyqora on your Windows PC.' },
              { step: '2', color: 'from-violet-500 to-purple-500', text: 'Open the app — it will show you a unique Device ID.' },
              { step: '3', color: 'from-cyan-500 to-violet-500', text: 'Complete your purchase and share the Device ID with our support team.' },
              { step: '4', color: 'from-green-500 to-emerald-500', text: 'We\'ll generate your License Key based on your plan and device limit.' },
              { step: '5', color: 'from-yellow-500 to-orange-500', text: 'Activate the key — your license stays valid for the selected duration.' },
            ].map(({ step, color, text }) => (
              <li key={step} className="flex items-start gap-3">
                <span className={`shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white text-xs font-bold`}>
                  {step}
                </span>
                <span className="text-gray-300 text-sm leading-relaxed">{text}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-white/5 border border-white/10 p-3 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <p className="text-gray-400 text-xs">Connect on WhatsApp to share your Device ID and get your key instantly.</p>
          </div>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Connect on WhatsApp
          </button>

          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:border-white/20 text-sm transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Download() {
  const [showPopup, setShowPopup] = useState(false);

  const handleWindowsDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://github.com/syed-roshan01/zyqora-site/releases/download/v1.0.1/Zyqora.Setup.1.0.1.exe';
    link.download = 'Zyqora Setup 1.0.1.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPopup(true);
  };

  return (
    <>
      {showPopup && <LicensePopup onClose={() => setShowPopup(false)} />}

      <section id="download" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 px-4">
              Download Zyqora
            </h2>
            <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Download Zyqora software and start automating your WhatsApp campaigns instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch max-w-2xl mx-auto px-4">
            <button
              onClick={handleWindowsDownload}
              className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-xl overflow-hidden flex-1 sm:min-w-[240px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse"></div>
              <div className="relative flex items-center justify-center gap-3 text-white">
                <DownloadIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm opacity-90">Download for</div>
                  <div className="text-base sm:text-lg font-bold">Windows</div>
                </div>
              </div>
            </button>

            <button className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-xl overflow-hidden flex-1 sm:min-w-[240px]">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 blur-xl sm:blur-2xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="relative flex items-center justify-center gap-3 text-white">
                <Apple className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <div className="text-xs sm:text-sm opacity-90">Download for</div>
                  <div className="text-base sm:text-lg font-bold">macOS</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
