
const Services = () => {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your specific goals and fitness level.",
      price: "From $75/session",
      features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"]
    },
    {
      title: "Group Classes",
      description: "High-energy group workouts including HIIT, CrossFit, Yoga, and Strength Training.",
      price: "From $25/class",
      features: ["Variety of class types", "All fitness levels welcome", "Expert instruction", "Fun community atmosphere"]
    },
    {
      title: "Membership Plans",
      description: "Full access to all gym equipment, facilities, and basic group classes.",
      price: "From $49/month",
      features: ["24/7 gym access", "All equipment included", "Locker room facilities", "Free Wi-Fi"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              OUR 
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of services designed to meet your fitness needs and help you achieve your goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 group">
                <h3 className="text-2xl font-bold mb-4 text-orange-500">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform group-hover:scale-105">
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Fitness Journey?</h3>
              <p className="text-xl text-gray-300 mb-6">Contact us today for a free consultation and tour of our facilities.</p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
