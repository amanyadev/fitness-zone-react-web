import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Trainers = () => {
  const experts = [
    {
      name: "Ranjeet Chaudhary",
      title: "Founder & Fitness Expert",
      experience: "25+ Years",
      image: "/ranjeet.jpg",
      achievements: ["Certified Fitness Expert", "Transformation Specialist", "Nutrition Expert"]
    },
    {
      name: "Er. Ram Chaudhary",
      title: "Founder & Fitness Expert",
      experience: "10+ Years",
      image: "/ram.png",
      achievements: ["Engineering Background", "Strength Training Expert", "Fitness Innovator"]
    }
  ];

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
    <section id="experts" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,193,7,0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block bg-yellow-400/5 border border-yellow-400/10 rounded-full px-4 py-2 text-yellow-400 font-medium text-sm uppercase tracking-wider">
              Meet The Founders
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Visionaries Behind
            <span className="block text-yellow-400">
              K4 Fitness Zone
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Meet our expert founders who combined their passion for fitness with years of expertise to create Lucknow's premier fitness destination.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experts.map((expert) => (
            <motion.div
              key={expert.name}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8">
                <div className="flex flex-col items-center">
                  <motion.div 
                    className="relative w-40 h-40 mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-full h-full rounded-full border-2 border-yellow-400/20 overflow-hidden">
                      <img
                        src={expert.image}
                        alt={expert.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </motion.div>

                  <div className="text-center space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
                        {expert.name}
                      </h3>
                      <p className="text-yellow-400/80 font-medium">{expert.title}</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-gray-400">
                      <Award className="w-4 h-4 text-yellow-400/80" />
                      <span className="text-sm">{expert.experience} Experience</span>
                    </div>

                    <div className="pt-4">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {expert.achievements.map((achievement, idx) => (
                          <span 
                            key={idx}
                            className="inline-flex items-center bg-yellow-400/5 text-yellow-400/80 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
