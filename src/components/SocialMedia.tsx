import { useState } from "react";
import { Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import InstagramFeed from "./InstagramFeed";
import { Image } from "./ui/image";

const SocialMedia = () => {
  const [error, setError] = useState<string | null>(null);
  const instagramUsername = "k4fitnesszone";
  const instagramAccessToken = import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN;

  const openFacebook = () => {
    window.open('https://facebook.com/k4fitnesszone', '_blank');
  };

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

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,0,0.1),transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,0,0.1),transparent_50%)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-8 md:mb-16">
            <motion.div 
              className="inline-block bg-yellow-400/10 border border-yellow-400/20 rounded-full px-3 py-1 mb-4 text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-yellow-400 font-semibold">Stay Connected</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              FOLLOW OUR{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                JOURNEY
              </span>
            </h2>
            <p className="text-sm md:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay connected with our community and get daily motivation on social media.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {/* Instagram Section */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-8 group hover:border-yellow-400/30 transition-all duration-500 h-full">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Instagram className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-fc-fast italic text-white">@{instagramUsername}</h3>
                      <p className="text-xs md:text-base text-gray-400">Follow us on Instagram</p>
                    </div>
                  </div>
                  <button
                    onClick={() => window.open(`https://instagram.com/${instagramUsername}`, '_blank')}
                    className="min-w-[90px] md:min-w-[100px] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                  >
                    Follow
                  </button>
                </div>
                <InstagramFeed 
                  username={instagramUsername}
                  accessToken={instagramAccessToken}
                />
              </div>
            </motion.div>

            {/* Facebook Section */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-8 group hover:border-yellow-400/30 transition-all duration-500 h-full">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Facebook className="w-5 h-5 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-fc-fast italic text-white">K4 FITNESS</h3>
                      <p className="text-xs md:text-base text-gray-400">Like our Facebook page</p>
                    </div>
                  </div>
                  <button
                    onClick={openFacebook}
                    className="min-w-[90px] md:min-w-[100px] bg-blue-600 text-white px-3 py-2 md:px-6 md:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
                  >
                    Like
                  </button>
                </div>

                {/* Facebook Content */}
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-black/30 rounded-xl p-3 md:p-6 border border-white/5">
                    <div className="flex items-start space-x-2 md:space-x-3 mb-3 md:mb-4">
                      <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-fc-fast italic text-xs md:text-sm">K4</span>
                      </div>
                      <div>
                        <p className="text-white font-fc-fast italic text-sm md:text-base">K4 FITNESS</p>
                        <p className="text-xs text-gray-400">1 day ago</p>
                      </div>
                    </div>
                    <p className="text-xs md:text-base text-gray-300 mb-3 md:mb-4">
                      💪 Member spotlight: Congratulations to Sarah on achieving her 6-month transformation goal! 
                      Your dedication inspires us all! 🎉
                    </p>
                    <div className="flex items-center space-x-4 md:space-x-6 text-gray-400 text-xs md:text-sm">
                      <button className="hover:text-blue-400 cursor-pointer transition-colors">👍 67 Likes</button>
                      <button className="hover:text-blue-400 cursor-pointer transition-colors">💬 15 Comments</button>
                      <button className="hover:text-blue-400 cursor-pointer transition-colors">📤 Share</button>
                    </div>
                  </div>

                  <div className="bg-black/30 rounded-xl p-3 md:p-6 border border-white/5">
                    <div className="aspect-video md:aspect-[2/1] relative overflow-hidden rounded-lg mb-3 md:mb-4 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-yellow-400 text-2xl">💪</span>
                        </div>
                        <p className="text-gray-400 text-sm">Fitness Transformation</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 md:space-x-6 text-gray-400 text-xs md:text-sm">
                      <button className="hover:text-blue-400 cursor-pointer transition-colors">👍 124 Likes</button>
                      <button className="hover:text-blue-400 cursor-pointer transition-colors">💬 28 Comments</button>
                      <button className="hover:text-blue-400 cursor-pointer transition-colors">📤 Share</button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 text-center">
                  <button
                    onClick={openFacebook}
                    className="text-yellow-400 hover:text-yellow-500 font-semibold flex items-center justify-center space-x-2 mx-auto group/btn text-sm md:text-base"
                  >
                    <span>Visit our page</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-8 md:mt-16">
            <div className="bg-gradient-to-r from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 rounded-xl p-4 md:p-8">
              <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 text-white">Join Our Community</h3>
              <p className="text-sm md:text-xl text-gray-300 mb-4 md:mb-6 max-w-2xl mx-auto">
                Connect with fellow fitness enthusiasts and stay motivated on your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  onClick={() => window.open(`https://instagram.com/${instagramUsername}`, '_blank')}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 md:px-8 md:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Follow on Instagram</span>
                </motion.button>
                <motion.button
                  onClick={openFacebook}
                  className="bg-blue-600 text-white px-4 py-2 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 text-sm md:text-base"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Like on Facebook</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Debug Error Display */}
          {error && (
            <div className="mt-4 text-center text-red-400 text-xs md:text-sm">
              {error}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialMedia;
