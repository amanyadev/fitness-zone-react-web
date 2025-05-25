import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Dumbbell, Users, Target } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description: "State-of-the-art fitness machines"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Professional guidance & support"
    },
    {
      icon: Target,
      title: "Custom Programs",
      description: "Tailored to your goals"
    }
  ];

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,0,0.1),transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,0,0.1),transparent_70%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-3 md:space-y-4">
              <motion.div 
                className="inline-block bg-yellow-400/10 border border-yellow-400/20 rounded-full px-3 py-1 md:px-4 md:py-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-yellow-400 font-fc-fast italic text-sm md:text-base">Welcome to K4 FITNESS</span>
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                variants={itemVariants}
              >
                TRANSFORM
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"
                  variants={itemVariants}
                >
                  YOUR LIMITS
                </motion.span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-base md:text-xl text-gray-300 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              Experience a revolutionary fitness journey at K4 Fitness. Where cutting-edge equipment meets expert guidance, and your goals become achievements.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToContact}
                className="group bg-yellow-400 text-black px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span>START NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-yellow-400/50 text-yellow-400 px-6 py-3 md:px-8 md:py-4 rounded-xl text-base md:text-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span>EXPLORE MORE</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-2 md:gap-4 pt-6 md:pt-8 border-t border-yellow-400/20"
              variants={containerVariants}
            >
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-xs md:text-sm text-gray-400">Active Members</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-xs md:text-sm text-gray-400">Expert Trainers</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-xs md:text-sm text-gray-400">Success Rate</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Main Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden aspect-[4/3] z-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent z-[1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fitness Training"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
              />
            </motion.div>

            {/* Feature Cards */}
            <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 sm:px-0 z-[2]">
              <motion.div 
                className="bg-black/80 backdrop-blur-xl border border-yellow-400/20 rounded-xl p-3 sm:p-4 md:p-6 grid grid-cols-3 gap-2 sm:gap-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center group cursor-pointer relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <div 
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-1.5 sm:mb-2 md:mb-3 transition-colors duration-300 group-hover:bg-yellow-400/30"
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-[10px] sm:text-xs md:text-sm font-semibold text-white mb-0.5 sm:mb-1 transition-colors duration-300 group-hover:text-yellow-400">
                        {feature.title}
                      </h3>
                      <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
