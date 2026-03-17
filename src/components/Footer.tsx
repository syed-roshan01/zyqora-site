import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 border-t border-white/10 bg-gradient-to-b from-black to-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 justify-items-center lg:justify-items-start">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img
                src="/zyqora-logo-.png"
                alt="Zyqora"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Powerful WhatsApp automation platform helping businesses scale their communication and marketing efforts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#download" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Download
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:support@zyqora.in"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    support@zyqora.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <a
                    href="tel:+919972028567"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    +91 99720 28567
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Office</p>
                  <p className="text-white text-sm leading-relaxed">
                    100 Feet Rd, HAL 2nd Stage,<br />
                    Indiranagar, Bengaluru,<br />
                    Karnataka 560038
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zyqora. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet-500/5 to-transparent pointer-events-none"></div>
    </footer>
  );
}
