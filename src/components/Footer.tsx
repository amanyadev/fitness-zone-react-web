
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-400/20 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                K4 FITNESS
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your body and mind at K4 Fitness. Join our community of dedicated individuals committed to achieving their fitness goals.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
                  <span className="text-black font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
                  <span className="text-black font-bold">📸</span>
                </button>
                <button className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110">
                  <span className="text-black font-bold">💬</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-yellow-400 mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>123 Fitness Street</p>
                <p>Downtown District</p>
                <p>City, State 12345</p>
                <p className="mt-4">(555) 123-4567</p>
                <p>info@k4fitness.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-yellow-400/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} K4 Fitness. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
