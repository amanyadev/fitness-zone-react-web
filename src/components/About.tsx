
const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WHY CHOOSE 
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                K4 FITNESS?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just a gym - we're a community dedicated to helping you achieve your fitness goals with state-of-the-art equipment and expert guidance.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Expert Trainers</h3>
              <p className="text-gray-300 leading-relaxed">
                Our certified trainers bring years of experience and passion to help you reach your fitness goals safely and effectively.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">🏋️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Premium Equipment</h3>
              <p className="text-gray-300 leading-relaxed">
                State-of-the-art machines and free weights from top brands ensure you have everything needed for an effective workout.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Personal Programs</h3>
              <p className="text-gray-300 leading-relaxed">
                Customized workout plans tailored to your specific goals, fitness level, and lifestyle for maximum results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">🕐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Flexible Hours</h3>
              <p className="text-gray-300 leading-relaxed">
                Open early morning to late evening to fit your busy schedule. Your fitness journey shouldn't wait.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Community</h3>
              <p className="text-gray-300 leading-relaxed">
                Join a supportive community of like-minded individuals who motivate and inspire each other every day.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 transform hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold">🏆</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-orange-500">Proven Results</h3>
              <p className="text-gray-300 leading-relaxed">
                Hundreds of success stories from members who transformed their lives through dedication and our guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
