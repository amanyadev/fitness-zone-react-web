import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "+919648745611";
  const instagramHandle = "k4fitnesszone";

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about K4 Fitness membership and services.");
    const cleanNumber = whatsappNumber.replace(/[\s+]/g, '');
    window.open(`https://api.whatsapp.com/send?phone=${cleanNumber}&text=${message}`, '_blank');
  };

  return (
    <footer className="bg-black border-t border-yellow-400/20 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-fc-fast italic text-yellow-400 mb-4">
                K4 FITNESS
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your body and mind at K4 Fitness. Join our community of dedicated individuals committed to achieving their fitness goals.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => window.open('https://facebook.com/k4fitnesszone', '_blank')}
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </button>
                <button 
                  onClick={() => window.open(`https://www.instagram.com/${instagramHandle}/`, '_blank')}
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 transform hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
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
                <p className="mt-4 cursor-pointer hover:text-yellow-400" onClick={() => window.location.href = `tel:${whatsappNumber}`}>{whatsappNumber}</p>
                <p className="cursor-pointer hover:text-yellow-400" onClick={() => window.location.href = 'mailto:info@k4fitness.com'}>info@k4fitness.com</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-yellow-400/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © {currentYear} <span className="font-fc-fast italic">K4 FITNESS ZONE</span>. All rights reserved.
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
