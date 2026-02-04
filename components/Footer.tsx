export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">💬</span>
              </div>
              <span className="text-white font-bold text-xl">Agency</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Turn every call into revenue with 24/7 automated answering.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">24/7 Call Answering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Auto Booking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">ROI Calculator</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Free Trial</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Help Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Get Started</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Schedule Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Contact Sales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">(555) 123-4567</a></li>
            </ul>
          </div>
        </div>

        {/* Trust Section */}
        <div className="glass-card p-6 rounded-2xl mb-8 backdrop-blur-sm border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">500+ Businesses Trust Us</span>
            </div>
            <div className="flex items-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-cyan-400 font-bold">99.8%</div>
                <div className="text-gray-400 text-xs">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-bold">2.5M+</div>
                <div className="text-gray-400 text-xs">Calls</div>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-bold">4.9★</div>
                <div className="text-gray-400 text-xs">Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            © {currentYear} Agency. Turning missed calls into revenue since 2020.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
