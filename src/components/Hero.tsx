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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div 
                className="inline-block bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-yellow-400 font-semibold">Welcome to K4 Fitness</span>
              </motion.div>
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
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
              className="text-xl text-gray-300 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              Experience a revolutionary fitness journey at K4 Fitness. Where cutting-edge equipment meets expert guidance, and your goals become achievements.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToContact}
                className="group bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span>START NOW</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="group border-2 border-yellow-400/50 text-yellow-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-400/10 transition-all duration-300 flex items-center justify-center space-x-2"
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
              className="grid grid-cols-3 gap-4 pt-8 border-t border-yellow-400/20"
              variants={containerVariants}
            >
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-400">Active Members</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-400">Expert Trainers</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="text-3xl font-bold text-yellow-400">98%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div 
              className="relative rounded-2xl overflow-hidden aspect-[4/3] perspective-1000"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-transparent z-10"
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
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-md">
              <motion.div 
                className="bg-black/80 backdrop-blur-xl border border-yellow-400/20 rounded-xl p-6 grid grid-cols-3 gap-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-400">{feature.description}</p>
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
