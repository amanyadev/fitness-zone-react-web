import { Check, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Calculate monthly equivalent and savings
  const calculateSavings = (totalPrice: number, months: number) => {
    const monthlyEquivalent = totalPrice / months;
    const regularMonthly = 2000;
    const savings = ((regularMonthly - monthlyEquivalent) / regularMonthly) * 100;
    return {
      monthlyEquivalent: Math.round(monthlyEquivalent),
      savings: Math.round(savings)
    };
  };

  const openWhatsApp = (message: string) => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "+919648745611"; // Format: country code + number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFreeTrial = () => {
    const message = "Hi! I'm interested in claiming my FREE one-day trial at K4 Fitness Zone. Please help me schedule my trial session. 💪";
    openWhatsApp(message);
  };

  const handlePlanPurchase = (planName: string, price: number, duration: string, features: string[]) => {
    const featuresList = features.slice(0, 3).join(", "); // Include first 3 features
    const message = `Hi! I'm interested in the ${planName} plan at K4 Fitness Zone! 💪\n\n` +
      `Plan Details:\n` +
      `• Duration: ${duration}\n` +
      `• Price: ₹${price}\n` +
      `• Key Features: ${featuresList}\n\n` +
      `Please help me get started with this membership plan.`;
    openWhatsApp(message);
  };

  const plans = [
    {
      name: "Monthly",
      price: 2000,
      duration: "month",
      months: 1,
      features: [
        "Full gym access",
        "Cardio area access",
        "Locker room access",
        "Basic fitness assessment",
        "Access to group classes"
      ],
      popular: false,
      savings: 0
    },
    {
      name: "Quarterly",
      price: 5000,
      duration: "3 months",
      months: 3,
      features: [
        "All Monthly features",
        "1 Personal training session",
        "Nutrition consultation",
        "Body composition analysis",
        "Fitness tracking app access"
      ],
      popular: false,
      savings: calculateSavings(5000, 3).savings
    },
    {
      name: "Half Yearly",
      price: 8000,
      duration: "6 months",
      months: 6,
      features: [
        "All Quarterly features",
        "3 Personal training sessions",
        "Monthly progress tracking",
        "Premium gym timing access",
        "Partner workout sessions"
      ],
      popular: true,
      savings: calculateSavings(8000, 6).savings
    },
    {
      name: "Annual",
      price: 13000,
      duration: "year",
      months: 12,
      features: [
        "All Half Yearly features",
        "6 Personal training sessions",
        "Quarterly photoshoot session",
        "VIP locker access",
        "Bring a friend (4x/month)"
      ],
      popular: false,
      savings: calculateSavings(13000, 12).savings
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(234,179,8,0.08),transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.08),transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Free Trial Banner */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-yellow-500 rounded-2xl p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/5" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Start Your Fitness Journey Today!
              </h3>
              <p className="text-white/90 text-sm md:text-base max-w-xl">
                Experience K4 Fitness Zone with our FREE one-day trial. Access all facilities, try our group classes, and meet our expert trainers.
              </p>
            </div>
            <motion.button
              onClick={handleFreeTrial}
              className="bg-black/90 text-yellow-500 px-6 py-3 rounded-xl font-semibold text-sm md:text-base 
                hover:bg-black transition-all duration-300 flex items-center space-x-2 shadow-lg 
                hover:shadow-black/50 border border-yellow-500/20 hover:border-yellow-500/50"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <Zap className="w-5 h-5" />
              <span>Claim Free Trial</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.div 
              className="inline-block bg-yellow-500/10 border border-yellow-500/20 rounded-full px-3 py-1 mb-4 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-yellow-500 font-semibold">Flexible Plans</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Choose Your{" "}
              <span className="text-yellow-500">
                Membership
              </span>
            </h2>
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your life with our flexible membership plans. The longer you commit, the more you save!
            </p>
          </motion.div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {plans.map((plan) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={`relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border ${
                  plan.popular ? 'border-yellow-500' : 'border-white/10'
                } rounded-2xl p-6 md:p-8 group hover:border-yellow-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 hover:-translate-y-1`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 inset-x-0 mx-auto w-max bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1.5 shadow-lg">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="text-center mb-6 relative">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 group-hover:scale-105 transition-transform">
                    <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-500 transition-colors">₹{plan.price}</span>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">/{plan.duration}</span>
                  </div>
                  {plan.savings > 0 && (
                    <div className="mt-2 bg-green-500/10 text-green-500 text-sm py-1 px-3 rounded-full inline-block group-hover:bg-green-500/20 transition-colors">
                      Save {plan.savings}%
                    </div>
                  )}
                  <p className="text-sm text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                    {plan.months > 1 ? `₹${calculateSavings(plan.price, plan.months).monthlyEquivalent}/month` : ''}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors">
                      <Check className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={() => handlePlanPurchase(plan.name, plan.price, plan.duration, plan.features)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base shadow-lg 
                    ${
                      plan.popular
                        ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    } hover:shadow-yellow-500/20 group-hover:scale-105 flex items-center justify-center space-x-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Started</span>
                  <Check className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Additional Benefits */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg border border-white/10 rounded-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">All Plans Include</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Modern Equipment",
                  "Expert Trainers",
                  "Clean Facilities",
                  "Shower Access",
                  "Towel Service",
                  "Drinking Water",
                  "Free WiFi",
                  "Parking Space"
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center justify-center space-x-2 text-gray-300">
                    <Check className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
