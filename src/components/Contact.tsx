import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const instagramHandle = "k4fitness"; // Replace with actual Instagram handle
  const gymLocation = [26.7760144, 80.9477836]; // Replace with actual gym coordinates

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 3000);
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+15551234567`;
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about K4 Fitness membership and services.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const openInstagram = () => {
    window.open(`https://www.instagram.com/${instagramHandle}`, '_blank');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-black overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,0,0.1),transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,0,0.1),transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div 
              className="inline-block bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-yellow-400 font-semibold">Get in Touch</span>
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              READY TO START YOUR
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                FITNESS JOURNEY?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Take the first step towards your fitness goals. Contact us today or visit our gym to begin your transformation.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Map */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Contact Information Card */}
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/40 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Visit Our Gym</h3>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4 cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => window.open(`https://maps.google.com/?q=${gymLocation[0]},${gymLocation[1]}`, '_blank')}
                  >
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-gray-400">
                        123 Fitness Street<br />
                        Downtown District<br />
                        City, State 12345
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Working Hours</h4>
                      <p className="text-gray-400">
                        Mon-Fri: 5:00 AM - 11:00 PM<br />
                        Sat-Sun: 6:00 AM - 10:00 PM
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="flex items-start space-x-4 cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    onClick={handlePhoneClick}
                  >
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <p className="text-gray-400">(555) 123-4567</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div 
                className="h-[300px] rounded-2xl overflow-hidden border border-yellow-400/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.542367435357!2d-0.09218674843746013!3d51.50510731882345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM1DCsDMwJzE4LjQiTiAwwrAwNScyNi4wIlc!5e0!3m2!1sen!2sus!4v1621436289000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="K4 Fitness Location"
                ></iframe>
              </motion.div>

              {/* Quick Contact Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  onClick={openWhatsApp}
                  className="group bg-green-600 hover:bg-green-700 text-white p-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-semibold">Chat on WhatsApp</span>
                </motion.button>

                <motion.button
                  onClick={openInstagram}
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Instagram className="w-6 h-6" />
                  <span className="font-semibold">Follow on Instagram</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div 
                className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="w-full px-4 py-3 bg-black/50 border border-yellow-400/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                        required
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="w-full px-4 py-3 bg-black/50 border border-yellow-400/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      required
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200"
                      required
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your fitness goals..."
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-yellow-400/20 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors duration-200 resize-none"
                      required
                    ></textarea>
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    className="group w-full bg-yellow-400 text-black py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-green-400 text-center mt-4"
                    >
                      Message sent successfully! We'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
