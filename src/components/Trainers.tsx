
import { motion } from "framer-motion";
import { Award, Users, Target, Clock } from "lucide-react";

const Trainers = () => {
  const trainers = [
    {
      name: "Er. Ram Chaudhary",
      title: "Head Trainer & Fitness Expert",
      specialization: "Strength Training & Bodybuilding",
      experience: "8+ Years",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      achievements: [
        "Certified Personal Trainer (NASM)",
        "Bodybuilding Championship Winner",
        "Nutrition Specialist"
      ],
      description: "Ram brings engineering precision to fitness training. His systematic approach and deep understanding of biomechanics help clients achieve optimal results safely and efficiently."
    },
    {
      name: "Ranjeet Chaudhary",
      title: "Senior Trainer & Conditioning Coach",
      specialization: "Functional Training & Weight Loss",
      experience: "6+ Years",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      achievements: [
        "Certified Functional Movement Specialist",
        "Weight Loss Transformation Expert",
        "Athletic Performance Coach"
      ],
      description: "Ranjeet specializes in creating personalized workout plans that deliver real results. His motivational coaching style and expertise in functional training make fitness enjoyable and sustainable."
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
    <section id="trainers" className="py-20 bg-black relative overflow-hidden">
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
              Expert Guidance
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            MEET OUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              TRAINERS
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our certified trainers bring years of expertise and passion to help you achieve your fitness goals with personalized guidance and proven methodologies.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.name}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-black/40 backdrop-blur-xl border border-yellow-400/20 rounded-2xl p-8 hover:bg-black/60 transition-all duration-300 hover:border-yellow-400/40">
                {/* Trainer Image */}
                <div className="relative mb-8 overflow-hidden rounded-xl">
                  <motion.img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                    whileHover={{ scale: 1.02 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Experience Badge */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {trainer.experience}
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                    <p className="text-yellow-400 font-medium text-lg mb-1">{trainer.title}</p>
                    <p className="text-gray-400">{trainer.specialization}</p>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{trainer.description}</p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <Award className="w-5 h-5 text-yellow-400 mr-2" />
                      Certifications & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {trainer.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-yellow-400/20">
                    <div className="text-center">
                      <Users className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">100+</div>
                      <div className="text-xs text-gray-400">Clients</div>
                    </div>
                    <div className="text-center">
                      <Target className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">95%</div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-lg font-bold text-white">24/7</div>
                      <div className="text-xs text-gray-400">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-yellow-500 transition-all duration-300 inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Book a Session with Our Trainers</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
