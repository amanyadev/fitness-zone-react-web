
import { useState } from "react";
import { Phone } from "lucide-react";

const Contact = () => {
  const [mapToken, setMapToken] = useState("");
  const [showMap, setShowMap] = useState(false);

  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const instagramHandle = "k4fitness"; // Replace with actual Instagram handle

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about K4 Fitness membership and services.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open(`https://www.instagram.com/${instagramHandle}`, '_blank');
  };

  const handleShowMap = () => {
    if (mapToken.trim()) {
      setShowMap(true);
    } else {
      alert("Please enter your Mapbox token to view the map.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              GET IN 
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                TOUCH
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your fitness journey? Contact us today or visit our gym to get started.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20">
                <h3 className="text-2xl font-bold mb-6 text-orange-500">Visit Our Gym</h3>
                <div className="space-y-4 text-gray-300">
                  <p className="flex items-start">
                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      📍
                    </span>
                    <span>
                      123 Fitness Street<br />
                      Downtown District<br />
                      City, State 12345
                    </span>
                  </p>
                  
                  <p className="flex items-center">
                    <span className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      🕐
                    </span>
                    <span>
                      Mon-Fri: 5:00 AM - 11:00 PM<br />
                      Sat-Sun: 6:00 AM - 10:00 PM
                    </span>
                  </p>

                  <p className="flex items-center">
                    <Phone className="w-6 h-6 text-orange-500 mr-3" />
                    <span>(555) 123-4567</span>
                  </p>
                </div>
              </div>

              {/* Social Media & Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span className="text-xl">💬</span>
                  <span>WhatsApp</span>
                </button>

                <button
                  onClick={openInstagram}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span className="text-xl">📸</span>
                  <span>Instagram</span>
                </button>
              </div>

              {/* Map Token Input */}
              <div className="bg-black/50 p-6 rounded-lg border border-orange-500/20">
                <h4 className="text-lg font-semibold mb-4 text-orange-500">View Location Map</h4>
                <p className="text-gray-300 text-sm mb-4">
                  To display the interactive map, please enter your Mapbox public token below:
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    placeholder="Enter Mapbox token..."
                    value={mapToken}
                    onChange={(e) => setMapToken(e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none"
                  />
                  <button
                    onClick={handleShowMap}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                  >
                    Show Map
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">mapbox.com</a>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-black/50 p-8 rounded-lg border border-orange-500/20">
              <h3 className="text-2xl font-bold mb-6 text-orange-500">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-200"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-200"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-200"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-200"
                />
                
                <textarea
                  placeholder="Tell us about your fitness goals..."
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors duration-200 resize-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map Display */}
          {showMap && (
            <div className="mt-12">
              <div className="bg-black/50 p-4 rounded-lg border border-orange-500/20">
                <h3 className="text-xl font-bold mb-4 text-orange-500">Our Location</h3>
                <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                  <p className="text-gray-400">
                    Interactive Mapbox map would be displayed here with token: {mapToken.substring(0, 20)}...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
