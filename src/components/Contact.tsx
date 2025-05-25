import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Send, Instagram, Mail, AlertCircle } from "lucide-react";

interface ContactInfo {
  primaryPhone: string;
  secondaryPhone: string;
  email: string;
  instagram: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  workingHours: string;
}

const contactInfo: ContactInfo = {
  primaryPhone: "+919648745611",
  secondaryPhone: "+918756477778",
  email: "info@k4fitness.com",
  instagram: "k4fitnesszone",
  address: "Sector 6A, K.K. Complex, In front of Akash Enclave, Vrindavan Colony, Telibagh, Lucknow, Uttar Pradesh 226002",
  coordinates: {
    lat: 26.776011730366946,
    lng: 80.95041117359494
  },
  workingHours: "Monday - Saturday: 5:00 AM - 10:00 AM, 5:00 PM - 10:00 PM\nSunday: Closed"
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  // Contact Action Handlers
  const handlePhoneClick = (phoneNumber: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = encodeURIComponent("Hi! I'm interested in learning more about K4 Fitness membership and services.");
    let cleanNumber = contactInfo.primaryPhone.replace(/\D/g, '');
    if (!cleanNumber.startsWith('91')) {
      cleanNumber = '91' + cleanNumber;
    }
    console.log('WhatsApp number:', cleanNumber);
    const url = `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${message}`;
    console.log('WhatsApp URL:', url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const instagramUrl = `https://www.instagram.com/${contactInfo.instagram.replace('@', '')}/`;
    console.log('Instagram URL:', instagramUrl);
    window.open(instagramUrl, '_blank', 'noopener,noreferrer');
  };

  const handleMapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const { lat, lng } = contactInfo.coordinates;
    window.open(`https://maps.google.com/?q=${lat},${lng}`, '_blank');
  };

  // Form Handlers
  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof FormData]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowError(false);
    
    if (!validateForm()) {
      setShowError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,0,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,0,0.1),transparent_70%)]" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants} className="inline-block bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1 mb-4">
              <span className="text-yellow-400 font-semibold">Get in Touch</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              READY TO START YOUR{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                FITNESS JOURNEY?
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take the first step towards your fitness goals. Contact us today or visit our gym to begin your transformation.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & Map */}
            <div className="space-y-8">
              {/* Social Media Quick Links */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/919648745611?text=${encodeURIComponent("Hi! I'm interested in learning more about K4 Fitness membership plans.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 hover:shadow-lg"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-6 h-6 fill-current transform group-hover:scale-110 transition-transform duration-300"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="font-semibold transform group-hover:translate-x-1 transition-transform duration-300">
                    Chat on WhatsApp
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/k4fitnesszone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg"
                >
                  <Instagram className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold transform group-hover:translate-x-1 transition-transform duration-300">
                    Follow on Instagram
                  </span>
                </a>
              </div>

              {/* Contact Information Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Contact Information</h3>
                <div className="space-y-6">
                  {/* Location */}
                  <a
                    href={`https://maps.google.com/?q=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group hover:cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors">
                      <MapPin className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                        {contactInfo.address}
                      </p>
                    </div>
                  </a>

                  {/* Phone Numbers */}
                  <div className="space-y-4">
                    <a
                      href={`tel:${contactInfo.primaryPhone}`}
                      className="flex items-start space-x-4 group hover:cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors">
                        <Phone className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Phone</h4>
                        <p className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                          {contactInfo.primaryPhone}
                        </p>
                        <a
                          href={`tel:${contactInfo.secondaryPhone}`}
                          className="block text-gray-400 hover:text-yellow-400 transition-colors mt-1"
                        >
                          {contactInfo.secondaryPhone}
                        </a>
                      </div>
                    </a>
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start space-x-4 group hover:cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/30 transition-colors">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <p className="text-gray-400 group-hover:text-yellow-400 transition-colors">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>

                  {/* Working Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-yellow-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Working Hours</h4>
                      <p className="text-gray-400 whitespace-pre-line">
                        {contactInfo.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <a
                href={`https://maps.google.com/?q=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-[300px] rounded-2xl overflow-hidden border border-yellow-400/20 relative group hover:border-yellow-400/40 transition-all duration-300"
              >
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.2936465843374!2d${contactInfo.coordinates.lng}!3d${contactInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ2JzMzLjYiTiA4MMKwNTYnNTIuMCJF!5e0!3m2!1sen!2sin!4v1621436289000!5m2!1sen!2sin`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="K4 Fitness Location"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </a>
            </div>

            {/* Right Column - Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative"
            >
              <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send us a Message</h3>
                
                {showError && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-500">Please fix the errors in the form and try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                          formErrors.firstName ? 'border-red-500' : 'border-yellow-400/20 focus:border-yellow-400'
                        }`}
                      />
                      {formErrors.firstName && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                          formErrors.lastName ? 'border-red-500' : 'border-yellow-400/20 focus:border-yellow-400'
                        }`}
                      />
                      {formErrors.lastName && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                        formErrors.email ? 'border-red-500' : 'border-yellow-400/20 focus:border-yellow-400'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 ${
                        formErrors.phone ? 'border-red-500' : 'border-yellow-400/20 focus:border-yellow-400'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.phone}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your fitness goals..."
                      rows={4}
                      className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none transition-colors duration-200 resize-none ${
                        formErrors.message ? 'border-red-500' : 'border-yellow-400/20 focus:border-yellow-400'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                    )}
                  </div>

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
                      className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mt-4"
                    >
                      <p className="text-green-500 text-center">
                        Message sent successfully! We'll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
