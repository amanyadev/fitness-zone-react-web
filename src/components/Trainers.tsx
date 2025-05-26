import { motion } from "framer-motion";
import { Award } from "lucide-react";

const Trainers = () => {
  const experts = [
    {
      name: "Ranjeet Chaudhary",
      title: "Founder & Fitness Expert",
      experience: "25+ Years",
      image: "/ranjeet.jpg",
    },
    {
      name: "Er. Ram Chaudhary",
      title: "Founder & Fitness Expert",
      experience: "10+ Years",
      image: "/ram.png",
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,193,7,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,193,7,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-2 text-yellow-400 font-medium text-sm uppercase tracking-wider">
              Meet The Experts
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            OUR FITNESS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              EXPERTS
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Meet the visionaries behind K4 Fitness Zone, dedicated to transforming lives through expert fitness guidance.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experts.map((expert) => (
            <motion.div
              key={expert.name}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <motion.div 
                className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-yellow-400/20"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">{expert.name}</h3>
              <p className="text-yellow-400 font-medium text-lg mb-1">{expert.title}</p>
              <div className="flex items-center text-gray-400">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span>{expert.experience} Experience</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
